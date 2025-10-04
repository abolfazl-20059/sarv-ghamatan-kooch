import TribePage from "../TribePage";
import gallery1 from "@/assets/tribes/arab-sahnaei-gallery-1.jpg";
import gallery2 from "@/assets/tribes/arab-sahnaei-gallery-2.jpg";
import gallery3 from "@/assets/tribes/arab-sahnaei-gallery-3.jpg";
import cardImage from "@/assets/tribes/arab-sahnaei-card.jpg";

export default function ArabSahnaei() {
  return (
    <TribePage 
      tribeName="عرب صحنه‌ای"
      tribeNameEnglish="arab-sahnaei"
      subClans={["عبدی", "باقری", "صادقی", "جمالی"]}
      description="ایلی با چهار طایفه اصلی که هر کدام دارای تاریخچه و فرهنگ غنی خود هستند"
      galleryImages={[gallery1, gallery2, gallery3]}
      cardImage={cardImage}
    />
  );
}
