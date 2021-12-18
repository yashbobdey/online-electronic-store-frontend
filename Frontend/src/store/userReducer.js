import * as actions from "../actions/index";

const initialState = {
  error: "",
  loginError: "",
  isLoading: false,
  isLoggedIn: false,
  user: {},
  token: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //********************************************************
    // --------------- Empty Errors ------------------------
    // _____________________________________________________
    case actions.EMPTY_ERRORS:
      return {
        ...state,
        isLoading: true,
        error: "",
        loginError: "",
      };
    //********************************************************
    // --------------- Login ---------------------------------
    // _______________________________________________________
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        error: "",
        loginError: "",
        isLoading: true,
        isLoggedIn: false,
        user: {},
        token: "",
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        error: "",
        loginError: "",
        isLoading: false,
        isLoggedIn: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        error: "",
        loginError: action.payload,
        isLoading: false,
        isLoggedIn: false,
        user: {},
        token: "",
      };
    case actions.LOGIN_LOGOUT:
      return {
        ...state,
        error: "",
        loginError: "",
        isLoading: false,
        isLoggedIn: false,
        user: {},
        token: "",
      };
    case actions.LOGIN_LOGGEDIN:
      return {
        ...state,
        error: "",
        loginError: "",
        isLoading: false,
        isLoggedIn: true,
        user: action.payload.user,
        token: action.payload.token,
      };

    //********************************************************
    // --------------- User Registration ---------------------
    // _______________________________________________________
    case actions.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: "",
      };
    case actions.REGISTER_FAILURE:
      return {
        ...state,
        user: {},
        error: action.payload,
        isLoading: false,
      };

    //********************************************************
    // --------------- User Update Profile -------------------
    // _______________________________________________________

    case actions.UPDATE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        user: action.payload,
      };
    case actions.UPDATE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
      //********************************************************
    // --------------- User Password Update -------------------
    // _______________________________________________________
 
    case actions.PASSWORD_UPDATE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.PASSWORD_UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        user: action.payload,
      };
    case actions.PASSWORD_UPDATE_FAILURE:
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
