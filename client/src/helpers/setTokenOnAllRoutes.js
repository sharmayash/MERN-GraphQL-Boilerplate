import Api from "../config/api";

const setTokenOnAllRoutes = (token) => {
  if (token) {
    // set the token to all request to a page
    Api.defaults.headers.common["x-token"] = token;
  } else {
    // delete auth token from local storage
    delete Api.defaults.headers.common["x-token"];
  }
};

export default setTokenOnAllRoutes;
