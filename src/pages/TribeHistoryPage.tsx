import { Card } from "@/components/ui/card";
import { History } from "lucide-react";

interface TribeHistoryPageProps {
  tribeName: string;
  tribeNameEnglish: string;
  cardImage?: string;
}

export default function TribeHistoryPage({ 
  tribeName,
  tribeNameEnglish,
  cardImage
}: TribeHistoryPageProps) {
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
              <History className="h-12 w-12 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">
              تاریخچه و ریشه
            </h1>
            <p className="text-xl text-primary-foreground/90">
              ایل {tribeName}
            </p>
          </div>
        </div>
      </section>

      {/* History Content */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6 md:p-8 border-border bg-card">
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  این بخش به تاریخچه و ریشه‌های ایل {tribeName} می‌پردازد. اطلاعات جامع درباره منشأ، مهاجرت‌ها و تحولات تاریخی این قوم در طول سال‌ها.
                </p>
                
                <p>
                  این ایل از دیرباز در منطقه تهران و البرز زندگی کرده و تاریخی کهن و پرافتخار دارد. نیاکان این قوم از مناطق مختلف به این سرزمین آمده و فرهنگ غنی خود را با خود آورده‌اند.
                </p>
                
                <p>
                  در طول تاریخ، این ایل نقش مهمی در حفظ فرهنگ و سنت‌های عشایری داشته و همواره به ارزش‌های اصیل خود پایبند بوده است.
                </p>

                <div className="mt-8 p-6 bg-muted/30 rounded-lg border border-border">
                  <h3 className="text-xl font-bold text-card-foreground mb-4">
                    نکات مهم تاریخی
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>ریشه‌های باستانی و تاریخی این ایل به قرن‌ها پیش بازمی‌گردد</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>مهاجرت‌های متعدد و استقرار در مناطق مختلف</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>حفظ فرهنگ و سنت‌های اصیل در طول تاریخ</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>نقش مهم در تاریخ و فرهنگ منطقه</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
