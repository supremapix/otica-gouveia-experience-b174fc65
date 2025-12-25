import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaJardimDasAmericas = () => {
  const data = neighborhoodData['jardim-das-americas'];
  return <NeighborhoodPage data={data} />;
};

export default OticaJardimDasAmericas;