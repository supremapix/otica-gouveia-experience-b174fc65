import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaTingui = () => {
  const data = neighborhoodData['tingui'];
  return <NeighborhoodPage data={data} />;
};

export default OticaTingui;