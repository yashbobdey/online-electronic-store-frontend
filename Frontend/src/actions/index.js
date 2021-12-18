//**************************************************************
//-------------------------- User ------------------------------
//______________________________________________________________

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGIN_LOGOUT = "LOGIN_LOGOUT";
export const LOGIN_LOGGEDIN = "LOGIN_LOGGEDIN";

// User Registration
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

// User Updation
export const UPDATE_REQUEST = "UPDATE_REQUEST";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAILURE = "UPDATE_FAILURE";

export const EMPTY_ERRORS = "EMPTY_ERRORS";

// User Password update
export const PASSWORD_UPDATE_REQUEST = "PASSWORD_UPDATE_REQUEST";
export const PASSWORD_UPDATE_SUCCESS = "PASSWORD_UPDATE_SUCCESS";
export const PASSWORD_UPDATE_FAILURE = "PASSWORD_UPDATE_FAILURE";

//**************************************************************
//-------------------------- Products --------------------------
//______________________________________________________________

// Get all Products
export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

// Get single Product
export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAILURE = "GET_PRODUCT_FAILURE";

//**************************************************************
//-------------------------- Cart ------------------------------
//______________________________________________________________

// Add to Cart
export const ADDTOCART_REQUEST = "ADDTOCART_REQUEST";
export const ADDTOCART_SUCCESS = "ADDTOCART_SUCCESS";
export const ADDTOCART_FAILURE = "ADDTOCART_FAILURE";

// Get Cart
export const GETCART_REQUEST = "GETCART_REQUEST";
export const GETCART_SUCCESS = "GETCART_SUCCESS";
export const GETCART_FAILURE = "GETCART_FAILURE";

// Remove From Cart
export const REMOVEFROMCART_REQUEST = "REMOVEITEM_REQUEST";
export const REMOVEFROMCART_SUCCESS = "REMOVEITEM_SUCCESS";
export const REMOVEFROMCART_FAILURE = "REMOVEITEM_FAILURE";

// Increase Qunatity
export const INCREASE_REQUEST = "INCREASE_REQUEST";
export const INCREASE_SUCCESS = "INCREASE_SUCCESS";
export const INCREASE_FAILURE = "INCREASE_FAILURE";

// Decrease Qunatity
export const DECREASE_REQUEST = "DECREASE_REQUEST";
export const DECREASE_SUCCESS = "DECREASE_SUCCESS";
export const DECREASE_FAILURE = "DECREASE_FAILURE";

export const EMPTY_CART_LOGOUT = "EMPTY_CART_LOGOUT";

//**************************************************************
//-------------------------- ORDERS ------------------------------
//______________________________________________________________

//Get ORDERS for a user
export const GET_ORDERS_REQUEST = "GET_ORDERS_REQUEST";
export const GET_ORDERS_SUCCESS = "GET_ORDERS_SUCCESS";
export const GET_ORDERS_FAILURE = "GET_ORDERS_FAILURE";

//Add order
export const ADD_ORDER_REQUEST = "ADD_ORDER_REQUEST";
export const ADD_ORDER_SUCCESS = "ADD_ORDER_SUCCESS";
export const ADD_ORDER_FAILURE = "ADD_ORDER_FAILURE";

//**************************************************************
//-------------------------- SEARCH ------------------------------
//______________________________________________________________

export const SEARCH_PRODUCTS_REQUEST = "SEARCH_PRODUCTS_REQUEST";
export const SEARCH_PRODUCTS_SUCCESS = "SEARCH_PRODUCTS_SUCCESS";
export const SEARCH_PRODUCTS_FAILURE = "SEARCH_PRODUCTS_FAILURE";

export const GET_PRODUCTS_BY_CATEGORY_REQUEST =
  "GET_PRODUCTS_BY_CATEGORY_REQUEST";
export const GET_PRODUCTS_BY_CATEGORY_SUCCESS =
  "GET_PRODUCTS_BY_CATEGORY_SUCCESS";
export const GET_PRODUCTS_BY_CATEGORY_FAILURE =
  "GET_PRODUCTS_BY_CATEGORY_FAILURE";

//**************************************************************
//-------------------------- URL ------------------------------
//______________________________________________________________

export const API_USERS_URL = "http://localhost:8080/users";
export const API_PRODUCTS_URL = "http://localhost:8080/products";
export const API_ORDERS_URL = "http://localhost:8080/orders";
export const API_CART_URL = "http://localhost:8080/carts";
