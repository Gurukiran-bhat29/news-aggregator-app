import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
  name: 'date-filter',
  initialState: {
    filterDate: ''
  },
  reducers: {
    addFilter: (state, action) => {
      state.filterDate = action.payload;
    }
  }
})

export const { addFilter } = dateSlice.actions;

export default dateSlice.reducer;