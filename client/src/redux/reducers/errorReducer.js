import { ERRORS } from "../types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ERRORS:
      let jsonObj = JSON.parse(action.payload);
      return jsonObj;
    // return action.payload;
    default:
      return state;
  }
};
