const Navbar = ({ setPage }) => {
  return (
    <div className="text-white">
      <button
        className="mx-2 p-1 rounded-lg"
        onClick={() => setPage("planets")}
      >
        Planets
      </button>
      <button className="mx-2 p-1 rounded-lg" onClick={() => setPage("people")}>
        People
      </button>
    </div>
  );
};

export default Navbar;
