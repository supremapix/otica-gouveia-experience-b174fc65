import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaSitioCercado = () => {
  const data = neighborhoodData['sitio-cercado'];
  return <NeighborhoodPage data={data} />;
};

export default OticaSitioCercado;
