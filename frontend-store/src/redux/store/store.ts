import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

/**
 * ✅ TYPE WAJIB untuk TypeScript + Redux
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/**
 * (Optional) Debug log — aman untuk development
 */
if (import.meta.env.DEV) {
  console.log("ON CREATE STORE:", store.getState());

  store.subscribe(() => {
    console.log("STORE CHANGED:", store.getState());
  });
}

export default store;
