import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaCampoComprido = () => {
  const data = neighborhoodData['campo-comprido'];
  return <NeighborhoodPage data={data} />;
};

export default OticaCampoComprido;