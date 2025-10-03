import { Card } from "@/components/ui/card";
import { Mail, Users, Heart } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-[80vh] py-12 md:py-20 animate-in fade-in duration-500">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              تماس و مشارکت
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ما به دنبال همکاری با افراد علاقه‌مند به حفظ میراث فرهنگی عشایر هستیم
            </p>
          </div>

          <Card className="p-8 md:p-10 border-border bg-card space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-accent/10 flex-shrink-0">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-bold text-card-foreground">
                  همکاری با ما
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  اگر شما نیز اطلاعات، تصاویر، روایت‌های صوتی، یا هر محتوای دیگری 
                  درباره این ایلات دارید که می‌خواهید با ما به اشتراک بگذارید، 
                  خوشحال می‌شویم با شما همکاری کنیم.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-accent/10 flex-shrink-0">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-bold text-card-foreground">
                  اهداف ما
                </h3>
                <ul className="text-muted-foreground leading-relaxed space-y-1 list-disc list-inside">
                  <li>حفظ و مستندسازی میراث فرهنگی</li>
                  <li>ثبت روایت‌های شفاهی ریش‌سفیدان</li>
                  <li>تهیه آرشیو تصویری و صوتی</li>
                  <li>جمع‌آوری شجره‌نامه‌ها</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-accent/10 flex-shrink-0">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-bold text-card-foreground">
                  راه‌های ارتباطی
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  برای همکاری و ارسال محتوا لطفاً از طریق فرم زیر با ما در ارتباط باشید.
                  <br />
                  <span className="text-sm">(فرم تماس به زودی فعال خواهد شد)</span>
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-muted/30 border-border">
            <p className="text-center text-sm text-muted-foreground leading-relaxed">
              این پروژه کاملاً غیرانتفاعی و با هدف حفظ میراث فرهنگی ایلات عشایری 
              تهران و البرز انجام می‌شود. تمامی اطلاعات ارسالی با احترام کامل به 
              حریم خصوصی و با هدف آموزشی و تاریخی استفاده خواهد شد.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
