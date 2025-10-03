import { Home, Users, Menu, X } from "lucide-react";
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
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-primary-foreground font-bold text-lg md:text-xl">
            سروقامتان کوچ
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-primary/98 border-t border-primary-foreground/10 animate-in slide-in-from-top">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-4 text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors"
              >
                صفحه اصلی
              </Link>
              <div className="text-primary-foreground/70 text-sm font-semibold px-4 pt-2">
                ایلات
              </div>
              {tribes.map((tribe) => (
                <Link
                  key={tribe.path}
                  to={tribe.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 px-4 rounded-md transition-colors ${
                    location.pathname === tribe.path
                      ? "bg-accent text-accent-foreground"
                      : "text-primary-foreground hover:bg-primary-foreground/10"
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
      <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center space-y-3">
            <p className="text-sm opacity-90">
              این سایت غیرتجاری و به منظور حفظ و انتقال میراث فرهنگی ایلات عشایری
              تهران و البرز راه‌اندازی شده است.
            </p>
            <Link
              to="/contact"
              className="inline-block text-accent hover:text-accent/80 transition-colors"
            >
              تماس / مشارکت
            </Link>
          </div>
        </div>
      </footer>

      {/* Bottom Navigation - Mobile Only */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-40">
        <div className="grid grid-cols-2 gap-1 p-2">
          <Link
            to="/"
            className={`flex flex-col items-center justify-center py-3 rounded-lg transition-colors ${
              location.pathname === "/"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted"
            }`}
          >
            <Home className="h-5 w-5 mb-1" />
            <span className="text-xs">خانه</span>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col items-center justify-center py-3 rounded-lg transition-colors text-muted-foreground hover:bg-muted"
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
