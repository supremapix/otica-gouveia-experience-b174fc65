import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaSaoLourenco = () => {
  const data = neighborhoodData['sao-lourenco'];
  return <NeighborhoodPage data={data} />;
};

export default OticaSaoLourenco;