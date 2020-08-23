import Api from "../../config/api";
import jwt_decode from "jwt-decode";
import { ERRORS, SET_CURRENT_USER } from "../types";
import setTokenOnAllRoutes from "../../helpers/setTokenOnAllRoutes";

export const signup = (name, email, password) => (dispatch) => {
  const reqBody = {
    query: `
      mutation {
        signup(name: "${name}", email: "${email}", password: "${password}") {
          token
        }
      }
    `,
  };

  Api.post("/", reqBody)
    .then((res) => {
      if (res.data.data.signup) {
        // get token
        const { token } = res.data.data.signup;
        // save token to local storage
        localStorage.setItem("jwtToken", token);
        // set token to Auth header
        setTokenOnAllRoutes(token);
        // Decode The data stored in token
        const decoded = jwt_decode(token);
        //set current user
        dispatch(setCurrentUser(decoded));
      }
      if (res.data.errors) {
        dispatch({
          type: ERRORS,
          payload: res.data.errors[0].message,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: ERRORS,
        payload: err,
      });
    });
};

export const login = (email, password) => (dispatch) => {
  const reqBody = {
    query: `
      mutation {
        login(email: "${email}", password: "${password}") {
          token
        }
      }
    `,
  };

  Api.post("/", reqBody)
    .then((res) => {
      if (res.data.data.login) {
        // get token
        const { token } = res.data.data.login;
        // save token to local storage
        localStorage.setItem("jwtToken", token);
        // set token to Auth header
        setTokenOnAllRoutes(token);
        // Decode The data stored in token
        const decoded = jwt_decode(token);
        //set current user
        dispatch(setCurrentUser(decoded));
      }

      if (res.data.errors) {
        dispatch({
          type: ERRORS,
          payload: res.data.errors[0].message,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: ERRORS,
        payload: err,
      });
    });
};

export const setCurrentUser = (decode) => {
  return {
    type: SET_CURRENT_USER,
    payload: decode,
  };
};

export const logOutUser = () => (dispatch) => {
  //remove token from localstorage
  localStorage.removeItem("jwtToken");
  // remove auth header from every header
  setTokenOnAllRoutes(false);
  //set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
