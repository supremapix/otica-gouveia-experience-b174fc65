import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaReboucas = () => {
  const data = neighborhoodData['reboucas'];
  return <NeighborhoodPage data={data} />;
};

export default OticaReboucas;
