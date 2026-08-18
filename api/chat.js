// Vercel Serverless Function: proxies chat requests to Anthropic's Messages API.
// Secret ANTHROPIC_API_KEY must be set in Vercel → Project Settings → Environment Variables.

// Simple in-memory rate limiter (per warm instance — best-effort, not strict).
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

export default async function handler(req, res) {
  // Same-origin on Vercel, but keep permissive CORS so the widget also works if embedded.
  res.setHeader('access-control-allow-origin', '*');
  if (req.method === 'OPTIONS') {
    res.setHeader('access-control-allow-methods', 'POST, OPTIONS');
    res.setHeader('access-control-allow-headers', 'content-type');
    return res.status(204).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limit
  const ip =
    (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
    req.socket?.remoteAddress ||
    'unknown';
  if (!rateLimit(ip)) {
    return res.status(429).json({ error: 'Too many requests, please retry later.' });
  }

  // Vercel auto-parses the JSON body (content-type: application/json).
  const { system, messages } = req.body || {};
  if (!system || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Missing system or messages' });
  }

  // Hard caps to protect spend
  const trimmed = messages.slice(-20).map(m => ({
    role: m.role === 'assistant' ? 'assistant' : 'user',
    content: String(m.content || '').slice(0, 2000),
  }));

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('ANTHROPIC_API_KEY is not set');
    return res.status(500).json({ error: 'Server not configured' });
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
        system: String(system).slice(0, 24000),
        messages: trimmed,
      }),
    });

    if (!r.ok) {
      const errText = await r.text();
      console.error('Anthropic error', r.status, errText);
      return res.status(502).json({ error: 'Upstream error' });
    }

    const data = await r.json();
    const text = data.content?.find(b => b.type === 'text')?.text || '';
    return res.status(200).json({ text });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Internal error' });
  }
}
