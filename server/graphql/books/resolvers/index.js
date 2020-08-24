const book = require("./book");
const books = require("./books");
const createBook = require("./createBook");
const deleteBook = require("./deleteBook");
const updateBook = require("./updateBook");

const resolvers = {
  Query: {
    book,
    books,
  },
  Mutation: {
    createBook,
    updateBook,
    deleteBook,
  },
};

module.exports = resolvers;
