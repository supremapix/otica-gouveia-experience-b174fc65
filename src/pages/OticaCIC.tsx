import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaCIC = () => {
  const data = neighborhoodData['cic'];
  return <NeighborhoodPage data={data} />;
};

export default OticaCIC;
