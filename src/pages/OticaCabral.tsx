import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaCabral = () => {
  const data = neighborhoodData['cabral'];
  return <NeighborhoodPage data={data} />;
};

export default OticaCabral;