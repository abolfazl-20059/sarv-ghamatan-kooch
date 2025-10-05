import { Card } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

interface TribeGalleryPageProps {
  tribeName: string;
  tribeNameEnglish: string;
  galleryImages: string[];
  cardImage?: string;
}

export default function TribeGalleryPage({ 
  tribeName,
  tribeNameEnglish,
  galleryImages,
  cardImage
}: TribeGalleryPageProps) {
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
              <ImageIcon className="h-12 w-12 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">
              بخش گالری
            </h1>
            <p className="text-xl text-primary-foreground/90">
              ایل {tribeName}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-6">
            <Card className="p-6 md:p-8 border-border bg-card">
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                مجموعه تصاویر مستند از زندگی، فرهنگ و سنت‌های ایل {tribeName} که داستان‌های بصری از میراث فرهنگی و زندگی روزمره این قوم را بازگو می‌کند.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryImages.map((image, i) => (
                  <div 
                    key={i}
                    className="aspect-square rounded-lg overflow-hidden bg-muted/30"
                  >
                    <img 
                      src={image} 
                      alt={`${tribeName} - تصویر ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
