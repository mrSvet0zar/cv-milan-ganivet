// Netlify Function: proxies chat requests to Anthropic's Messages API.
// Secret ANTHROPIC_API_KEY must be set in Site Settings → Environment variables.

// Simple in-memory rate limiter (per warm container — best-effort, not strict).
const buckets = new Map();
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQ = 20;               // 20 requests / IP / hour

function rateLimit(ip) {
  const now = Date.now();
  const arr = (buckets.get(ip) || []).filter(t => now - t < WINDOW_MS);
  if (arr.length >= MAX_REQ) return false;
  arr.push(now);
  buckets.set(ip, arr);
  return true;
}

export default async (req) => {
  // CORS / method
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'access-control-allow-origin': '*',
        'access-control-allow-methods': 'POST, OPTIONS',
        'access-control-allow-headers': 'content-type',
      },
    });
  }
  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405);
  }

  // Rate limit
  const ip =
    req.headers.get('x-nf-client-connection-ip') ||
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown';
  if (!rateLimit(ip)) {
    return json({ error: 'Too many requests, please retry later.' }, 429);
  }

  // Parse body
  let body;
  try {
    body = await req.json();
  } catch {
    return json({ error: 'Invalid JSON' }, 400);
  }
  const { system, messages } = body || {};
  if (!system || !Array.isArray(messages) || messages.length === 0) {
    return json({ error: 'Missing system or messages' }, 400);
  }

  // Hard caps to protect spend
  const trimmed = messages.slice(-20).map(m => ({
    role: m.role === 'assistant' ? 'assistant' : 'user',
    content: String(m.content || '').slice(0, 2000),
  }));

  const apiKey = Netlify.env.get('ANTHROPIC_API_KEY');
  if (!apiKey) {
    console.error('ANTHROPIC_API_KEY is not set');
    return json({ error: 'Server not configured' }, 500);
  }

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',
        max_tokens: 1024,
        system: String(system).slice(0, 8000),
        messages: trimmed,
      }),
    });

    if (!r.ok) {
      const errText = await r.text();
      console.error('Anthropic error', r.status, errText);
      return json({ error: 'Upstream error' }, 502);
    }

    const data = await r.json();
    const text = data.content?.find(b => b.type === 'text')?.text || '';
    return json({ text });
  } catch (e) {
    console.error(e);
    return json({ error: 'Internal error' }, 500);
  }
};

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
    },
  });
}

export const config = { path: '/.netlify/functions/chat' };
