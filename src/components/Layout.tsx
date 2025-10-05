import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary shadow-[var(--shadow-elegant)] backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm">
              <Heart className="h-6 w-6 text-white" fill="white" />
            </div>
            <span className="text-white font-black text-xl md:text-2xl tracking-tight">
              سروقامتان کوچ
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 page-transition-enter">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-white border-t border-white/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        <div className="container mx-auto px-4 py-8 relative">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Heart className="h-5 w-5 text-white" fill="currentColor" />
              <span className="font-black text-lg">سروقامتان کوچ</span>
            </div>
            <p className="text-sm text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
              این سایت غیرتجاری و به منظور حفظ و انتقال میراث فرهنگی ایلات عشایری
              تهران و البرز راه‌اندازی شده است.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 font-bold transition-all duration-300 hover:scale-[1.02]"
            >
              تماس / مشارکت
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
