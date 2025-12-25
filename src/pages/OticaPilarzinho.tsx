import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaPilarzinho = () => {
  const data = neighborhoodData['pilarzinho'];
  return <NeighborhoodPage data={data} />;
};

export default OticaPilarzinho;