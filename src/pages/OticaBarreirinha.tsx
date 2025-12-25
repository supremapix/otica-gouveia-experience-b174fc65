import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaBarreirinha = () => {
  const data = neighborhoodData['barreirinha'];
  return <NeighborhoodPage data={data} />;
};

export default OticaBarreirinha;