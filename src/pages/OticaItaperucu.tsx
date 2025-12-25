import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaItaperucu = () => {
  const data = neighborhoodData['itaperucu'];
  return <NeighborhoodPage data={data} />;
};

export default OticaItaperucu;