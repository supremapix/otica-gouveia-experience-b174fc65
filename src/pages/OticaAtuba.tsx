import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaAtuba = () => {
  const data = neighborhoodData['atuba'];
  return <NeighborhoodPage data={data} />;
};

export default OticaAtuba;