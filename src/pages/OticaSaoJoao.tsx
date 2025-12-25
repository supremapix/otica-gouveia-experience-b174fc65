import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaSaoJoao = () => {
  const data = neighborhoodData['sao-joao'];
  return <NeighborhoodPage data={data} />;
};

export default OticaSaoJoao;