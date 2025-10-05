import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Play } from "lucide-react";

interface TribeAudioPageProps {
  tribeName: string;
  tribeNameEnglish: string;
  cardImage?: string;
}

const sampleAudios = [
  {
    title: "روایت ریش‌سفیدان - خاطرات کوچ",
    description: "داستان‌های کوچ از زبان بزرگان ایل",
    duration: "12:45"
  },
  {
    title: "سنت‌های قدیمی و آیین‌ها",
    description: "توضیح آیین‌های سنتی و فرهنگ اصیل",
    duration: "8:30"
  },
  {
    title: "داستان‌های محلی و افسانه‌ها",
    description: "افسانه‌ها و قصه‌های قدیمی از نسلی به نسل دیگر",
    duration: "15:20"
  },
  {
    title: "شرح زندگی عشایری",
    description: "توضیح سبک زندگی و فعالیت‌های روزمره",
    duration: "10:15"
  }
];

export default function TribeAudioPage({ 
  tribeName,
  tribeNameEnglish,
  cardImage
}: TribeAudioPageProps) {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        {/* Background Image */}
        {cardImage && (
          <div className="absolute inset-0">
            <img 
              src={cardImage} 
              alt={`${tribeName} background`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/80" />
          </div>
        )}
        {!cardImage && (
          <div className="absolute inset-0 bg-primary" />
        )}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md inline-flex mx-auto mb-4">
              <Mic className="h-12 w-12 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">
              روایت‌های صوتی
            </h1>
            <p className="text-xl text-primary-foreground/90">
              ایل {tribeName}
            </p>
          </div>
        </div>
      </section>

      {/* Audio Content */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6 md:p-8 border-border bg-card">
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                مجموعه روایت‌های شفاهی ریش‌سفیدان و داستان‌های زندگی عشایری ایل {tribeName} که میراث فرهنگی این قوم را به نسل‌های آینده منتقل می‌کند.
              </p>
              
              <div className="space-y-4">
                {sampleAudios.map((audio, i) => (
                  <Card 
                    key={i}
                    className="p-4 bg-muted/30 border-border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-accent/10 flex-shrink-0">
                        <Play className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h3 className="text-lg font-bold text-card-foreground">
                          {audio.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {audio.description}
                        </p>
                        <p className="text-xs text-muted-foreground/70">
                          مدت زمان: {audio.duration}
                        </p>
                      </div>
                      <Button 
                        variant="outline"
                        size="sm"
                        className="flex-shrink-0"
                        disabled
                      >
                        <Play className="h-4 w-4 ml-2" />
                        پخش
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-muted/20 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground text-center">
                  فایل‌های صوتی به زودی در دسترس خواهند بود
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
