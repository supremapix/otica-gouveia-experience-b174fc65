import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaCampoLargo = () => {
  const data = neighborhoodData['campo-largo'];
  return <NeighborhoodPage data={data} />;
};

export default OticaCampoLargo;