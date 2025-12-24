import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaJardimBotanico = () => {
  const data = neighborhoodData['jardim-botanico'];
  return <NeighborhoodPage data={data} />;
};

export default OticaJardimBotanico;
