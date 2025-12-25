import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaSantoInacio = () => {
  const data = neighborhoodData['santo-inacio'];
  return <NeighborhoodPage data={data} />;
};

export default OticaSantoInacio;