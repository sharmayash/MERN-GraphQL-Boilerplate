import React from "react";
import { Provider } from "react-redux";

// --- import css ---
import "./App.css";

import Routes from "../constants/routes";

// Importing app files
import store from "../redux/store";
import checkTokenInLocalStorage from "../helpers/checkTokenInLocalStorage";

checkTokenInLocalStorage();

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
