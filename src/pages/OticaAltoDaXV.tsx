import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaAltoDaXV = () => {
  const data = neighborhoodData['alto-da-xv'];
  return <NeighborhoodPage data={data} />;
};

export default OticaAltoDaXV;