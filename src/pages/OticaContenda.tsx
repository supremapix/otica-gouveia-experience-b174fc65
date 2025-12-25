import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaContenda = () => {
  const data = neighborhoodData['contenda'];
  return <NeighborhoodPage data={data} />;
};

export default OticaContenda;