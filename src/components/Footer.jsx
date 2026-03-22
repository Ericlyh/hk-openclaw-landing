export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                <span className="text-white text-sm font-bold">OC</span>
              </div>
              <span className="font-bold text-lg text-white">OpenClaw<span className="text-sky-400">香港</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              你嘅 AI 員工，識聽廣東話。
              <br />
              Managed OpenClaw hosting built for Hong Kong SMEs.
            </p>
            <p className="text-xs">
              Made with ❤️ for HK businesses · Built on OpenClaw (open source)
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">產品 / Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">功能 / Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">收費 / Pricing</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">常見問題 / FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">聯絡 / Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">語言 / Language</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">中文</a></li>
              <li><a href="/en" className="hover:text-white transition-colors">English</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 OpenClaw 香港. All rights reserved.</p>
          <p>Powered by OpenClaw · HK · FPS Ready</p>
        </div>
      </div>
    </footer>
  )
}
