import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaJuveve = () => {
  const data = neighborhoodData['juveve'];
  return <NeighborhoodPage data={data} />;
};

export default OticaJuveve;
