import './globals.css'

export const metadata = {
  title: 'OpenClaw 香港 — 你嘅 AI 員工，識聽廣東話',
  description: '香港中小企 AI 助手平台。一鍵接通 Telegram，支援 FPS 收款。幫你慳時間、慳人手、慳金錢。',
  keywords: 'AI 員工 香港, OpenClaw 香港, WhatsApp AI 香港, 餐廳 AI 系統, 中小企 AI 工具',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-HK" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className="antialiased bg-white text-slate-800">
        {children}
      </body>
    </html>
  )
}
