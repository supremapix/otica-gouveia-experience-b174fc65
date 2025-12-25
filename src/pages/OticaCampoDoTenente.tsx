import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaCampoDoTenente = () => {
  const data = neighborhoodData['campo-do-tenente'];
  return <NeighborhoodPage data={data} />;
};

export default OticaCampoDoTenente;