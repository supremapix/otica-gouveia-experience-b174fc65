import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaUberaba = () => {
  const data = neighborhoodData['uberaba'];
  return <NeighborhoodPage data={data} />;
};

export default OticaUberaba;