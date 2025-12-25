import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaBalsaNova = () => {
  const data = neighborhoodData['balsa-nova'];
  return <NeighborhoodPage data={data} />;
};

export default OticaBalsaNova;