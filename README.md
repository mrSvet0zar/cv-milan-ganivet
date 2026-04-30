# CV Milan Ganivet — Déploiement Netlify

CV en ligne avec assistant IA (Claude). Prêt à déployer sur Netlify.

## Structure

```
dist-netlify/
├── index.html              ← page principale (notebook Jupyter)
├── netlify.toml            ← config Netlify (functions + headers)
├── _redirects              ← alias /chat → function
├── package.json
├── shared/
│   ├── content.js          ← TON contenu (à mettre à jour ici uniquement)
│   ├── tweaks.js           ← panneau de réglages (langue, thème...)
│   └── ai-assistant.js     ← appelle /.netlify/functions/chat
└── netlify/
    └── functions/
        └── chat.js         ← proxy vers l'API Anthropic
```

## Déploiement — 4 étapes

### 1. Obtenir une clé API Anthropic
- Va sur https://console.anthropic.com
- Settings → API Keys → Create Key
- Copie la clé (elle commence par `sk-ant-...`)

### 2. Déployer sur Netlify

**Option A — Drag & drop (le plus rapide)**
1. Va sur https://app.netlify.com/drop
2. Glisse-dépose le dossier `dist-netlify/` entier
3. Note l'URL générée (ex: `silly-name-123.netlify.app`)

**Option B — Via Git (recommandé pour les mises à jour)**
1. Crée un repo GitHub avec le contenu de `dist-netlify/`
2. Sur Netlify : "Add new site" → "Import an existing project" → connecte le repo
3. Build settings : laisse les valeurs par défaut (le `netlify.toml` les définit)

### 3. Configurer la clé API
- Dans Netlify : **Site settings → Environment variables → Add a variable**
- Key : `ANTHROPIC_API_KEY`
- Value : ta clé `sk-ant-...`
- Scopes : laisse "All scopes"
- **Trigger a redeploy** (Deploys → Trigger deploy → Deploy site) pour que la function la prenne en compte.

### 4. Brancher ton domaine perso
- **Site settings → Domain management → Add custom domain**
- Entre ton domaine (ex: `milan-ganivet.fr`)
- Netlify te donne les enregistrements DNS à ajouter chez ton registrar :
  - Soit changer les nameservers vers ceux de Netlify (le plus simple, gestion DNS chez Netlify)
  - Soit ajouter un `CNAME` ou un `A record` (si tu gardes ton DNS actuel)
- HTTPS auto via Let's Encrypt en quelques minutes.

## Test local (optionnel)

Si tu veux tester localement avant de déployer :

```bash
npm install -g netlify-cli
cd dist-netlify
netlify dev
```

Puis crée un fichier `.env` avec `ANTHROPIC_API_KEY=sk-ant-...` (ne le commit pas).

## Coûts attendus

- **Netlify** : gratuit pour ce volume (limite : 125k invocations de functions/mois)
- **Anthropic Claude Haiku** : pay-as-you-go
  - ~$0.25 par million de tokens d'entrée
  - ~$1.25 par million de tokens de sortie
  - Pour un CV : quelques centimes par mois, même avec du trafic
- **Domaine** : ~10€/an chez OVH, Gandi, Cloudflare Registrar...

## Sécurité

La function `chat.js` inclut :
- Rate limiting : 20 requêtes / IP / heure
- Limite de tokens : 1024 max en sortie
- Troncature des messages : 2000 chars max par message, max 20 messages d'historique
- La clé API ne quitte jamais le serveur

Pour un rate limiting plus strict (cross-container), tu peux brancher Upstash Redis.

## Mettre à jour le contenu

Tout le contenu du CV est dans `shared/content.js` (FR + EN dans le même fichier).
Modifie ce fichier, redéploie, terminé.
