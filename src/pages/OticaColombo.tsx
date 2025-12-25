import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaColombo = () => {
  const data = neighborhoodData['colombo'];
  return <NeighborhoodPage data={data} />;
};

export default OticaColombo;