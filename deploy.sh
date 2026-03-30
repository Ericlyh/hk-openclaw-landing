#!/bin/bash
# deploy.sh — One-command Vercel deployment
# Run this on your LOCAL machine (or anywhere with Vercel CLI logged in)

set -e

echo "🚀 Deploying HK OpenClaw Landing Page to Vercel..."

# Check if vercel is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Deploy to Vercel
cd "$(dirname "$0")"

echo "📦 Deploying..."
vercel --prod --yes

echo ""
echo "✅ Deployed!"
echo ""
echo "Next steps:"
echo "1. Connect custom domain: Vercel Dashboard → Project → Settings → Domains"
echo "2. Update WhatsApp number in: src/components/WhatsAppButton.jsx"
echo "3. Set up Formspree: https://formspree.io → Create form → Update action URL"
echo "4. Create Stripe Payment Links: https://dashboard.stripe.com → Payment Links"
