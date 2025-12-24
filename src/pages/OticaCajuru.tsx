import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaCajuru = () => {
  const data = neighborhoodData['cajuru'];
  return <NeighborhoodPage data={data} />;
};

export default OticaCajuru;
