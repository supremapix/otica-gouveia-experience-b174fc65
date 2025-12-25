import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaBoaVista = () => {
  const data = neighborhoodData['boa-vista'];
  return <NeighborhoodPage data={data} />;
};

export default OticaBoaVista;