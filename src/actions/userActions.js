import axios from "axios";
import * as actions from "./index";

//******************************************************************
//-------------------------- 1. Login User ----------------------------
//__________________________________________________________________

export const login = (user) => {
  return (dispatch) => {
    dispatch(loginRequest());
    axios
      .post(`${actions.API_USERS_URL}/login`, {
        ...user,
      })
      .then((response) => {
        const token = response.data.token;
        const user = response.data.user;

        localStorage.setItem("token", token);
        localStorage.setItem("user_id", user._id);
        localStorage.setItem("user_isAdmin", user.isAdmin);
        localStorage.setItem("user_address", JSON.stringify(user.address));

        dispatch(loginSuccess(token, user));
      })
      .catch((error) => {
        // error.message is the error message
        const loginError = error.response.data.message;
        dispatch(loginFailure(loginError));
      });
  };
};

export const loginRequest = () => {
  return {
    type: actions.LOGIN_REQUEST,
  };
};

export const loginSuccess = (token, user) => {
  return {
    type: actions.LOGIN_SUCCESS,
    payload: { token, user },
  };
};

export const loginFailure = (error) => {
  return {
    type: actions.LOGIN_FAILURE,
    payload: error,
  };
};

export const emptyErrors = () => {
  return {
    type: actions.EMPTY_ERRORS,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user_id");
  localStorage.removeItem("user_fname");
  localStorage.removeItem("user_lname");
  localStorage.removeItem("user_isAdmin");
  localStorage.removeItem("user_address");

  return {
    type: actions.LOGIN_LOGOUT,
  };
};

export const loggedin = (token, user) => {
  return {
    type: actions.LOGIN_LOGGEDIN,
    payload: { token, user },
  };
};

//******************************************************************
//-------------------------- 2. Register User --------------------------
//__________________________________________________________________
export const registerRequest = () => {
  return {
    type: actions.REGISTER_REQUEST,
  };
};

export const registerSuccess = (registeredUser) => {
  return {
    type: actions.REGISTER_SUCCESS,
    payload: registeredUser,
  };
};

export const registerFailure = (error) => {
  return {
    type: actions.REGISTER_FAILURE,
    payload: error,
  };
};

export const register = (user) => {
  // console.log("inside register in user actions");
  return (dispatch) => {
    dispatch(registerRequest());
    // console.log(user);
    axios
      .post(actions.API_USERS_URL, {
        ...user,
      })
      .then((response) => {
        // response.data is the users
        const registeredUser = response.data;
        console.log(registeredUser);
        dispatch(registerSuccess(registeredUser));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(registerFailure(error.message));
      });
  };
};

//******************************************************************
//-------------------------- 3. Update User ---------------------------
//__________________________________________________________________
export const updateRequest = () => {
  return {
    type: actions.UPDATE_REQUEST,
  };
};

export const updateSuccess = (updatedUser) => {
  return {
    type: actions.UPDATE_SUCCESS,
    payload: updatedUser,
  };
};

export const updateFailure = (error) => {
  return {
    type: actions.UPDATE_FAILURE,
    payload: error,
  };
};

export const update = (id, user) => {
  return (dispatch) => {
    dispatch(updateRequest);
    axios
      .patch(`${actions.API_USERS_URL}/${id}`, { ...user })
      .then((response) => {
        // response.data is the users
        const updatedUser = response.data.data;
        console.log(updatedUser);
        dispatch(updateSuccess(updatedUser));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(registerFailure(error.message));
      });
  };
};

//******************************************************************
//-------------------------- 3. Update User Password---------------------------
//__________________________________________________________________
 
export const passwordUpdateRequest = () => {
  return {
    type: actions.PASSWORD_UPDATE_REQUEST,
  };
};
 
export const passwordUpdateSuccess = (updatedUser) => {
  return {
    type: actions.PASSWORD_UPDATE_SUCCESS,
    payload: updatedUser,
  };
};
 
export const passwordUpdateFailure = (error) => {
  return {
    type: actions.PASSWORD_UPDATE_FAILURE,
    payload: error,
  };
};
 
export const passwordUpdate = (id, password) => {
  return (dispatch) => {
    dispatch(passwordUpdateRequest);
    axios
      .patch(`${actions.API_USERS_URL}/changePassword/${id}`, { password })
      .then((response) => {
        // response.data is the users
        const updatedUser = response.data.user;
 
        dispatch(passwordUpdateSuccess(updatedUser));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(passwordUpdateFailure(error.message));
      });
  };
};
