import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaTatuquara = () => {
  const data = neighborhoodData['tatuquara'];
  return <NeighborhoodPage data={data} />;
};

export default OticaTatuquara;