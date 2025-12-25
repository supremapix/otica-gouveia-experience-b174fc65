import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaMerces = () => {
  const data = neighborhoodData['merces'];
  return <NeighborhoodPage data={data} />;
};

export default OticaMerces;