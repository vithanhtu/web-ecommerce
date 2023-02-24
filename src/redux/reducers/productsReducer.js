import { createSlice } from "@reduxjs/toolkit";
import { datProduct } from "../../data";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [...datProduct],
    detailProducts: [],
    newProducts: [],
    statusShop: true,
  },
  reducers: {
    filterNewProducts: (state) => {
      state.newProducts = state.products.filter(
        (product) => product.newProduct === true
      );
    },

    filterCategories: (state, action) => {
      const cloneProduct = [...state.products];
      state.newProducts =
        action.payload === "All"
          ? cloneProduct.filter((product) => product.newProduct === true)
          : cloneProduct.filter(
              (product) => product.category === action.payload
            );
    },

    detailProduct: (state, action) => {
      state.detailProducts = datProduct.find(
        (prod) => prod.id === action.payload
      );
    },

    filterProducts: (state, action) => {
      if (action.payload == "Accessories" || "Cosmetic") {
        state.products = datProduct.filter(
          (prod) => prod.category === action.payload
        );
      }
      const categoriesProducts = datProduct.filter(
        (prod) =>
          prod.category === action.payload.cate &&
          prod.info === action.payload.item
      );
      if (categoriesProducts) {
        state.products = categoriesProducts;
      }
    },

    searchProducts: (state, action) => {
      if (action.payload) {
        state.products = datProduct.filter((item) => {
          return item.title
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        });
      } else {
        state.products = [...datProduct];
      }
    },

    statusProducts: (state) => {
      state.newProducts = [...datProduct];
    },
  },
});

export const {
  filterNewProducts,
  filterCategories,
  detailProduct,
  filterProducts,
  searchProducts,
  statusProducts,
} = productsSlice.actions;

export default productsSlice.reducer;
