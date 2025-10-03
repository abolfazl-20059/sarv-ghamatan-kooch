import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mountain, Users, BookOpen, ImageIcon, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-nomads.jpg";

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
    description: "نقشه و مسیرهای ییلاق و قشلاق هر ایل",
    gradient: "from-lapis to-lapis-dark"
  },
  {
    icon: Users,
    title: "تاریخچه",
    description: "ریشه و تاریخ هر یک از ایلات",
    gradient: "from-pomegranate to-pomegranate-dark"
  },
  {
    icon: BookOpen,
    title: "فرهنگ و آداب",
    description: "لباس‌ها، غذاها و آیین‌های سنتی",
    gradient: "from-lapis-dark to-pomegranate"
  },
  {
    icon: ImageIcon,
    title: "گالری",
    description: "تصاویر و روایت‌های صوتی",
    gradient: "from-pomegranate-dark to-gold"
  },
];

export default function HomePage() {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Nomadic tribes" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-lapis-dark/90 via-pomegranate-dark/80 to-lapis-dark/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_hsl(220_30%_10%/0.5)_100%)]" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>میراث فرهنگی ایلات عشایری</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight" 
                style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              سروقامتان کوچ
            </h1>
            <div className="h-1.5 w-32 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent rounded-full" />
            <p className="text-2xl md:text-3xl text-white/95 font-bold">
              ایلات عشایری تهران و البرز
            </p>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium">
              مستندسازی دیجیتال میراث فرهنگی و سنت‌های کهن پنج ایل عشایری منطقه
            </p>
            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-pomegranate to-pomegranate-dark hover:from-pomegranate-dark hover:to-pomegranate text-white font-bold text-lg px-10 py-7 rounded-2xl shadow-2xl hover:shadow-[0_0_40px_hsl(350_75%_50%/0.5)] transition-all duration-300 hover:scale-105"
              >
                <a href="#tribes">آشنایی با ایلات</a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="border-2 border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold text-lg px-10 py-7 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link to="/contact">همکاری با ما</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_hsl(220_70%_50%/0.05)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_hsl(350_75%_50%/0.05)_0%,_transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-foreground bg-gradient-to-r from-lapis via-pomegranate to-lapis bg-clip-text text-transparent">
              محتوای سایت
            </h2>
            <div className="h-1.5 w-24 mx-auto bg-gradient-to-r from-lapis via-pomegranate to-lapis rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group p-8 hover:shadow-[0_20px_60px_-15px_hsl(220_70%_50%/0.3)] transition-all duration-500 border-border bg-card hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className="relative flex flex-col items-center text-center space-y-4">
                  <div className={`p-5 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-black text-2xl text-card-foreground">{feature.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tribes Section */}
      <section id="tribes" className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-lapis/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pomegranate/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-foreground bg-gradient-to-r from-pomegranate via-lapis to-pomegranate bg-clip-text text-transparent">
              ایلات عشایری
            </h2>
            <div className="h-1.5 w-24 mx-auto bg-gradient-to-r from-pomegranate via-lapis to-pomegranate rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              پنج ایل اصلی منطقه تهران و البرز را بشناسید
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {tribes.map((tribe, index) => (
              <Card 
                key={index}
                className="group overflow-hidden hover:shadow-[0_30px_90px_-15px_hsl(220_70%_50%/0.4)] transition-all duration-500 border-2 hover:border-lapis/50 bg-card hover:scale-105 hover:-translate-y-3"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-56 bg-gradient-to-br from-lapis via-pomegranate to-lapis-dark overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_hsl(220_30%_10%/0.3)_100%)]" />
                  <Mountain className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 text-white/20 group-hover:scale-125 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 space-y-4 relative">
                  <h3 className="text-2xl font-black text-card-foreground group-hover:text-lapis transition-colors duration-300">
                    {tribe.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tribe.description}
                  </p>
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-lapis to-pomegranate hover:from-lapis-dark hover:to-pomegranate-dark text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lapis/5 via-transparent to-pomegranate/5" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <Card className="p-10 md:p-16 text-center space-y-8 shadow-[0_30px_90px_-15px_hsl(220_70%_50%/0.2)] border-2 border-lapis/10 bg-card/80 backdrop-blur-sm">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-black text-foreground">
                  درباره این پروژه
                </h2>
                <div className="h-1 w-20 mx-auto bg-gradient-to-r from-lapis to-pomegranate rounded-full" />
              </div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                این وب‌سایت با هدف حفظ و مستندسازی میراث فرهنگی، سنت‌ها و تاریخچه ایلات 
                عشایری تهران و البرز ایجاد شده است. ما تلاش می‌کنیم تا با جمع‌آوری 
                اطلاعات، تصاویر، روایت‌های صوتی و شجره‌نامه‌ها، این میراث ارزشمند را 
                برای نسل‌های آینده حفظ کنیم.
              </p>
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-pomegranate to-lapis hover:from-pomegranate-dark hover:to-lapis-dark text-white font-bold text-lg px-12 py-7 rounded-2xl shadow-2xl hover:shadow-[0_0_40px_hsl(220_70%_50%/0.5)] transition-all duration-300 hover:scale-105"
              >
                <Link to="/contact">همکاری با ما</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
