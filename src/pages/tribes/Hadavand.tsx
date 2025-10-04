import TribePage from "../TribePage";
import gallery1 from "@/assets/tribes/hadavand-gallery-1.jpg";
import gallery2 from "@/assets/tribes/hadavand-gallery-2.jpg";
import gallery3 from "@/assets/tribes/hadavand-gallery-3.jpg";

export default function Hadavand() {
  return (
    <TribePage 
      tribeName="هدوند"
      tribeNameEnglish="hadavand"
      description="قبیله‌ای با ریشه‌های عمیق تاریخی و فرهنگ غنی"
      galleryImages={[gallery1, gallery2, gallery3]}
    />
  );
}
