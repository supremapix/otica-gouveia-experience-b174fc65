import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaBoqueirao = () => {
  const data = neighborhoodData['boqueirao'];
  return <NeighborhoodPage data={data} />;
};

export default OticaBoqueirao;
