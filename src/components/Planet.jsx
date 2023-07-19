const Planet = ({ planet }) => {
  return (
    <div>
      <div className="my-4 mx-4 p-3 p-x-2 bg-black text-gray-400 rounded-lg">
        <h3 className="text-lg text-red-600 mb-2">{planet.name}</h3>
        <p>Population - {planet.population}</p>
        <p>Terrain - {planet.terrain}</p>
        <p>Climate - {planet.climate}</p>
      </div>
    </div>
  );
};

export default Planet;
