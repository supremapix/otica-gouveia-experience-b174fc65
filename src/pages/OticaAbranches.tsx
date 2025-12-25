import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaAbranches = () => {
  const data = neighborhoodData['abranches'];
  return <NeighborhoodPage data={data} />;
};

export default OticaAbranches;