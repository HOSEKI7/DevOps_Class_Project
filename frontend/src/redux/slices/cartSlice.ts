import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface cartItem {
  id: number;
  quantity: number;
}

interface cartState {
  data: cartItem[];
}

const initialState: cartState = {
  data: JSON.parse(localStorage.getItem("cart") || "[]"),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cartItem>) => {
      const checkDuplicateId = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (checkDuplicateId) {
        checkDuplicateId.quantity++;
      } else {
        state.data.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
