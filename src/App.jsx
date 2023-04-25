import React, { useEffect, useState } from "react";
// import "./App.css";

// store - redux
import { Provider } from "react-redux";
import store from "./store/store";
import { getData, query_model } from "./services/fetch_drink_choice_model";

function App() {
  const [apidata, setApiData] = useState(null);
  const [formData, setFormData] = useState({});
  //
  useEffect(() => {
    getData()
      .then((res) => {
        const d = res;
        setApiData(d?.data?.attributes);
      })
      .catch((err) => console.log(err));
  }, []);

  function onSubmit(event) {
    event.preventDefault();

    query_model(formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //
  return (
    <Provider store={store}>
      <h1 className="text-5xl bg-blue-950 py-5 px-3 text-gray-300 font-medium">
        Merlynn Coding Assessment
      </h1>

      {apidata && (
        <div className="px-3">
          <h2 className="text-3xl text-black font-medium">{apidata?.name}</h2>
          <p className="text-sm text-gray-700 font-medium">
            {apidata.description}
          </p>
        </div>
      )}

      <form
        onSubmit={(event) => onSubmit(event)}
        className="bg-blue-900 shadow-slate-950 w-8/12 my-5 mx-auto px-4 py-4 rounded-2xl"
      >
        <div className="my-5">
          <input
            onChange={(e) =>
              setFormData({ ...formData, INPUTVAR3: e.target.value })
            }
            className="p-2 w-full rounded-md"
            placeholder="Age?"
            min={1}
            max={90}
            type="number"
          />
        </div>

        <div className="my-5">
          <input
            onChange={(e) =>
              setFormData({ ...formData, INPUTVAR1: e.target.value })
            }
            className="p-2 w-full rounded-md"
            placeholder="Temperature?"
            min={-10}
            max={45}
            type="number"
          />
        </div>

        <div className="my-5">
          <input
            onChange={(e) =>
              setFormData({ ...formData, INPUTVAR8: e.target.value })
            }
            className="p-2 w-full rounded-md"
            placeholder="Number of drink consumed per day?"
            min={0}
            max={20}
            type="number"
          />
        </div>

        <div className="my-5">
          <input
            onChange={(e) =>
              setFormData({ ...formData, INPUTVAR9: e.target.value })
            }
            className="p-2 w-full rounded-md"
            placeholder="Number of drinks consumed today?"
            min={0}
            max={20}
            type="number"
          />
        </div>

        <div className="my-5">
          <select
            onChange={(e) =>
              setFormData({ ...formData, INPUTVAR2: e.target.value })
            }
            className="p-2 w-full rounded-md"
          >
            <option selected disabled value={"female"}>
              Gender
            </option>
            <option value={"female"}>Female</option>
            <option value={"male"}>Male</option>
          </select>
        </div>

        <div className="my-5">
          <select
            onChange={(e) =>
              setFormData({ ...formData, INPUTVAR4: e.target.value })
            }
            className="p-2 w-full rounded-md"
          >
            <option selected disabled>
              Sensitive to Caffeine?
            </option>
            <option value={"Yes"}>Yes</option>
            <option value={"No"}>Male</option>
            <option value={"Not sure"}>Not sure</option>
          </select>
        </div>

        <div className="my-5">
          <select
            onChange={(e) =>
              setFormData({ ...formData, INPUTVAR5: e.target.value })
            }
            className="p-2 w-full rounded-md"
          >
            <option selected disabled>
              Time of day?
            </option>
            <option value={"Morning"}>Morning</option>
            <option value={"Afternoon"}>Afternoon</option>
            <option value={"Evening"}>Evening</option>
          </select>
        </div>

        <div className="my-5">
          <select
            onChange={(e) =>
              setFormData({ ...formData, INPUTVAR6: e.target.value })
            }
            className="p-2 w-full rounded-md"
          >
            <option selected disabled>
              Pregnant?
            </option>
            <option value={"Yes"}>Yes</option>
            <option value={"No"}>No</option>
            <option value={"NA"}>NA</option>
          </select>
        </div>

        <div className="my-5">
          <select
            onChange={(e) =>
              setFormData({ ...formData, INPUTVAR7: e.target.value })
            }
            className="p-2 w-full rounded-md"
          >
            <option selected disabled>
              Health conscious?
            </option>
            <option value={"Yes"}>Yes</option>
            <option value={"No"}>No</option>
          </select>
        </div>

        <div className="w-full my-4">
          <button className="bg-white w-full py-2 rounded-md">Query</button>
        </div>
      </form>
    </Provider>
  );
}

export default App;
