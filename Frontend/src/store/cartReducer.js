// const initialState = {
//   isisLoading: false,
//   cart: {},
//   error: "",
// };

import * as actions from "../actions/index.js";

const initialState = {
  isLoading: false,
  error: null,
  cartItems: [],
  cartLength: 0,
  cartPrice: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // --------------------------------- GET CART ----------------------------
    case actions.GETCART_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        cartItems: [],
        cartLength: 0,
        cartPrice: 0,
      };
    case actions.GETCART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        cartItems: action.payload.cartItems,
        cartLength: action.payload.cartLength,
        cartPrice: action.payload.cartPrice,
      };

    case actions.GETCART_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        cartItems: [],
        cartLength: 0,
        cartPrice: 0,
      };

    // --------------------------------- ADD TO CART ----------------------------
    case actions.ADDTOCART_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actions.ADDTOCART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        cartItems: action.payload.cartItems,
        cartLength: action.payload.cartLength,
        cartPrice: action.payload.cartPrice,
      };
    case actions.ADDTOCART_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    // --------------------------------- REMOVE FROM CART ----------------------------

    case actions.REMOVEFROMCART_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actions.REMOVEFROMCART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        cartItems: action.payload.cartItems,
        cartLength: action.payload.cartLength,
        cartPrice: action.payload.cartPrice,
      };
    case actions.REMOVEFROMCART_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    // --------------------------------- INCREASE QUANTITY ----------------------------

    case actions.INCREASE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actions.INCREASE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        cartItems: action.payload.cartItems,
        cartLength: action.payload.cartLength,
        cartPrice: action.payload.cartPrice,
      };
    case actions.INCREASE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    // --------------------------------- DECREASE QUANTITY ----------------------------

    case actions.DECREASE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actions.DECREASE_SUCCESS:
      return {
        isLoading: false,
        error: null,
        cartItems: action.payload.cartItems,
        cartLength: action.payload.cartLength,
        cartPrice: action.payload.cartPrice,
      };
    case actions.DECREASE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    // --------------------------------- EMPTY CART AFTER LOGOUT ----------------------------
    case actions.EMPTY_CART_LOGOUT:
      return {
        ...state,
        isLoading: false,
        cartItem: [],
        cartLength: 0,
        cartPrice: 0,
        error: "",
      };
    default:
      return state;
  }
};

export default reducer;
