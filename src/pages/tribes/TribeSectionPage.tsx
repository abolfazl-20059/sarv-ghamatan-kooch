import { useParams, Navigate } from "react-router-dom";
import TribeSectionPageComponent from "../TribeSectionPage";
import { sectionsData } from "@/data/tribesData";
import arabSahnaeiCard from "@/assets/tribes/arab-sahnaei-card.jpg";
import kalkohiCard from "@/assets/tribes/kalkohi-card.jpg";
import kotiCard from "@/assets/tribes/koti-card.jpg";
import hadavandCard from "@/assets/tribes/hadavand-card.jpg";
import tajikCard from "@/assets/tribes/tajik-card.jpg";

const tribesConfig = {
  "arab-sahnaei": {
    name: "عرب صحنه‌ای",
    cardImage: arabSahnaeiCard,
  },
  "kalkhohi": {
    name: "کلخی",
    cardImage: kalkohiCard,
  },
  "koti": {
    name: "کوتی",
    cardImage: kotiCard,
  },
  "hadavand": {
    name: "هدوند",
    cardImage: hadavandCard,
  },
  "tajik": {
    name: "تاجیک",
    cardImage: tajikCard,
  },
};

export default function TribeSectionPage() {
  const { tribeName, sectionId } = useParams<{ tribeName: string; sectionId: string }>();

  if (!tribeName || !sectionId) {
    return <Navigate to="/" replace />;
  }

  const tribeConfig = tribesConfig[tribeName as keyof typeof tribesConfig];
  const sectionData = sectionsData[sectionId];

  if (!tribeConfig || !sectionData) {
    return <Navigate to="/" replace />;
  }

  return (
    <TribeSectionPageComponent
      tribeName={tribeConfig.name}
      tribeNameEnglish={tribeName}
      sectionTitle={sectionData.title}
      sectionIcon={sectionData.icon}
      content={sectionData.content}
      cardImage={tribeConfig.cardImage}
    />
  );
}
