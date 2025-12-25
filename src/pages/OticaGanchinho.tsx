import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaGanchinho = () => {
  const data = neighborhoodData['ganchinho'];
  return <NeighborhoodPage data={data} />;
};

export default OticaGanchinho;
