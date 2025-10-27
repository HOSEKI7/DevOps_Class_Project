import { createStore } from "redux";

// Create Reducer, a function that takes a current state value and an action object describing "what happened", and returns a new state value.
const cartReducer = (
  state = {
    cart: [{ id: 1, qty: 5 }],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// Create a Redux store holding the state of your app.
let store = createStore(cartReducer);

// You can use subscribe() to update the UI in response to state changes.
store.subscribe(() => {
  console.log(store.getState());
});

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({
  type: "ADD_TO_CART",
  payload: {
    id: 2,
    qty: 12,
  },
});
store.dispatch({
  type: "ADD_TO_CART",
  payload: {
    id: 3,
    qty: 13,
  },
});
