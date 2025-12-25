import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaCentroCivico = () => {
  const data = neighborhoodData['centro-civico'];
  return <NeighborhoodPage data={data} />;
};

export default OticaCentroCivico;