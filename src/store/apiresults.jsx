import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const up2TomApiResults = createSlice({
  name: "up2tomapiaresults",
  initialState,
  reducers: {
    addResult: (state, action) => {
      if (action.payload) {
        state.data.push(action.payload);
      }
    },
  },
});

export const { addResult } = up2TomApiResults.actions;
export const selectUP2TOMAPIResult = state => state.up2tomapiaresults.data; 
export default up2TomApiResults.reducer;
