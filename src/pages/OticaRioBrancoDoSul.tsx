import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaRioBrancoDoSul = () => {
  const data = neighborhoodData['rio-branco-do-sul'];
  return <NeighborhoodPage data={data} />;
};

export default OticaRioBrancoDoSul;