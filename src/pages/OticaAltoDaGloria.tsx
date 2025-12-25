import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaAltoDaGloria = () => {
  const data = neighborhoodData['alto-da-gloria'];
  return <NeighborhoodPage data={data} />;
};

export default OticaAltoDaGloria;