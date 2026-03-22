# DEPLOY.md — HK OpenClaw Landing Page Launch Guide

**Last Updated:** 2026-03-22
**Phase:** MVP Launch
**Author:** PM Subagent

---

## What Was Built

This directory contains:
```
projects/revenue-project/
├── landing/                    # Next.js 14 + Tailwind landing page
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.js       # Root layout with meta tags
│   │   │   ├── page.js         # Full landing page
│   │   │   └── globals.css     # Global styles + Tailwind
│   │   └── components/
│   │       ├── WhatsAppButton.jsx
│   │       └── Footer.jsx
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── next.config.js
├── skills/
│   ├── restaurant-assistant.md  # 餐廳助理 skill template
│   ├── reception-agent.md       # 接待處 skill template
│   └── onlineshop-agent.md     # 網店助手 skill template
└── DEPLOY.md                   # This file
```

---

## Step 1: GitHub Repo Setup

### Create the GitHub Repository

Run on your local machine (or use the API below):

```bash
# Create repo via GitHub API
curl -X POST \
  -H "Authorization: token YOUR_GITHUB_PAT" \
  -H "Content-Type: application/json" \
  https://api.github.com/user/repos \
  -d '{
    "name": "hk-openclaw-landing",
    "description": "OpenClaw 香港 — 你嘅 AI 員工，識聽廣東話 | HK Managed OpenClaw Hosting",
    "homepage": "https://hkopenclaw.com",
    "private": false,
    "has_issues": true,
    "has_projects": false,
    "has_wiki": false
  }'
```

### Push to GitHub

```bash
cd projects/revenue-project/landing

# Initialize git (if not already)
git init
git add .
git commit -m "MVP: HK OpenClaw Landing Page + Skills

- Landing page: Next.js 14 + Tailwind, Cantonese/English
- 3 skill templates: restaurant, reception, onlineshop
- WhatsApp floating button, FPS pricing tiers
- Mobile responsive, production ready"

git branch -M main
git remote add origin https://github.com/Ericlyh/hk-openclaw-landing.git
git push -u origin main
```

---

## Step 2: Deploy to Vercel (Free)

### Option A: Via Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy (from landing directory)
cd projects/revenue-project/landing
vercel --prod

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? hk-openclaw-landing
# - Directory? ./
# - Override settings? No
```

### Option B: Via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Login → "Add New Project"
3. Import from GitHub: select `Ericlyh/hk-openclaw-landing`
4. Framework: Next.js (auto-detected)
5. Root Directory: `projects/revenue-project/landing`
6. Build Command: `npm run build` (auto-filled)
7. Output Directory: `.next` (auto-filled)
8. Environment Variables: None needed at MVP
9. Click "Deploy"

**Vercel URL:** `https://hk-openclaw-landing.vercel.app` (or your custom domain)

---

## Step 3: Domain Setup (hkopenclaw.com)

### Buy Domain

1. Go to **Namecheap** or **GoDaddy**
2. Search for `hkopenclaw.com` (or similar)
3. Buy: ~$10–15 USD/year
4. Use **Namecheap** — easiest DNS management

### Connect Domain to Vercel

1. In **Vercel Dashboard** → Project → Settings → Domains
2. Add `hkopenclaw.com`
3. Vercel gives you DNS records
4. In **Namecheap** → Domain → Advanced DNS:
   - Add A record: `@` → `76.76.21.21`
   - Add CNAME: `www` → `cname.vercel-dns.com`
5. Wait 5–30 minutes for propagation

### Alternative: Use Vercel Free Domain

If you don't want to buy domain yet, use Vercel's free subdomain:
- Vercel auto-assigns: `hk-openclaw-landing.vercel.app`
- You can rename in Project Settings → Domains

---

## Step 4: Form Setup (Formspree — Free Tier)

The contact form uses Formspree for MVP (no backend needed).

### Setup:

