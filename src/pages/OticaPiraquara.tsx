import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaPiraquara = () => {
  const data = neighborhoodData['piraquara'];
  return <NeighborhoodPage data={data} />;
};

export default OticaPiraquara;