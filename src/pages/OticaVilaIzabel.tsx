import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaVilaIzabel = () => {
  const data = neighborhoodData['vila-izabel'];
  return <NeighborhoodPage data={data} />;
};

export default OticaVilaIzabel;