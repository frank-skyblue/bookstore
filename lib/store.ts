import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { bookListSlice } from "./features/booklist/bookListSlice";

const rootReducer = combineSlices(bookListSlice);
export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

// Infer the return type of `makeStore`
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
