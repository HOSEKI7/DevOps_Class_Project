import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: { cart: cartReducer },
});

console.log(`ON CREATE STORE: `, store.getState());

store.subscribe(() => {
  console.log(`STORE CHANGED: `, store.getState());
});

export default store;
