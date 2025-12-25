import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaSantaQuiteria = () => {
  const data = neighborhoodData['santa-quiteria'];
  return <NeighborhoodPage data={data} />;
};

export default OticaSantaQuiteria;