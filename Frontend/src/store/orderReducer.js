import * as actions from "../actions/index.js";

const initialState = {
  isLoading: false,
  error: "",
  orders: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //---------------------------- get ORDERS for a user ------------------
    case actions.GET_ORDERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.GET_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orders: action.payload,
      };
    case actions.GET_ORDERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    //---------------------------- add ORDER for a user ------------------

    case actions.ADD_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.ADD_ORDER_SUCCESS:
      const updatedOrders = [...state.orders, action.payload];
      return {
        ...state,
        isLoading: false,
        orders: updatedOrders,
      };
    case actions.ADD_ORDER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
