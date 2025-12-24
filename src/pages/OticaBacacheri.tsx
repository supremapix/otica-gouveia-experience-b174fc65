import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaBacacheri = () => {
  const data = neighborhoodData['bacacheri'];
  return <NeighborhoodPage data={data} />;
};

export default OticaBacacheri;
