import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaSaoJoseDosPinhais = () => {
  const data = neighborhoodData['sao-jose-dos-pinhais'];
  return <NeighborhoodPage data={data} />;
};

export default OticaSaoJoseDosPinhais;