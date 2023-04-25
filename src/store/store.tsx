import { configureStore } from "@reduxjs/toolkit";
import dummy from "./slice";
import up2tomapiaresults from "./apiresults"

export default configureStore({
  reducer: {
    dummy: dummy,
    up2tomapiaresults: up2tomapiaresults
  },
});
