import * as actions from "../actions/index";

const initialState = {
  products: [],
  error: "",
  isLoading: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SEARCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        error: "",
      };
    case actions.SEARCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        products: [],
        error: action.payload,
      };

    // Search By Category

    default:
      return state;
  }
};

export default reducer;
