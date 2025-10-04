import TribePage from "../TribePage";
import gallery1 from "@/assets/tribes/koti-gallery-1.jpg";
import gallery2 from "@/assets/tribes/koti-gallery-2.jpg";
import gallery3 from "@/assets/tribes/koti-gallery-3.jpg";

export default function Koti() {
  return (
    <TribePage 
      tribeName="کوتی"
      tribeNameEnglish="koti"
      description="حافظان سنت‌های کهن عشایری در کوهستان‌های البرز"
      galleryImages={[gallery1, gallery2, gallery3]}
    />
  );
}
