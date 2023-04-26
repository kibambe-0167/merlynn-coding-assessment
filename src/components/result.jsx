import React from "react";
// import "./App.css";


// store - redux
import { useSelector } from "react-redux";
import { selectUP2TOMAPIResult } from "../store/apiresults";

function QeuryResult({ apiResult }) {
  const selectAllDecisions = useSelector(selectUP2TOMAPIResult); // 

  function showAll() {
    console.log(selectAllDecisions);
  }

  //
  return (
    <div className=" bg-gray-400 rounded-md mx-auto " >
      {/* <div>
        <button onClick={() => showAll()}>show all</button>
      </div> */}

      {
        // apiResult &&
        <div className="bg-gray-200 text-center w-full my-3 rounded-md ">
          <div>{apiResult?.timestamp}</div>
          <div className=" text-4xl my-3 px-2 ">{apiResult?.decision }</div>
        </div>
      }
    </div>
  );
}

export default QeuryResult;