import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaLapa = () => {
  const data = neighborhoodData['lapa'];
  return <NeighborhoodPage data={data} />;
};

export default OticaLapa;