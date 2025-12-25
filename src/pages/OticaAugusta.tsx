import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaAugusta = () => {
  const data = neighborhoodData['augusta'];
  return <NeighborhoodPage data={data} />;
};

export default OticaAugusta;