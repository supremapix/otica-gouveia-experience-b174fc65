import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaNovoMundo = () => {
  const data = neighborhoodData['novo-mundo'];
  return <NeighborhoodPage data={data} />;
};

export default OticaNovoMundo;