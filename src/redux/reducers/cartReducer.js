import { createSlice } from "@reduxjs/toolkit";
import { datProduct } from "../../data";

const cartSlice = createSlice({
  name: "products",
  initialState: {
    status: false,
    cart: [],
  },
  reducers: {
    statusCart: (state, action) => {
      state.status = action.payload;
    },

    addToCart: (state, action) => {
      const cartItems = datProduct.find((prod) => prod.id === action.payload);
      const duplicate = state.cart.find((item) => item.id === action.payload);
      if (duplicate) {
        state.cart = state.cart.map((item) => {
          return item.id === action.payload
            ? { ...duplicate, qty: duplicate.qty + 1 }
            : item;
        });
      } else {
        state.cart = [...state.cart, { ...cartItems, qty: 1 }];
      }
    },

    itemsCart: (state, action) => {
      const duplicateProd = state.cart.find(
        (item) => item.id === action.payload
      );
      if (duplicateProd.qty > 1) {
        state.cart = state.cart.map((item) => {
          return item.id === action.payload
            ? { ...duplicateProd, qty: duplicateProd.qty - 1 }
            : item;
        });
      } else {
        state.cart = state.cart.map((item) => {
          return item.id === action.payload
            ? { ...duplicateProd, qty: (duplicateProd.qty = 1) }
            : item;
        });
      }
    },

    removeItemCart: (state, action) => {
      const finProduct = datProduct.find((prod) => prod.id === action.payload);
      if (finProduct) {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
    },
  },
});

export const { statusCart, addToCart, itemsCart, removeItemCart } =
  cartSlice.actions;

export default cartSlice.reducer;

// const initState = {
//   status: false,
//   cart: [],
// };

// const cartReducer = (state = initState, action) => {
//   switch (action.type) {
//     case STATUS_CART:
//       return {
//         ...state,
//         status: action.payload,
//       };

//     case ADD_TO_CART:
//       const cartItems = datProduct.find((prod) => prod.id === action.payload);
//       const duplicate = state.cart.find((item) => item.id === action.payload);
//       if (duplicate) {
//         return {
//           ...state,
//           cart: state.cart.map((item) => {
//             return item.id === action.payload
//               ? { ...duplicate, qty: duplicate.qty + 1 }
//               : item;
//           }),
//         };
//       } else {
//         return {
//           ...state,
//           cart: [...state.cart, { ...cartItems, qty: 1 }],
//         };
//       }

//     case COUNT_CART_ITEMS:
//       const duplicateProd = state.cart.find(
//         (item) => item.id === action.payload
//       );
//       if (duplicateProd.qty > 1) {
//         return {
//           ...state,
//           cart: state.cart.map((item) => {
//             return item.id === action.payload
//               ? { ...duplicateProd, qty: duplicateProd.qty - 1 }
//               : item;
//           }),
//         };
//       } else {
//         return {
//           ...state,
//           cart: state.cart.map((item) => {
//             return item.id === action.payload
//               ? { ...duplicateProd, qty: (duplicateProd.qty = 1) }
//               : item;
//           }),
//         };
//       }

//     case REMOVE_CART_ITEMS:
//       const finProduct = datProduct.find((prod) => prod.id === action.payload);
//       if (finProduct) {
//         return {
//           ...state,
//           cart: state.cart.filter((item) => item.id !== action.payload),
//         };
//       }

//     default:
//       return state;
//   }
// };

// export default cartReducer;
