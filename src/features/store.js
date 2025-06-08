import { configureStore } from "@reduxjs/toolkit";
import skipReducer from "./skips/skipsSlice";

const store = configureStore({
  reducer: {
    skips: skipReducer,
  },
});

export default store;
