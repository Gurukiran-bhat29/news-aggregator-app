import { configureStore } from "@reduxjs/toolkit";
import dateSlice from "./dateSlice";
import articleSlice from "./articleSlice";

const store = configureStore({
  reducer: {
    date: dateSlice,
    article: articleSlice
  }
});

export default store;