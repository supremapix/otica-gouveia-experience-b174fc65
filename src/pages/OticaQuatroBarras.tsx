import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaQuatroBarras = () => {
  const data = neighborhoodData['quatro-barras'];
  return <NeighborhoodPage data={data} />;
};

export default OticaQuatroBarras;