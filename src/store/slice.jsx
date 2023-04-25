import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null,
}

const dummy = createSlice({
    name : "dummy",
    initialState,
    reducers: {}
})

export default dummy.reducer;