import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaQuitandinha = () => {
  const data = neighborhoodData['quitandinha'];
  return <NeighborhoodPage data={data} />;
};

export default OticaQuitandinha;