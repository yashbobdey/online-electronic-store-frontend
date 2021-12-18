import axios from "axios";
import * as actions from "./index";

//**************************************************************
//-------------------------- 1. GET ALL PRODUCTS ------------------
//______________________________________________________________

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get(actions.API_PRODUCTS_URL)
      .then((response) => {
        // response.data is the users
        const products = response.data.data;
        console.log("products (action): ", products);
        // products = {[{},{},{},{}]}
        dispatch(fetchProductsSuccess(products));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchProductsFailure(error.message));
      });
  };
};

export const fetchProductsRequest = () => {
  return {
    type: actions.FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: actions.FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: actions.FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

//**************************************************************
//-------------------------- 2. GET PROCDUCT -----------------------
//______________________________________________________________

export const getProduct = (id) => {
  return (dispatch) => {
    dispatch(getProductRequest());
    axios
      .get(`${actions.API_PRODUCTS_URL}/${id}`)
      .then((response) => {
        const product = response.data.data;
        console.log("product action : (product) ", product);
        dispatch(getProductsSuccess(product));
      })
      .catch((error) => dispatch(getProductsFailure(error)));
  };
};
export const getProductRequest = () => {
  return {
    type: actions.GET_PRODUCT_REQUEST,
  };
};

export const getProductsSuccess = (product) => {
  return {
    type: actions.GET_PRODUCT_SUCCESS,
    payload: product,
  };
};

export const getProductsFailure = (error) => {
  return {
    type: actions.GET_PRODUCT_FAILURE,
    payload: error,
  };
};

//**************************************************************
//-------------------------- 3. GET PRODUCTS BY CATEGORY -------
//______________________________________________________________

export const getProductsByCategory = (category) => {
  return (dispatch) => {
    axios
      .post(`${actions.API_PRODUCTS_URL}/category`, { category })
      .then((response) => {
        const products = response.data.data;
        dispatch(getProductsByCategorySuccess(products));
      });
  };
};

export const getProductsByCategoryRequest = () => {
  return {
    type: actions.GET_PRODUCTS_BY_CATEGORY_REQUEST,
  };
};

export const getProductsByCategorySuccess = (products) => {
  return {
    type: actions.GET_PRODUCTS_BY_CATEGORY_SUCCESS,
    payload: products,
  };
};

export const getProductsByCategoryFailure = (error) => {
  return {
    type: actions.GET_PRODUCTS_BY_CATEGORY_FAILURE,
    payload: error,
  };
};
