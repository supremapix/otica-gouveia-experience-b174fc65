import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaVilaGuaira = () => {
  const data = neighborhoodData['vila-guaira'];
  return <NeighborhoodPage data={data} />;
};

export default OticaVilaGuaira;