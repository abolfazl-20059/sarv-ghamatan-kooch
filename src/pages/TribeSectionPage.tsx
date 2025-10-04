import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface TribeSectionPageProps {
  tribeName: string;
  tribeNameEnglish: string;
  sectionTitle: string;
  sectionIcon: LucideIcon;
  content: string;
  cardImage?: string;
}

export default function TribeSectionPage({ 
  tribeName,
  tribeNameEnglish,
  sectionTitle,
  sectionIcon: Icon,
  content,
  cardImage
}: TribeSectionPageProps) {
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
              <Icon className="h-12 w-12 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">
              {sectionTitle}
            </h1>
            <p className="text-xl text-primary-foreground/90">
              ایل {tribeName}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <Button 
              asChild 
              variant="ghost"
              className="mb-6 hover:bg-muted"
            >
              <Link to={`/tribe/${tribeNameEnglish}`}>
                <ArrowRight className="ml-2 h-4 w-4" />
                بازگشت به صفحه ایل
              </Link>
            </Button>

            <Card className="p-6 md:p-8 border-border bg-card">
              <div className="prose prose-lg max-w-none text-card-foreground">
                <p className="leading-relaxed text-lg whitespace-pre-line">
                  {content}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
