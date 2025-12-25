import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaBairroAlto = () => {
  const data = neighborhoodData['bairro-alto'];
  return <NeighborhoodPage data={data} />;
};

export default OticaBairroAlto;