import { useQuery } from "@tanstack/react-query";
import Planet from "./Planet";
import axios from "axios";

const fetchPlanet = async () => {
  const res = await axios.get("https://swapi.dev/api/planets/");
  return res.data;
};

const Planets = () => {
  const { data, status } = useQuery({
    queryKey: ["planet"],
    queryFn: fetchPlanet,
  });
  return (
    <div className="p-2">
      <h2 className="mx-4 p-3 p-x-2 text-gray-200 text-xl">Planets</h2>
      <div className="w-20 h-1 mx-4 bg-gray-600 mb-7"></div>
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
