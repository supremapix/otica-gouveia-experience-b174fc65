import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaHugoLange = () => {
  const data = neighborhoodData['hugo-lange'];
  return <NeighborhoodPage data={data} />;
};

export default OticaHugoLange;