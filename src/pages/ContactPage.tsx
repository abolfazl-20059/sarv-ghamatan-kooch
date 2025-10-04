import { Card } from "@/components/ui/card";
import { Mail, Users, Heart, FileText } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-sm font-bold text-primary">
              <Heart className="h-4 w-4" fill="currentColor" />
              <span>با ما در تماس باشید</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-foreground">
              تماس و همکاری
            </h1>
            <div className="h-1.5 w-24 mx-auto bg-primary rounded-full" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
              برای مشارکت در حفظ میراث فرهنگی یا ارسال اطلاعات با ما در ارتباط باشید
            </p>
          </div>

          <Card className="p-10 md:p-16 shadow-[var(--shadow-elegant)] border-2 border-primary/10 bg-card space-y-8 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            <div className="flex items-start gap-6">
              <div className="p-5 rounded-2xl bg-primary shadow-lg flex-shrink-0">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-2xl font-black text-card-foreground">همکاری با ما</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  اگر اطلاعات، تصاویر، روایت‌های صوتی یا محتوای دیگری درباره این ایلات دارید، خوشحال می‌شویم با شما همکاری کنیم.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-5 rounded-2xl bg-accent shadow-lg flex-shrink-0">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-2xl font-black text-card-foreground">اهداف ما</h3>
                <ul className="text-lg text-muted-foreground leading-relaxed space-y-2">
                  <li className="flex items-center gap-2">• حفظ و مستندسازی میراث فرهنگی</li>
                  <li className="flex items-center gap-2">• ثبت روایت‌های شفاهی ریش‌سفیدان</li>
                  <li className="flex items-center gap-2">• تهیه آرشیو تصویری و صوتی</li>
                  <li className="flex items-center gap-2">• جمع‌آوری شجره‌نامه‌ها</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-5 rounded-2xl bg-primary shadow-lg flex-shrink-0">
                <FileText className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-2xl font-black text-card-foreground">راه‌های ارتباطی</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  برای همکاری و ارسال محتوا از طریق فرم تماس با ما در ارتباط باشید.
                  <br />
                  <span className="text-sm opacity-75">(فرم تماس به زودی فعال خواهد شد)</span>
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-muted/30 border-2 border-accent/10 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <p className="text-center text-base text-muted-foreground leading-relaxed font-medium">
              این پروژه کاملاً غیرانتفاعی و با هدف حفظ میراث فرهنگی ایلات عشایری تهران و البرز انجام می‌شود. 
              تمامی اطلاعات با احترام کامل به حریم خصوصی و با هدف آموزشی استفاده خواهد شد.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
