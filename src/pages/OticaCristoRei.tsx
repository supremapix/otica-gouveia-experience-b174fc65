import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaCristoRei = () => {
  const data = neighborhoodData['cristo-rei'];
  return <NeighborhoodPage data={data} />;
};

export default OticaCristoRei;
