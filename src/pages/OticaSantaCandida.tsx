import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaSantaCandida = () => {
  const data = neighborhoodData['santa-candida'];
  return <NeighborhoodPage data={data} />;
};

export default OticaSantaCandida;