import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaOrleans = () => {
  const data = neighborhoodData['orleans'];
  return <NeighborhoodPage data={data} />;
};

export default OticaOrleans;