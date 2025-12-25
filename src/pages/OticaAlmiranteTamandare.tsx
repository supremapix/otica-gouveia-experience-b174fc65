import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaAlmiranteTamandare = () => {
  const data = neighborhoodData['almirante-tamandare'];
  return <NeighborhoodPage data={data} />;
};

export default OticaAlmiranteTamandare;