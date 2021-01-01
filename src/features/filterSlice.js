import { createSlice } from "@reduxjs/toolkit";

export const FilterStatus = {
  All: "all",
  Active: "active",
  Completed: "completed",
};

const initialState = {
  status: FilterStatus.All,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilterStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { changeFilterStatus } = filtersSlice.actions;

export default filtersSlice.reducer;
