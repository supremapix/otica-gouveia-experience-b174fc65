import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaRiviera = () => {
  const data = neighborhoodData['riviera'];
  return <NeighborhoodPage data={data} />;
};

export default OticaRiviera;