import axios from "axios";
import * as actions from "./index";

import { logout } from "./userActions";

//**************************************************************
//-------------------------- GET ORDERS FOR A USER -------------
//______________________________________________________________

export const getOrders = (id) => (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch(getOrdersRequest());
  axios
    .get(`${actions.API_ORDERS_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      const orders = response.data.orders;
      console.log(orders);
      dispatch(getOrdersSuccess(orders));
    })
    .catch((error) => {
      dispatch(getOrdersFailure(error.response.data.message));
      if (error.response.data.message === "Token Invalid!!") {
        dispatch(logout());
      }
    });
};

export const getOrdersRequest = () => {
  return {
    type: actions.GET_ORDERS_REQUEST,
  };
};

export const getOrdersSuccess = (orders) => {
  return {
    type: actions.GET_ORDERS_SUCCESS,
    payload: orders,
  };
};

export const getOrdersFailure = (error) => {
  return {
    type: actions.GET_ORDERS_FAILURE,
    payload: error,
  };
};

//**************************************************************
//-------------------------- ADD ORDER FOR A USER --------------
//______________________________________________________________

export const addOrder = (order) => (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch(addOrderRequest());
  axios
    .post(`${actions.API_ORDERS_URL}`, order, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      const order = response.data.order;
      dispatch(addOrderSuccess(order));
    })
    .catch((error) => dispatch(addOrderFailure(error)));
};

export const addOrderRequest = () => {
  return {
    type: actions.ADD_ORDER_REQUEST,
  };
};

export const addOrderSuccess = (order) => {
  return {
    type: actions.ADD_ORDER_SUCCESS,
    payload: order,
  };
};

export const addOrderFailure = (error) => {
  return {
    type: actions.ADD_ORDER_FAILURE,
    payload: error,
  };
};
