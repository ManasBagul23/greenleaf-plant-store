import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, name, price, image } = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      } else {
        state.items[id] = {
          name,
          price,
          image,
          quantity: 1
        };
      }
    },
    increaseItem: (state, action) => {
      const { id } = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      }
    },
    decreaseItem: (state, action) => {
      const { id } = action.payload;
      if (state.items[id]) {
        if (state.items[id].quantity > 1) {
          state.items[id].quantity -= 1;
        } else {
          delete state.items[id];
        }
      }
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      delete state.items[id];
    }
  }
});

// Selectors
export const selectCartItems = (state) => state.cart.items;

export const selectCartItemCount = (state) => {
  return Object.values(state.cart.items).reduce((total, item) => total + item.quantity, 0);
};

export const selectCartTotal = (state) => {
  return Object.values(state.cart.items).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

export const selectIsItemInCart = (id) => (state) => {
  return !!state.cart.items[id];
};

export const { addItem, increaseItem, decreaseItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
