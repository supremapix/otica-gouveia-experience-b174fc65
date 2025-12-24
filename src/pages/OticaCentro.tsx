import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaCentro = () => {
  const data = neighborhoodData['centro'];
  return <NeighborhoodPage data={data} />;
};

export default OticaCentro;
