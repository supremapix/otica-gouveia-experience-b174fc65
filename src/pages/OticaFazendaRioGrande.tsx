import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaFazendaRioGrande = () => {
  const data = neighborhoodData['fazenda-rio-grande'];
  return <NeighborhoodPage data={data} />;
};

export default OticaFazendaRioGrande;