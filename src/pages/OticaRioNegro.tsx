import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaRioNegro = () => {
  const data = neighborhoodData['rio-negro'];
  return <NeighborhoodPage data={data} />;
};

export default OticaRioNegro;