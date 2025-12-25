import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaCascatinha = () => {
  const data = neighborhoodData['cascatinha'];
  return <NeighborhoodPage data={data} />;
};

export default OticaCascatinha;