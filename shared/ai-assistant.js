// Production AI assistant — calls a Netlify Function instead of window.claude.
// The Netlify Function holds the ANTHROPIC_API_KEY secret server-side.

(function () {
  // Keep a small rolling history so the bot has conversational context.
  const history = [];
  const MAX_TURNS = 10;

  async function ask(question) {
    const lang = (window.Tweaks?.get?.().lang) || 'fr';
    const systemPrompt = window.CV_SYSTEM_PROMPT(lang);

    history.push({ role: 'user', content: question });
    // Trim to last MAX_TURNS exchanges
    while (history.length > MAX_TURNS * 2) history.shift();

    try {
      const res = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          system: systemPrompt,
          messages: history,
        }),
      });
      if (!res.ok) {
        const err = await res.text();
        console.error('Chat function error:', res.status, err);
        throw new Error('HTTP ' + res.status);
      }
      const data = await res.json();
      const text = data.text || '';
      history.push({ role: 'assistant', content: text });
      return text;
    } catch (e) {
      console.error(e);
      // Remove the unanswered user turn so retries don't double up
      history.pop();
      return lang === 'fr'
        ? "Désolé, je n'arrive pas à répondre pour le moment. Réessayez dans un instant."
        : "Sorry, I can't answer right now. Please try again in a moment.";
    }
  }

  window.CvAI = { ask, _history: history };
})();
