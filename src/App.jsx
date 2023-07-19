import React, { useState } from "react";
import Planets from "./components/Planets";
import People from "./components/People";
import Navbar from "./components/Navbar";

const App = () => {
  const [page, setPage] = useState("planets");
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl m-2 text-yellow-700">Star wars Info</h1>
        <Navbar setPage={setPage} />
      </div>
      <div className="">{page === "planets" ? <Planets /> : <People />}</div>
    </div>
  );
};

export default App;
