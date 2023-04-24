import React, { useEffect, useState } from "react";
// import "./App.css";

// store - redux
import { Provider } from "react-redux";
import store from "./store/store";
import { getData } from "./services/fetch_drink_choice_model";

function App() {
  const [apidata, setApiData] = useState(null);
  //
  useEffect(() => {
    getData()
      .then((res) => {
        const d = res;
        // if (res) {
        setApiData(d?.data?.attributes);
        console.log(d?.data?.attributes);
        // }
      })
      .catch((err) => console.log(err));
  }, []);

  //
  return (
    <Provider store={store}>
      <h1 className="text-5xl bg-blue-950 py-5 px-3 text-gray-300 font-medium">
        Merlynn Coding Assessment
      </h1>

      {apidata && (
        <div>
          <h2 className="text-2xl text-black font-medium">{apidata?.name}</h2>
          <p className="text-lg text-black font-medium">
            {apidata.description}
          </p>
        </div>
      )}

      <div className="bg-blue-900 shadow-slate-950 w-8/12 my-5 mx-auto px-4 py-4 rounded-2xl">
        <div className="my-5">
          <input
            className="p-2 w-full rounded-md"
            placeholder="Age?"
            min={1}
            max={90}
            type="number"
          />
        </div>

        <div className="my-5">
          <input
            className="p-2 w-full rounded-md"
            placeholder="Temperature?"
            min={-10}
            max={45}
            type="number"
          />
        </div>

        <div className="my-5">
          <input
            className="p-2 w-full rounded-md"
            placeholder="Number of drink consumed per day?"
            min={0}
            max={20}
            type="number"
          />
        </div>

        <div className="my-5">
          <input
            className="p-2 w-full rounded-md"
            placeholder="Number of drinks consumed today?"
            min={0}
            max={20}
            type="number"
          />
        </div>

        <div className="my-5">
          <select className="p-2 w-full rounded-md">
            <option selected disabled value={"female"}>
              Gender
            </option>
            <option value={"female"}>Female</option>
            <option value={"male"}>Male</option>
            <option value={"other"}>Other</option>
          </select>
        </div>

        <div className="my-5">
          <select className="p-2 w-full rounded-md">
            <option selected disabled>
              Sensitive to Caffeine?
            </option>
            <option value={"Yes"}>Yes</option>
            <option value={"No"}>Male</option>
            <option value={"Not sure"}>Not sure</option>
          </select>
        </div>

        <div className="my-5">
          <select className="p-2 w-full rounded-md">
            <option selected disabled>
              Time of day?
            </option>
            <option value={"Morning"}>Morning</option>
            <option value={"Afternoon"}>Afternoon</option>
            <option value={"Evening"}>Evening</option>
          </select>
        </div>

        <div className="my-5">
          <select className="p-2 w-full rounded-md">
            <option selected disabled>
              Pregnant?
            </option>
            <option value={"Yes"}>Yes</option>
            <option value={"No"}>No</option>
            <option value={"NA"}>NA</option>
          </select>
        </div>

        <div className="my-5">
          <select className="p-2 w-full rounded-md">
            <option selected disabled>
              Health conscious?
            </option>
            <option value={"Yes"}>Yes</option>
            <option value={"No"}>No</option>
          </select>
        </div>
      </div>
    </Provider>
  );
}

export default App;
