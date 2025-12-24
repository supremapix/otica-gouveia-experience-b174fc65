import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaNeoVille = () => {
  const data = neighborhoodData['neo-ville'];
  return <NeighborhoodPage data={data} />;
};

export default OticaNeoVille;
