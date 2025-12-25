import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaLindoia = () => {
  const data = neighborhoodData['lindoia'];
  return <NeighborhoodPage data={data} />;
};

export default OticaLindoia;