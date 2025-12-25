import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaPien = () => {
  const data = neighborhoodData['pien'];
  return <NeighborhoodPage data={data} />;
};

export default OticaPien;