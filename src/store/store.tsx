import { configureStore } from "@reduxjs/toolkit";
import dummy from "./slice";

export default configureStore({
  reducer: {
    dummy: dummy,
  },
});
