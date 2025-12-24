import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaSantaFelicidade = () => {
  const data = neighborhoodData['santa-felicidade'];
  return <NeighborhoodPage data={data} />;
};

export default OticaSantaFelicidade;
