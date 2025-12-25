import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaSaoFrancisco = () => {
  const data = neighborhoodData['sao-francisco'];
  return <NeighborhoodPage data={data} />;
};

export default OticaSaoFrancisco;