import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaPinheirinho = () => {
  const data = neighborhoodData['pinheirinho'];
  return <NeighborhoodPage data={data} />;
};

export default OticaPinheirinho;
