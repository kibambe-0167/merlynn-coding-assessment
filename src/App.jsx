import React, { useEffect, useState } from "react";
// import "./App.css";

// store - redux
import { Provider } from "react-redux";
import store from "./store/store";
import { getData } from "./services/fetch_drink_choice_model";
import QueryForm from "./components/form";
import QeuryResult from "./components/result";

function App() {
  const [apidata, setApiData] = useState(null);
  const [apiResult, setApiResult] = useState(null);
  //
  useEffect(() => {
    getData()
      .then((res) => {
        setApiData(res?.data?.attributes);
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
        <div className="px-3">
          <h2 className="text-3xl text-black font-medium">{apidata?.name}</h2>
          <p className="text-sm text-gray-700 font-medium">
            {apidata.description}
          </p>
        </div>
      )}

      <div className="flex-row my-5 inline-flex w-full ">
        {/*  */}
        <QueryForm setApiResult={setApiResult} apiResult={apiResult} />
        {/*  */}
        {
          apiResult &&
          <QeuryResult apiResult={apiResult} />
        }
      </div>
    </Provider>
  );
}

export default App;
