import { useParams, Navigate } from "react-router-dom";
import TribeGalleryPageComponent from "../TribeGalleryPage";
import arabSahnaeiCard from "@/assets/tribes/arab-sahnaei-card.jpg";
import kalkohiCard from "@/assets/tribes/kalkohi-card.jpg";
import kotiCard from "@/assets/tribes/koti-card.jpg";
import hadavandCard from "@/assets/tribes/hadavand-card.jpg";
import tajikCard from "@/assets/tribes/tajik-card.jpg";

// Arab Sahnaei Gallery
import arabGallery1 from "@/assets/tribes/arab-sahnaei-gallery-1.jpg";
import arabGallery2 from "@/assets/tribes/arab-sahnaei-gallery-2.jpg";
import arabGallery3 from "@/assets/tribes/arab-sahnaei-gallery-3.jpg";
import arabGallery4 from "@/assets/tribes/arab-sahnaei-gallery-4.jpg";
import arabGallery5 from "@/assets/tribes/arab-sahnaei-gallery-5.jpg";
import arabGallery6 from "@/assets/tribes/arab-sahnaei-gallery-6.jpg";
import arabGallery7 from "@/assets/tribes/arab-sahnaei-gallery-7.jpg";
import arabGallery8 from "@/assets/tribes/arab-sahnaei-gallery-8.jpg";
import arabGallery9 from "@/assets/tribes/arab-sahnaei-gallery-9.jpg";
import arabGallery10 from "@/assets/tribes/arab-sahnaei-gallery-10.jpg";

// Kalkohi Gallery
import kalkohiGallery1 from "@/assets/tribes/kalkohi-gallery-1.jpg";
import kalkohiGallery2 from "@/assets/tribes/kalkohi-gallery-2.jpg";
import kalkohiGallery3 from "@/assets/tribes/kalkohi-gallery-3.jpg";
import kalkohiGallery4 from "@/assets/tribes/kalkohi-gallery-4.jpg";
import kalkohiGallery5 from "@/assets/tribes/kalkohi-gallery-5.jpg";
import kalkohiGallery6 from "@/assets/tribes/kalkohi-gallery-6.jpg";
import kalkohiGallery7 from "@/assets/tribes/kalkohi-gallery-7.jpg";
import kalkohiGallery8 from "@/assets/tribes/kalkohi-gallery-8.jpg";
import kalkohiGallery9 from "@/assets/tribes/kalkohi-gallery-9.jpg";
import kalkohiGallery10 from "@/assets/tribes/kalkohi-gallery-10.jpg";

// Koti Gallery
import kotiGallery1 from "@/assets/tribes/koti-gallery-1.jpg";
import kotiGallery2 from "@/assets/tribes/koti-gallery-2.jpg";
import kotiGallery3 from "@/assets/tribes/koti-gallery-3.jpg";
import kotiGallery4 from "@/assets/tribes/koti-gallery-4.jpg";
import kotiGallery5 from "@/assets/tribes/koti-gallery-5.jpg";
import kotiGallery6 from "@/assets/tribes/koti-gallery-6.jpg";
import kotiGallery7 from "@/assets/tribes/koti-gallery-7.jpg";
import kotiGallery8 from "@/assets/tribes/koti-gallery-8.jpg";
import kotiGallery9 from "@/assets/tribes/koti-gallery-9.jpg";
import kotiGallery10 from "@/assets/tribes/koti-gallery-10.jpg";

// Hadavand Gallery
import hadavandGallery1 from "@/assets/tribes/hadavand-gallery-1.jpg";
import hadavandGallery2 from "@/assets/tribes/hadavand-gallery-2.jpg";
import hadavandGallery3 from "@/assets/tribes/hadavand-gallery-3.jpg";
import hadavandGallery4 from "@/assets/tribes/hadavand-gallery-4.jpg";
import hadavandGallery5 from "@/assets/tribes/hadavand-gallery-5.jpg";
import hadavandGallery6 from "@/assets/tribes/hadavand-gallery-6.jpg";
import hadavandGallery7 from "@/assets/tribes/hadavand-gallery-7.jpg";
import hadavandGallery8 from "@/assets/tribes/hadavand-gallery-8.jpg";
import hadavandGallery9 from "@/assets/tribes/hadavand-gallery-9.jpg";
import hadavandGallery10 from "@/assets/tribes/hadavand-gallery-10.jpg";

// Tajik Gallery
import tajikGallery1 from "@/assets/tribes/tajik-gallery-1.jpg";
import tajikGallery2 from "@/assets/tribes/tajik-gallery-2.jpg";
import tajikGallery3 from "@/assets/tribes/tajik-gallery-3.jpg";
import tajikGallery4 from "@/assets/tribes/tajik-gallery-4.jpg";
import tajikGallery5 from "@/assets/tribes/tajik-gallery-5.jpg";
import tajikGallery6 from "@/assets/tribes/tajik-gallery-6.jpg";
import tajikGallery7 from "@/assets/tribes/tajik-gallery-7.jpg";
import tajikGallery8 from "@/assets/tribes/tajik-gallery-8.jpg";
import tajikGallery9 from "@/assets/tribes/tajik-gallery-9.jpg";
import tajikGallery10 from "@/assets/tribes/tajik-gallery-10.jpg";

const tribesConfig = {
  "arab-sahnaei": {
    name: "عرب صحنه‌ای",
    cardImage: arabSahnaeiCard,
    galleryImages: [arabGallery1, arabGallery2, arabGallery3, arabGallery4, arabGallery5, arabGallery6, arabGallery7, arabGallery8, arabGallery9, arabGallery10],
  },
  "kalkhohi": {
    name: "کلخی",
    cardImage: kalkohiCard,
    galleryImages: [kalkohiGallery1, kalkohiGallery2, kalkohiGallery3, kalkohiGallery4, kalkohiGallery5, kalkohiGallery6, kalkohiGallery7, kalkohiGallery8, kalkohiGallery9, kalkohiGallery10],
  },
  "koti": {
    name: "کوتی",
    cardImage: kotiCard,
    galleryImages: [kotiGallery1, kotiGallery2, kotiGallery3, kotiGallery4, kotiGallery5, kotiGallery6, kotiGallery7, kotiGallery8, kotiGallery9, kotiGallery10],
  },
  "hadavand": {
    name: "هدوند",
    cardImage: hadavandCard,
    galleryImages: [hadavandGallery1, hadavandGallery2, hadavandGallery3, hadavandGallery4, hadavandGallery5, hadavandGallery6, hadavandGallery7, hadavandGallery8, hadavandGallery9, hadavandGallery10],
  },
  "tajik": {
    name: "تاجیک",
    cardImage: tajikCard,
    galleryImages: [tajikGallery1, tajikGallery2, tajikGallery3, tajikGallery4, tajikGallery5, tajikGallery6, tajikGallery7, tajikGallery8, tajikGallery9, tajikGallery10],
  },
};

export default function TribeGalleryPage() {
  const { tribeName } = useParams<{ tribeName: string }>();

  if (!tribeName) {
    return <Navigate to="/" replace />;
  }

  const tribeConfig = tribesConfig[tribeName as keyof typeof tribesConfig];

  if (!tribeConfig) {
    return <Navigate to="/" replace />;
  }

  return (
    <TribeGalleryPageComponent
      tribeName={tribeConfig.name}
      tribeNameEnglish={tribeName}
      galleryImages={tribeConfig.galleryImages}
      cardImage={tribeConfig.cardImage}
    />
  );
}
