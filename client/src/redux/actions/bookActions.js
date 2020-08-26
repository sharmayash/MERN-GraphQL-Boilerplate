import Api from "../../config/api";
import {
  ERRORS,
  GET_BOOKS,
  GET_USERS_BOOKS,
  CREATE_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK,
} from "../types";

export const getAllBooks = () => (dispatch) => {
  const reqBody = {
    query: `
      query {
        books {
          id
          title
          createdBy {
            name
          }
          created
        }
      }
    `,
  };

  Api.post("/", reqBody)
    .then((res) => {
      if (res.data.data.books) {
        dispatch({
          type: GET_BOOKS,
          payload: res.data.data.books.reverse(),
        });
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

export const getUsersBooks = () => (dispatch) => {
  const reqBody = {
    query: `
      query {
        userBooks {
          id
          title
          createdBy {
            name
            email
          }
          created
        }
      }
    `,
  };

  Api.post("/", reqBody)
    .then((res) => {
      if (res.data.data.userBooks) {
        dispatch({
          type: GET_USERS_BOOKS,
          payload: res.data.data.userBooks.reverse(),
        });
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

export const addABook = (title) => (dispatch) => {
  const reqBody = {
    query: `
      mutation {
        createBook(title: "${title}") {
          id
          title
          created
          createdBy {
            name
            email
          }
        }
      }
    `,
  };

  Api.post("/", reqBody)
    .then((res) => {
      if (res.data.data.createBook) {
        dispatch({
          type: CREATE_BOOK,
          payload: res.data.data.createBook,
        });
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

export const updateABook = (id, title) => (dispatch) => {
  const reqBody = {
    query: `
      mutation {
        updateBook(id: "${id}" title: "${title}") {
          id
          title
          created
          createdBy {
            name
            email
          }
        }
      }
    `,
  };

  Api.post("/", reqBody)
    .then((res) => {
      if (res.data.data.updateBook) {
        dispatch({
          type: UPDATE_BOOK,
          payload: res.data.data.updateBook,
        });
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

export const deleteABook = (id) => (dispatch) => {
  const reqBody = {
    query: `
      mutation {
        deleteBook(id: "${id}") {
          id
          title
        }
      }
    `,
  };

  Api.post("/", reqBody)
    .then((res) => {
      if (res.data.data.deleteBook) {
        dispatch({
          type: DELETE_BOOK,
          payload: res.data.data.deleteBook,
        });
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
