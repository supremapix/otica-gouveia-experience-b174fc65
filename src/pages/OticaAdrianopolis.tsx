import NeighborhoodPage from "@/components/NeighborhoodPage";
import { neighborhoodData } from "@/data/neighborhoodContent";

const OticaAdrianopolis = () => {
  const data = neighborhoodData['adrianopolis'];
  return <NeighborhoodPage data={data} />;
};

export default OticaAdrianopolis;