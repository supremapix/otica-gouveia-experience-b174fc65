import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaXaxim = () => {
  const data = neighborhoodData['xaxim'];
  return <NeighborhoodPage data={data} />;
};

export default OticaXaxim;
