import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaFazendinha = () => {
  const data = neighborhoodData['fazendinha'];
  return <NeighborhoodPage data={data} />;
};

export default OticaFazendinha;
