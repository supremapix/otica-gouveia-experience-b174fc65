import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaPinhais = () => {
  const data = neighborhoodData['pinhais'];
  return <NeighborhoodPage data={data} />;
};

export default OticaPinhais;