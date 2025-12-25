import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaParolin = () => {
  const data = neighborhoodData['parolin'];
  return <NeighborhoodPage data={data} />;
};

export default OticaParolin;