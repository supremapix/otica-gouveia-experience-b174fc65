import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaVilaSandra = () => {
  const data = neighborhoodData['vila-sandra'];
  return <NeighborhoodPage data={data} />;
};

export default OticaVilaSandra;
