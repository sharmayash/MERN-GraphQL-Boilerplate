const book = require("./book");
const books = require("./books");
const userBooks = require("./userBooks");
const createBook = require("./createBook");
const deleteBook = require("./deleteBook");
const updateBook = require("./updateBook");

const resolvers = {
  Query: {
    book,
    books,
    userBooks,
  },
  Mutation: {
    createBook,
    updateBook,
    deleteBook,
  },
};

module.exports = resolvers;
