import jwt_decode from "jwt-decode";
import setTokenOnAllRoutes from "./setTokenOnAllRoutes";

import store from "../redux/store";
import { setCurrentUser, logOutUser } from "../redux/actions/authActions";

// check for existing user session / check for tokens

const checkTokenInLocalStorage = () => {
  if (localStorage.jwtToken) {
    //set auth token header
    setTokenOnAllRoutes(localStorage.jwtToken);

    //decode token and get user information
    const decoded = jwt_decode(localStorage.jwtToken);

    //set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    // check for expired token
    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
      // logout user
      store.dispatch(logOutUser());
      // redirect to login
      window.location.href = "/login";
    }
  }
};

export default checkTokenInLocalStorage;
