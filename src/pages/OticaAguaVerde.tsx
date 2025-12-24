import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaAguaVerde = () => {
  const data = neighborhoodData['agua-verde'];
  return <NeighborhoodPage data={data} />;
};

export default OticaAguaVerde;
