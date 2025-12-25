import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaCampoMagro = () => {
  const data = neighborhoodData['campo-magro'];
  return <NeighborhoodPage data={data} />;
};

export default OticaCampoMagro;