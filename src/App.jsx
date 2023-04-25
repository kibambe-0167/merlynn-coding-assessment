import React, { useEffect, useState } from "react";
// import "./App.css";

// store - redux
import { Provider, useDispatch } from "react-redux";
import store from "./store/store";
import { getData, query_model } from "./services/fetch_drink_choice_model";
import { addResult } from "./store/apiresults";
import QueryForm from "./components/form";

function App() {
  const [apidata, setApiData] = useState(null);
  const [apiResult, setApiResult] = useState(null);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  //
  useEffect(() => {
    getData()
      .then((res) => {
        // console.log(res);
        setApiData(res?.data?.attributes);
      })
      .catch((err) => console.log(err));
  }, []);

  function onSubmit(event) {
    event.preventDefault();

    query_model(formData)
      .then((res) => {
        setApiResult(res?.data?.attributes);
        console.log(res?.data?.attributes);

        dispatch(
          addResult({
            date: res?.data?.attributes?.timestamp,
            decision: res?.data?.attributes?.decision,
            user: formData,
          })
        );
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

      <div className="flex-row inline-flex w-full ">
        <QueryForm setApiResult={setApiResult} />

        {apiResult && (
          <div className="bg-blue-900 w-4/12 mx-auto rounded-2xl ">
            <div>{apiResult?.timestamp}</div>

            <div>{apiResult?.decision}</div>
          </div>
        )}
      </div>
    </Provider>
  );
}

export default App;
