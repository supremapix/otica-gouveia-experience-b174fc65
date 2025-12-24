import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaCapaoRaso = () => {
  const data = neighborhoodData['capao-raso'];
  return <NeighborhoodPage data={data} />;
};

export default OticaCapaoRaso;
