import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaFanny = () => {
  const data = neighborhoodData['fanny'];
  return <NeighborhoodPage data={data} />;
};

export default OticaFanny;