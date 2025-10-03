import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  History, 
  Map, 
  Shirt, 
  MessageSquare, 
  UtensilsCrossed, 
  ImageIcon, 
  Mic, 
  Users,
  Mountain
} from "lucide-react";

interface TribePageProps {
  tribeName: string;
  tribeNameEnglish: string;
  subClans?: string[];
  description?: string;
}

const sections = [
  { 
    id: "history", 
    title: "تاریخچه و ریشه", 
    icon: History,
    content: "تاریخچه و ریشه‌های این ایل در این بخش قرار خواهد گرفت. اطلاعات جامع درباره منشأ، مهاجرت‌ها و تحولات تاریخی این قوم."
  },
  { 
    id: "migration", 
    title: "نقشه و مسیر کوچ (ییلاق و قشلاق)", 
    icon: Map,
    content: "نقشه مسیرهای کوچ، مکان ییلاق و قشلاق و اطلاعات جغرافیایی در این قسمت خواهد بود."
  },
  { 
    id: "attire", 
    title: "لباس‌ها و رنگ‌ها", 
    icon: Shirt,
    content: "توضیحات و تصاویر لباس‌های سنتی، رنگ‌های نمادین و پوشاک روزمره و مراسمی."
  },
  { 
    id: "language", 
    title: "اصطلاحات و زبان", 
    icon: MessageSquare,
    content: "واژگان، اصطلاحات خاص، گویش و زبان رایج در میان اعضای این ایل."
  },
  { 
    id: "cuisine", 
    title: "غذاها و آیین‌ها", 
    icon: UtensilsCrossed,
    content: "غذاهای سنتی، آیین‌های مربوط به پخت و پز، جشن‌ها و مراسم خاص."
  },
];

export default function TribePage({ 
  tribeName, 
  tribeNameEnglish, 
  subClans,
  description 
}: TribePageProps) {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-b from-primary to-earth overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-4">
            <Mountain className="h-16 w-16 mx-auto text-primary-foreground/50 mb-4" />
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">
              ایل {tribeName}
            </h1>
            {description && (
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Sub-clans Section */}
      {subClans && subClans.length > 0 && (
        <section className="py-8 bg-muted/30 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users className="h-5 w-5 text-accent" />
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  طایفه‌ها
                </h2>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {subClans.map((clan, index) => (
                  <div 
                    key={index}
                    className="px-4 py-2 bg-card border border-border rounded-lg text-card-foreground font-medium"
                  >
                    {clan}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Content Sections */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Card 
                  key={section.id}
                  className="p-6 md:p-8 border-border bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent/10 flex-shrink-0">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                        {section.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}

            {/* Gallery Section */}
            <Card className="p-6 md:p-8 border-border bg-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-accent/10 flex-shrink-0">
                  <ImageIcon className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                    بخش گالری
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    تصاویر و ویدیوهای مستند از زندگی، فرهنگ و سنت‌های این ایل.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i}
                        className="aspect-square bg-muted/50 rounded-lg flex items-center justify-center"
                      >
                        <ImageIcon className="h-8 w-8 text-muted-foreground/40" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Audio Narratives Section */}
            <Card className="p-6 md:p-8 border-border bg-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-accent/10 flex-shrink-0">
                  <Mic className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                    روایت‌های صوتی
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    روایت‌های شفاهی ریش‌سفیدان و داستان‌های زندگی عشایری.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <Mic className="ml-2 h-4 w-4" />
                    پخش روایت‌ها (به زودی)
                  </Button>
                </div>
              </div>
            </Card>

            {/* Genealogy Section */}
            <Card className="p-6 md:p-8 border-border bg-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-accent/10 flex-shrink-0">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                    شجره‌نامه‌ها
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    اطلاعات شجره‌نامه‌ای خانواده‌ها و نسب‌نامه افراد ایل.
                  </p>
                  <Button 
                    variant="outline"
                    className="w-full border-muted-foreground text-muted-foreground hover:bg-muted"
                    disabled
                  >
                    در دست تکمیل
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
