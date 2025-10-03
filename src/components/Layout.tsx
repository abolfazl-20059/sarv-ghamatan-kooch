import { Home, Users, Menu, X, Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "./ui/button";

const tribes = [
  { name: "عرب صحنه‌ای", path: "/tribe/arab-sahnaei" },
  { name: "کلخی", path: "/tribe/kalkhohi" },
  { name: "کوتی", path: "/tribe/koti" },
  { name: "هدوند", path: "/tribe/hadavand" },
  { name: "تاجیک", path: "/tribe/tajik" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-lapis via-pomegranate to-lapis backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm">
              <Heart className="h-6 w-6 text-white" fill="white" />
            </div>
            <span className="text-white font-black text-xl md:text-2xl tracking-tight">
              سروقامتان کوچ
            </span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 rounded-xl"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-card/98 backdrop-blur-xl border-t border-border shadow-2xl animate-in slide-in-from-top duration-300">
            <nav className="container mx-auto px-4 py-6 space-y-2">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 py-3 px-5 rounded-xl font-bold transition-all duration-300 ${
                  location.pathname === "/"
                    ? "bg-gradient-to-r from-lapis to-pomegranate text-white shadow-lg"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <Home className="h-5 w-5" />
                صفحه اصلی
              </Link>
              <div className="text-muted-foreground text-sm font-black px-5 pt-4 pb-2">
                ایلات عشایری
              </div>
              {tribes.map((tribe) => (
                <Link
                  key={tribe.path}
                  to={tribe.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 px-5 rounded-xl font-bold transition-all duration-300 ${
                    location.pathname === tribe.path
                      ? "bg-gradient-to-r from-pomegranate to-lapis text-white shadow-lg"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {tribe.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-lapis-dark via-pomegranate-dark to-lapis-dark text-white border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        <div className="container mx-auto px-4 py-8 relative">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Heart className="h-5 w-5 text-gold" fill="currentColor" />
              <span className="font-black text-lg">سروقامتان کوچ</span>
            </div>
            <p className="text-sm text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
              این سایت غیرتجاری و به منظور حفظ و انتقال میراث فرهنگی ایلات عشایری
              تهران و البرز راه‌اندازی شده است.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 font-bold transition-all duration-300 hover:scale-105"
            >
              تماس / مشارکت
            </Link>
          </div>
        </div>
      </footer>

      {/* Bottom Navigation - Mobile Only */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-xl border-t border-border z-40 shadow-2xl">
        <div className="grid grid-cols-2 gap-2 p-3">
          <Link
            to="/"
            className={`flex flex-col items-center justify-center py-3 rounded-xl font-bold transition-all duration-300 ${
              location.pathname === "/"
                ? "bg-gradient-to-r from-lapis to-pomegranate text-white shadow-lg scale-105"
                : "text-muted-foreground hover:bg-muted"
            }`}
          >
            <Home className="h-5 w-5 mb-1" />
            <span className="text-xs">خانه</span>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col items-center justify-center py-3 rounded-xl font-bold transition-all duration-300 text-muted-foreground hover:bg-muted hover:scale-105"
          >
            <Users className="h-5 w-5 mb-1" />
            <span className="text-xs">ایلات</span>
          </button>
        </div>
      </nav>
      
      {/* Bottom padding for mobile nav */}
      <div className="h-20 md:hidden" />
    </div>
  );
}
