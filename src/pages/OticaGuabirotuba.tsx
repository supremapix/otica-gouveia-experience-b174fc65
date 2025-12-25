import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaGuabirotuba = () => {
  const data = neighborhoodData['guabirotuba'];
  return <NeighborhoodPage data={data} />;
};

export default OticaGuabirotuba;