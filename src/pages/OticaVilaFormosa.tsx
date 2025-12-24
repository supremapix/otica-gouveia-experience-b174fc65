import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaVilaFormosa = () => {
  const data = neighborhoodData['vila-formosa'];
  return <NeighborhoodPage data={data} />;
};

export default OticaVilaFormosa;
