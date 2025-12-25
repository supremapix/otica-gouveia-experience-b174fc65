import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaMandirituba = () => {
  const data = neighborhoodData['mandirituba'];
  return <NeighborhoodPage data={data} />;
};

export default OticaMandirituba;