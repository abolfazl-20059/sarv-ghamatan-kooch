import TribePage from "../TribePage";
import gallery1 from "@/assets/tribes/kalkohi-gallery-1.jpg";
import gallery2 from "@/assets/tribes/kalkohi-gallery-2.jpg";
import gallery3 from "@/assets/tribes/kalkohi-gallery-3.jpg";
import cardImage from "@/assets/tribes/kalkohi-card.jpg";

export default function Kalkhohi() {
  return (
    <TribePage 
      tribeName="کلخی"
      tribeNameEnglish="kalkhohi"
      description="ایلی با تاریخ کهن و سنت‌های ریشه‌دار در منطقه تهران و البرز"
      galleryImages={[gallery1, gallery2, gallery3]}
      cardImage={cardImage}
    />
  );
}
