import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaBatel = () => {
  const data = neighborhoodData['batel'];
  return <NeighborhoodPage data={data} />;
};

export default OticaBatel;
