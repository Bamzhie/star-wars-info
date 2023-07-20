import { useQuery } from "@tanstack/react-query";
import Person from "./Person";
import axios from "axios";

const fetchPeople = async () => {
  const res = await axios.get("https://swapi.dev/api/people/");
  return res.data;
};

const People = () => {
  const { data, status } = useQuery({
    queryKey: ["people"],
    queryFn: fetchPeople,
  });
  return (
    <div className="p-2">
      <h2 className="mx-4 p-3 p-x-2 text-gray-200 text-xl">People</h2>
      <div className="w-20 h-1 mx-4 bg-gray-600 mb-7"></div>
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data.results.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
