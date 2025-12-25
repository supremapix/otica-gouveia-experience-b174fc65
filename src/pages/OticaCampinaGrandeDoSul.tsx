import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaCampinaGrandeDoSul = () => {
  const data = neighborhoodData['campina-grande-do-sul'];
  return <NeighborhoodPage data={data} />;
};

export default OticaCampinaGrandeDoSul;