1. Go to [formspree.io](https://formspree.io)
2. Sign up (free)
3. Create a new form
4. Copy your **Form ID** (e.g., `xpwzgzlb`)
5. In `src/app/page.js`, find:

```jsx
action="https://formspree.io/f/-placeholder"
```

Replace `-placeholder` with your actual Form ID:

```jsx
action="https://formspree.io/f/xpwzgzlb"
```

6. In Formspree dashboard, set up **Email notification**:
   - Notifications → Add email: your email
   - Form will email you when someone submits

### Alternative: Use a Google Form Embed

```html
<iframe src="https://docs.google.com/forms/d/YOUR_FORM_ID/viewform?embedded=true" 
  width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0">
  Loading...
</iframe>
```

---

## Step 5: WhatsApp Setup

### Update WhatsApp CTA Link

In `src/components/WhatsAppButton.jsx`, update the phone number:

```jsx
href="https://wa.me/852XXXXXXXX?text=你好，我對 OpenClaw 香港好有興趣！"
```

Replace `852XXXXXXXX` with your actual Hong Kong WhatsApp number (no spaces, no + sign).

**To get your WhatsApp link:**
1. Open WhatsApp → Settings → Your phone number
2. Format: `852` + number (e.g., `85261234567`)
3. Test link: `https://wa.me/85261234567`

---

## Step 6: Stripe Setup (For Card Payments)

### Create Stripe Account

1. Go to [stripe.com](https://stripe.com) → Sign up
2. Choose Hong Kong as country
3. Complete business verification

### Create Payment Links (No Code Needed)

1. In Stripe Dashboard → Payment Links
2. Create a link for each plan:
   - Starter: `https://buy.stripe.com/...` (set price: $199 HKD)
   - Pro: `https://buy.stripe.com/...` (set price: $399 HKD)
   - Business: `https://buy.stripe.com/...` (set price: $799 HKD)
3. Copy these links into the pricing section of the landing page

### Update Landing Page with Stripe Links

In `src/app/page.js`, find the pricing CTA buttons:

```jsx
<a href="#contact" className="...">開始免費試用</a>
```

Change to:

```jsx
<a href="https://buy.stripe.com/YOUR_STARTER_LINK" className="...">開始免費試用</a>
```

---

## Step 7: FPS Setup (Manual at MVP)

### Generate FPS QR Code

1. Log into your HK bank app (HSBC, Hang Seng, etc.)
2. Go to FPS → Generate QR code
3. Save as PNG (min 300x300px)
4. Upload to `public/` folder as `fps-qr.png`

### Display FPS QR on Payment Confirmation

For MVP, FPS payment is manual:
1. Customer sends screenshot of FPS transfer
2. You verify in bank app
3. You manually activate their agent

### Optional: Stripe FPS Extension

If using Stripe for FPS:
1. Stripe Dashboard → Products → Add product
2. Set price in HKD
3. Use Stripe Payment Link (works for FPS via Stripe's HK integration)

---

## Step 8: Telegram Bot Setup (Demo Bot)

### Create a Demo Bot

1. Open Telegram → search **@BotFather**
2. Send `/newbot`
3. Bot Name: `OpenClaw 香港 Demo`
4. Bot Username: `hkopenclaw_demo_bot`
5. Copy the **Bot Token** (format: `123456789:ABCdef...`)

### Connect Bot to OpenClaw

```bash
# SSH into your managed VPS (or local dev machine)
openclaw bot connect \
  --token "YOUR_BOT_TOKEN" \
  --agent "demo-restaurant"
```

### Add Bot to Your Telegram Channel/Group

1. Add the bot to your Telegram
2. Start a chat with it
3. Send `/start`
4. Configure webhook in OpenClaw dashboard

---

## Step 9: VPS Provisioning (Manual — MVP Stage)

### Recommended VPS Providers

| Provider | Location | Price | Link |
|---|---|---|---|
| DigitalOcean | Singapore/SF | $6–20/mo | digitalocean.com |
| OVH Cloud | Hong Kong | €5–10/mo | ovhcloud.com |
| LightNode | Hong Kong | $5–15/mo | lightnode.com |
| Vultr | Tokyo/Singapore | $6–20/mo | vultr.com |

### Recommended: DigitalOcean $6/mo VPS

1. Go to [digitalocean.com](https://digitalocean.com)
2. Create account → $200 free credit with this link
3. Create Droplet:
   - Choose: Ubuntu 22.04 LTS
   - Size: $6/mo (1GB RAM, 1 vCPU, 25GB SSD)
   - Region: Singapore or San Francisco (closest to HK)
4. SSH in:

```bash
ssh root@YOUR_DROPLET_IP
```

### Install OpenClaw

```bash
# Update system
apt update && apt upgrade -y

# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Install OpenClaw
npm install -g openclaw

# Verify
openclaw --version

# Create non-root user
adduser openclaw
usermod -aG sudo openclaw
su - openclaw

# Initialize OpenClaw
openclaw init
# Follow prompts:
# - Instance name: hk-openclaw-vps
# - Admin password: [set strong password]
# - Domain: [your domain or IP]
# - HTTPS: Use Let's Encrypt (or skip for now)
```

### Install and Configure Telegram Bot

```bash
# Create bot configuration
openclaw bot create \
  --name "demo-restaurant" \
  --telegram-token "YOUR_BOT_TOKEN" \
  --template "restaurant-assistant"

# Start the bot
openclaw bot start demo-restaurant

# Check status
openclaw bot status
```

### Firewall Setup

```bash
# UFW firewall
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable

# Check ports
ufw status
```

---

## Step 10: First 3 Beta Customers — Onboarding

### Send This WhatsApp Message to First Beta Users:

> 你好！我是 [你的名字]，我整咗一個 AI 員工平台幫 HK 中小企用。
>
> 想問你間 [餐廳/店鋪] 有冇興趣試用 7 日免費？
>
> 主要可以幫你：
> ✅ 自動覆 WhatsApp / Telegram 客人booking/查詢
> ✅ 用廣東話
> ✅ 直接 FPS 收款
>
> 唔使信用卡，7日後如果你覺得好用先至決定係否繼續。
>
> 有興趣可以回覆我，我幫你 5 分鐘設定好！

### Beta Onboarding Script (After They Say Yes)

**Step 1: Collect Info**
- Name:
- Business type (餐廳/零售/網店/etc):
- WhatsApp or Telegram preference:
- Main use case (booking/query/payment):

**Step 2: Create Telegram Bot for Them**
- Guide them to create a Telegram bot via @BotFather
- Collect their bot token
- Deploy their agent template

**Step 3: FPS Setup**
- Ask them to generate a FPS QR code from their bank app
- Use that QR code for payments to their business
- OR use your platform's Stripe account (they get paid, you take subscription)

**Step 4: Activate & Test**
- Send them a test message via their bot
- Make sure it responds in Cantonese
- Walk them through how it looks from customer side

**Step 5: Confirm & Follow-up**
- "有任何問題可以 WhatsApp 我"
- Set a reminder to follow up Day 5
- Day 7: Send payment request

---

## Step 11: Final Pre-Launch Checklist

- [ ] Landing page deployed to Vercel
- [ ] Domain connected (or using Vercel subdomain)
- [ ] Formspree form created and connected
- [ ] WhatsApp CTA updated with real number
- [ ] Stripe Payment Links created (or use contact form for now)
- [ ] Telegram demo bot created and tested
- [ ] 3 skill templates ready in `/skills/` folder
- [ ] First 3 beta users contacted via WhatsApp
- [ ] DEPLOY.md reviewed

---

## Quick Commands Reference

```bash
# Build landing page locally
cd projects/revenue-project/landing
npm run build

# Preview production build
npm start

# Deploy to Vercel (from landing directory)
vercel --prod

# Git push
cd projects/revenue-project/landing
git add .
git commit -m "your message"
git push

# SSH into VPS
ssh openclaw@YOUR_VPS_IP

# OpenClaw commands on VPS
openclaw agent list
openclaw agent status [name]
openclaw agent restart [name]
openclaw logs [name]
```

---

## Vercel + GitHub Auto-Deploy

Once connected:
1. Every `git push` to `main` auto-deploys to Vercel
2. Preview deployments for each PR
3. Instant rollback if something breaks

To enable:
1. Vercel Dashboard → Project → Settings → Git
2. Connect to GitHub repo
3. Set Branch: `main`
4. Build Command: `npm run build`
5. Output Directory: `.next`

---

## Costs at MVP Stage

| Item | Cost | Notes |
|---|---|---|
| Vercel (Hobby) | Free | Up to 100GB bandwidth/mo |
| Domain (hkopenclaw.com) | ~$100 HKD/yr | Optional at MVP |
| Formspree (Free) | Free | Up to 50 submissions/mo |
| VPS (DigitalOcean) | ~$48 HKD/mo | $6/mo, 1GB RAM |
| Stripe | 2.9% + $2 HKD | Per transaction |
| **Total at MVP** | **~$50 HKD/mo** | Plus Stripe fees |

---

## Files to Edit Before Going Live

1. **`src/app/page.js`** — Update WhatsApp CTA number
2. **`src/app/page.js`** — Update Stripe Payment Links (when ready)
3. **`src/components/WhatsAppButton.jsx`** — Update WhatsApp number
4. **`src/app/page.js`** — Update testimonials with real customers (when available)
5. **Formspree** — Create account, get Form ID, update `action` URL

---

**Ready to launch. Go get those first paying customers! 🚀**
