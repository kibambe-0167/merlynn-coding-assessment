import React, { useEffect } from "react";
import "./App.css";

// store - redux
import { Provider } from "react-redux";
import store from "./store/store";
import { getData } from "./services/fetch_drink_choice_model";

function App() {
  //
  useEffect(() => {
    getData()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  //
  return (
    <Provider store={store}>
      <h1 className="text-5xl text-white bg-red-500 font-medium">
        merlynn coding assessment
      </h1>
    </Provider>
  );
}

export default App;
