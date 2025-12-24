import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaUmbara = () => {
  const data = neighborhoodData['umbara'];
  return <NeighborhoodPage data={data} />;
};

export default OticaUmbara;
