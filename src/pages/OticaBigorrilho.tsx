import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaBigorrilho = () => {
  const data = neighborhoodData['bigorrilho'];
  return <NeighborhoodPage data={data} />;
};

export default OticaBigorrilho;
