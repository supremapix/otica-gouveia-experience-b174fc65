import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaMossungue = () => {
  const data = neighborhoodData['mossungue'];
  return <NeighborhoodPage data={data} />;
};

export default OticaMossungue;