import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaTunasDoParana = () => {
  const data = neighborhoodData['tunas-do-parana'];
  return <NeighborhoodPage data={data} />;
};

export default OticaTunasDoParana;