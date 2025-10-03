import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mountain, Users, BookOpen, ImageIcon } from "lucide-react";

const tribes = [
  { 
    name: "عرب صحنه‌ای", 
    path: "/tribe/arab-sahnaei",
    description: "با طایفه‌های عبدی، باقری، صادقی و جمالی"
  },
  { 
    name: "کلخی", 
    path: "/tribe/kalkhohi",
    description: "ایلی با تاریخ و فرهنگ غنی"
  },
  { 
    name: "کوتی", 
    path: "/tribe/koti",
    description: "حافظان سنت‌های کهن"
  },
  { 
    name: "هدوند", 
    path: "/tribe/hadavand",
    description: "قبیله‌ای با ریشه‌های عمیق"
  },
  { 
    name: "تاجیک", 
    path: "/tribe/tajik",
    description: "میراث‌داران فرهنگ عشایری"
  },
];

const features = [
  {
    icon: Mountain,
    title: "مسیر کوچ",
    description: "نقشه و مسیرهای ییلاق و قشلاق هر ایل"
  },
  {
    icon: Users,
    title: "تاریخچه",
    description: "ریشه و تاریخ هر یک از ایلات"
  },
  {
    icon: BookOpen,
    title: "فرهنگ و آداب",
    description: "لباس‌ها، غذاها و آیین‌های سنتی"
  },
  {
    icon: ImageIcon,
    title: "گالری",
    description: "تصاویر و روایت‌های صوتی"
  },
];

export default function HomePage() {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-primary to-earth overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-relaxed">
              سروقامتان کوچ
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
              ایلات عشایری تهران و البرز
            </p>
            <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              مستندسازی دیجیتال میراث فرهنگی و سنت‌های کهن پنج ایل عشایری منطقه
            </p>
            <div className="pt-4">
              <Button 
                asChild 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-lg"
              >
                <a href="#tribes">آشنایی با ایلات</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-foreground">
            محتوای سایت
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-shadow border-border bg-card"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-full bg-accent/10">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg text-card-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tribes Section */}
      <section id="tribes" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-foreground">
            ایلات عشایری
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {tribes.map((tribe, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <div className="h-40 bg-gradient-to-br from-primary to-earth flex items-center justify-center">
                  <Mountain className="h-16 w-16 text-primary-foreground/30" />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-card-foreground">
                    {tribe.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {tribe.description}
                  </p>
                  <Button 
                    asChild 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    <Link to={tribe.path}>مشاهده جزئیات</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              درباره این پروژه
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              این وب‌سایت با هدف حفظ و مستندسازی میراث فرهنگی، سنت‌ها و تاریخچه ایلات 
              عشایری تهران و البرز ایجاد شده است. ما تلاش می‌کنیم تا با جمع‌آوری 
              اطلاعات، تصاویر، روایت‌های صوتی و شجره‌نامه‌ها، این میراث ارزشمند را 
              برای نسل‌های آینده حفظ کنیم.
            </p>
            <Button 
              asChild 
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Link to="/contact">همکاری با ما</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
