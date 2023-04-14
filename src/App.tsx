import React from "react";
import "./App.css";

// store - redux
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <h1 className="text-5xl text-white bg-red-500 font-medium" >merlynn coding assessment</h1>
    </Provider>
  );
}

export default App;
