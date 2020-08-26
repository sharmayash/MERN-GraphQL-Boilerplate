import {
  GET_BOOKS,
  CREATE_BOOK,
  GET_USERS_BOOKS,
  UPDATE_BOOK,
  DELETE_BOOK,
} from "../types";

const initialState = {
  books: [],
  userBooks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case GET_USERS_BOOKS:
      return {
        ...state,
        userBooks: action.payload,
      };
    case CREATE_BOOK:
      return {
        ...state,
        books: [action.payload, ...state.books],
        userBooks: [action.payload, ...state.userBooks],
      };
    case UPDATE_BOOK:
      return {
        ...state,
        books: state.books.map((book) => {
          if (book.id === action.payload.id) {
            return action.payload;
          }

          return book;
        }),
        userBooks: state.userBooks.map((book) => {
          if (book.id === action.payload.id) {
            return action.payload;
          }
          return book;
        }),
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload.id),
        userBooks: state.userBooks.filter(
          (book) => book.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
