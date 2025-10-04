import TribePage from "../TribePage";
import gallery1 from "@/assets/tribes/tajik-gallery-1.jpg";
import gallery2 from "@/assets/tribes/tajik-gallery-2.jpg";
import gallery3 from "@/assets/tribes/tajik-gallery-3.jpg";
import cardImage from "@/assets/tribes/tajik-card.jpg";

export default function Tajik() {
  return (
    <TribePage 
      tribeName="تاجیک"
      tribeNameEnglish="tajik"
      description="میراث‌داران فرهنگ و سنت‌های عشایری منطقه"
      galleryImages={[gallery1, gallery2, gallery3]}
      cardImage={cardImage}
    />
  );
}
