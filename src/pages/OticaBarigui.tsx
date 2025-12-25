import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaBarigui = () => {
  const data = neighborhoodData['barigui'];
  return <NeighborhoodPage data={data} />;
};

export default OticaBarigui;