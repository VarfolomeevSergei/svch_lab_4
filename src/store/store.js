import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../features/Slice"; 
import FiltresReduser from "../features/filterSlice"; 

const store = configureStore({
  reducer: {
    items: itemsReducer, 
    filters: FiltresReduser,
  },
});

export default store;