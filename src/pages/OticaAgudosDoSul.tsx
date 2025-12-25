import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaAgudosDoSul = () => {
  const data = neighborhoodData['agudos-do-sul'];
  return <NeighborhoodPage data={data} />;
};

export default OticaAgudosDoSul;