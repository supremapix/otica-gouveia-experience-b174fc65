import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaPortao = () => {
  const data = neighborhoodData['portao'];
  return <NeighborhoodPage data={data} />;
};

export default OticaPortao;
