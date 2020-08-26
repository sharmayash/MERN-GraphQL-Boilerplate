import { combineReducers } from "redux";
import authReducer from "./authReducer";
import bookReducer from "./bookReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  book: bookReducer,
  errors: errorReducer,
});
