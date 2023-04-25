import React from "react";
// import "./App.css";

// store - redux
import { useSelector } from "react-redux";
import { selectUP2TOMAPIResult } from "../store/apiresults";

function QeuryResult({ apidata }) {
  const selectAllDecisions = useSelector(selectUP2TOMAPIResult);

  function showAll() {
    console.log(selectAllDecisions);
  }
  //
  return (
    <>
      {apidata && (
        <div className="px-3">
          <h2 className="text-3xl text-black font-medium">{apidata?.name}</h2>
          <p className="text-sm text-gray-700 font-medium">
            {apidata.description}
          </p>
        </div>
      )}

      <div>
        <button onClick={() => showAll()}>show all</button>
      </div>
    </>
  );
}

export default QeuryResult;
