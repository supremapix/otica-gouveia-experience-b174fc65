import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaSeminario = () => {
  const data = neighborhoodData['seminario'];
  return <NeighborhoodPage data={data} />;
};

export default OticaSeminario;