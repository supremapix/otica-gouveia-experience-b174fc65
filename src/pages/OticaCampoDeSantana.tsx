import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaCampoDeSantana = () => {
  const data = neighborhoodData['campo-de-santana'];
  return <NeighborhoodPage data={data} />;
};

export default OticaCampoDeSantana;