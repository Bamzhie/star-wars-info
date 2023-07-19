const Person = ({ person }) => {
  return (
    <div>
      <div className="my-4 mx-4 p-3 p-x-2 bg-black text-gray-400 rounded-lg">
        <h3 className="text-lg text-red-600 mb-2">{person.name}</h3>
        <p>Gender - {person.gender}</p>
        <p>Skin Color - {person.skin_color}</p>
        <p>Mass - {person.mass}</p>
      </div>
    </div>
  );
};

export default Person;
