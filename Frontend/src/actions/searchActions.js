import axios from "axios";
import CategoryCard from "../components/Ui/CategoryCard";
import * as actions from "./index";

export const searchProductsRequest = () => {
  return {
    type: actions.SEARCH_PRODUCTS_REQUEST,
  };
};

export const searchProductsSuccess = (products) => {
  return {
    type: actions.SEARCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const searchProductsFailure = (error) => {
  return {
    type: actions.SEARCH_PRODUCTS_FAILURE,
    payload: error,
  };
};
export const searchProducts = (query) => (dispatch) => {
  dispatch(searchProductsRequest());
  axios
    .post(`http://localhost:8080/search`, { query })
    .then((response) => {
      const products = response.data.data;
      const totalProducts = response.data.length;
      dispatch(searchProductsSuccess(products));
    })
    .catch((error) => dispatch(searchProductsFailure(error)));
};

