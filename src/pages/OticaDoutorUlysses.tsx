import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaDoutorUlysses = () => {
  const data = neighborhoodData['doutor-ulysses'];
  return <NeighborhoodPage data={data} />;
};

export default OticaDoutorUlysses;