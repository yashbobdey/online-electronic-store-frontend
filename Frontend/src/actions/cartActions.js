import axios from "axios";
import * as actions from "./index.js";

import { logout } from "./userActions";

//**************************************************************
//-------------------------- GET CART --------------------------
//______________________________________________________________

export const getCart = (id) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(getCartRequest());
    axios
      .get(`${actions.API_CART_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { items, length, totalPrice } = response.data;
        dispatch(getCartSuccess(items, length, totalPrice));
      })
      .catch((error) => {
        dispatch(getCartFailure(error.response.data.message));
        if (error.response.data.message === "Token Invalid!!") {
          dispatch(logout());
        }
      });
  };
};
export const getCartRequest = () => {
  return {
    type: actions.GETCART_REQUEST,
  };
};

export const getCartSuccess = (items, length, price) => {
  return {
    type: actions.GETCART_SUCCESS,
    payload: {
      cartItems: items,
      cartLength: length,
      cartPrice: price,
    },
  };
};

export const getCartFailure = (error) => {
  return {
    type: actions.GETCART_FAILURE,
    payload: error,
  };
};

//**************************************************************
//-------------------------- ADD TO CART -----------------------
//______________________________________________________________

export const addToCart = (id, product) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(addToCartRequest());
    axios
      .post(
        `${actions.API_CART_URL}/${id}`,
        {
          product,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        // response.data is the users
        const { items, length, totalPrice } = response.data;
        dispatch(addToCartSuccess(items, length, totalPrice));
      })
      .catch((error) => {
        // error.message is the error message
        console.log("token error (item already present) : ", error.response);
        dispatch(addToCartFailure(error.response.data.message));
        if (error.response.data.message === "Token Invalid!!") {
          dispatch(logout());
        }
      });
  };
};

export const addToCartRequest = () => {
  return {
    type: actions.ADDTOCART_REQUEST,
  };
};

export const addToCartSuccess = (items, length, price) => {
  return {
    type: actions.ADDTOCART_SUCCESS,
    payload: {
      cartItems: items,
      cartLength: length,
      cartPrice: price,
    },
  };
};

export const addToCartFailure = (error) => {
  return {
    type: actions.ADDTOCART_FAILURE,
    payload: error,
  };
};

//**************************************************************
//-------------------------- REMOVE FROM CART -------------------
//______________________________________________________________

export const removeFromCart = (id, product) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(removeItemRequest());
    console.log(product);
    axios
      .put(
        `${actions.API_CART_URL}/${id}`,
        {
          product,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        // response.data is the users

        const { items, length, totalPrice } = response.data;
        dispatch(removeItemSuccess(items, length, totalPrice));
        dispatch(getCart(id));
      })
      .catch((error) => {
        dispatch(addToCartFailure(error.response.data.message));
        if (error.response.data.message === "Token Invalid!!") {
          dispatch(logout());
        }
      });
  };
};
export const removeItemRequest = () => {
  return {
    type: actions.REMOVEFROMCART_REQUEST,
  };
};

export const removeItemSuccess = (items, length, price) => {
  return {
    type: actions.REMOVEFROMCART_SUCCESS,
    payload: {
      cartItems: items,
      cartLength: length,
      cartPrice: price,
    },
  };
};

export const removeItemFailure = (error) => {
  return {
    type: actions.REMOVEFROMCART_FAILURE,
    payload: error,
  };
};

//**************************************************************
//-------------------------- INCREASE QUANTITY -----------------
//______________________________________________________________

export const increaseQuantity = (id, product) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(increaseRequest());
    axios
      .post(
        `${actions.API_CART_URL}/increaseQuantity/${id}`,
        {
          product,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const { items, length, totalPrice } = response.data;

        dispatch(increaseSuccess(items, length, totalPrice));
        // dispatch(getCart(id));
      })
      .catch((error) => {
        dispatch(increaseFailure(error.response.data.message));
        if (error.response.data.message === "Token Invalid!!") {
          dispatch(logout());
        }
      });
  };
};
export const increaseRequest = () => {
  return {
    type: actions.INCREASE_REQUEST,
  };
};

export const increaseSuccess = (items, length, price) => {
  return {
    type: actions.INCREASE_SUCCESS,
    payload: {
      cartItems: items,
      cartLength: length,
      cartPrice: price,
    },
  };
};

export const increaseFailure = (error) => {
  return {
    type: actions.INCREASE_FAILURE,
    payload: error,
  };
};

//**************************************************************
//-------------------------- DECREASE QUANTITY -----------------
//______________________________________________________________

export const decreaseQuantity = (id, product) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(decreaseRequest());
    axios
      .post(
        `${actions.API_CART_URL}/decreaseQuantity/${id}`,
        {
          product,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        // response.data is the users
        const { items, length, totalPrice } = response.data;
        dispatch(decreaseSuccess(items, length, totalPrice));
        dispatch(getCart(id));
      })
      .catch((error) => {
        dispatch(decreaseFailure(error.response.data.message));
        if (error.response.data.message === "Token Invalid!!") {
          dispatch(logout());
        }
      });
  };
};


export const decreaseRequest = () => {
  return {
    type: actions.DECREASE_REQUEST,
  };
};

export const decreaseSuccess = (items, length, price) => {
  return {
    type: actions.DECREASE_SUCCESS,
    payload: {
      cartItems: items,
      cartLength: length,
      cartPrice: price,
    },
  };
};

export const decreaseFailure = (error) => {
  return {
    type: actions.DECREASE_FAILURE,
    payload: error,
  };
};

//**************************************************************
//-------------------------- EMPTY -----------------------------
//______________________________________________________________


export const emptyCartLogout = () => {
  return {
    type: actions.EMPTY_CART_LOGOUT,
  };
};