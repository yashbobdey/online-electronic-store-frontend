import * as actions from "../actions/adminActions";

let initialState = {
  products: [],
  product: null,
  orders: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH:
      return {
        products: action.payload,
      };
    case actions.DELETE:
      return {
        // ...state,
        // products:state.products.filter((elem)=>elem._id!==action.payload._id)
        products: action.payload.product,
      };

    case actions.GET_PRODUCT:
      let arr = state.products.filter(
        (product) => product._id === action.payload._id
      );

      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        product: arr,
      };

    case actions.UPDATE_PRODUCT:
      let newList = state.products.map((product) =>
        product._id === action.payload._id ? action.payload : product
      );
      return {
        ...state,
        products: newList,
      };
    case actions.FETCHORDERS:
      return {
        orders: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
