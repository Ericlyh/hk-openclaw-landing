# OpenClaw 香港 🇭🇰

> 你嘅 AI 員工，識聽廣東話 — Your AI employee that speaks Cantonese

**HK Managed OpenClaw Hosting** — A managed OpenClaw platform built for Hong Kong SMEs. One-click Telegram bots, FPS payments, Cantonese-first AI.

## 🛠️ Tech Stack

- **Frontend:** Next.js 14 + Tailwind CSS
- **Deployment:** Vercel (free)
- **Payments:** Stripe (cards) + FPS (manual at MVP)
- **AI Framework:** OpenClaw
- **Channel:** Telegram + WhatsApp

## 📁 Project Structure

```
hk-openclaw-landing/
├── src/
│   ├── app/
│   │   ├── page.js          # Landing page
│   │   ├── layout.js        # Root layout
│   │   └── globals.css      # Tailwind + styles
│   └── components/
│       ├── WhatsAppButton.jsx
│       └── Footer.jsx
├── skills/
│   ├── restaurant-assistant.md  # 餐廳助理
│   ├── reception-agent.md       # 接待處
│   └── onlineshop-agent.md     # 網店助手
├── DEPLOY.md                 # Full launch guide
└── package.json
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build
npm run build
```

## 💰 Pricing

| Plan | Price | Target |
|---|---|---|
| Starter | $199/mo | Freelancers, micro-SMEs |
| Pro | $399/mo | Growing SMEs |
| Business | $799/mo | Multi-location businesses |

## 🔗 Links

- **Landing Page:** https://hk-openclaw-landing.vercel.app
- **GitHub:** https://github.com/Ericlyh/hk-openclaw-landing
- **DEPLOY.md:** Full launch instructions

## 📋 MVP Status

- ✅ Landing page built
- ✅ 3 Cantonese skill templates
- ✅ WhatsApp floating CTA
- ✅ 3 pricing tiers
- ✅ Mobile responsive
- ✅ Bilingual (Cantonese + English)
- ⏳ Vercel deployment (manual step)
- ⏳ Domain setup (manual step)
- ⏳ Stripe + FPS setup (manual step)
- ⏳ First beta customers (manual step)

## 📄 License

MIT
