import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaTijucasDoSul = () => {
  const data = neighborhoodData['tijucas-do-sul'];
  return <NeighborhoodPage data={data} />;
};

export default OticaTijucasDoSul;