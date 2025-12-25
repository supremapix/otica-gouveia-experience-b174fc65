import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaCapaoDaImbuia = () => {
  const data = neighborhoodData['capao-da-imbuia'];
  return <NeighborhoodPage data={data} />;
};

export default OticaCapaoDaImbuia;