import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaBocaiuvaDoSul = () => {
  const data = neighborhoodData['bocaiuva-do-sul'];
  return <NeighborhoodPage data={data} />;
};

export default OticaBocaiuvaDoSul;