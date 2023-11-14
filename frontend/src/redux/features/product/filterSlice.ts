import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProducts: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_PRODUCTS(state, action) {
      const { products, search } = action.payload;
      console.log({products});
      console.log({state});
      const tempProducts = products.filter(
        (product:any) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase())
      );
      return {
        ...state,
        filteredProducts: tempProducts,
      }
    },
  },
});

export const { FILTER_PRODUCTS } = filterSlice.actions;
export const selectFilteredProducts = (state: { filter: { filteredProducts: any; }; }) => state.filter.filteredProducts;

export default filterSlice.reducer;