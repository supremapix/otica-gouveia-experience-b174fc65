import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaCerroAzul = () => {
  const data = neighborhoodData['cerro-azul'];
  return <NeighborhoodPage data={data} />;
};

export default OticaCerroAzul;