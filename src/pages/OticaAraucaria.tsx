import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaAraucaria = () => {
  const data = neighborhoodData['araucaria'];
  return <NeighborhoodPage data={data} />;
};

export default OticaAraucaria;