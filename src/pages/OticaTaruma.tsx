import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaTaruma = () => {
  const data = neighborhoodData['taruma'];
  return <NeighborhoodPage data={data} />;
};

export default OticaTaruma;