import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sessionLength: 25 * 60,
  breakLength: 300,
};

export const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState,
  reducers: {
    setSessionTime(state, action) {
      const updateSession = action.payload;
      state.sessionLength = updateSession;
    },
    setBreakTime(state, action) {
      const updateBreak = action.payload;
      state.breakLength = updateBreak;
    },
    setResetTime(state) {
      state.sessionLength = 25 * 60;
      state.breakLength = 300;
    },
  },
});

export const selectSessionLength = (state) => state.sessionLength;
export const selectBreakLength = (state) => state.breakLength;

export const {
  setSessionTime,
  setBreakTime,
  setResetTime,
} = pomodoroSlice.actions;

export default pomodoroSlice.reducer;
