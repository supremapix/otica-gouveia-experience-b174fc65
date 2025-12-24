import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaEcoville = () => {
  const data = neighborhoodData['ecoville'];
  return <NeighborhoodPage data={data} />;
};

export default OticaEcoville;
