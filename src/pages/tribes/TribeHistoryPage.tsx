import { useParams, Navigate } from "react-router-dom";
import TribeHistoryPageComponent from "../TribeHistoryPage";
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

export default function TribeHistoryPage() {
  const { tribeName } = useParams<{ tribeName: string }>();

  if (!tribeName) {
    return <Navigate to="/" replace />;
  }

  const tribeConfig = tribesConfig[tribeName as keyof typeof tribesConfig];

  if (!tribeConfig) {
    return <Navigate to="/" replace />;
  }

  return (
    <TribeHistoryPageComponent
      tribeName={tribeConfig.name}
      tribeNameEnglish={tribeName}
      cardImage={tribeConfig.cardImage}
    />
  );
}
