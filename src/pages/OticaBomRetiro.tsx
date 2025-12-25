import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaBomRetiro = () => {
  const data = neighborhoodData['bom-retiro'];
  return <NeighborhoodPage data={data} />;
};

export default OticaBomRetiro;