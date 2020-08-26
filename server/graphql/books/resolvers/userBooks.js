const Book = require("../../../models/book");

const userBooks = async (_, {}, { user }) => {
  const userId = user._id.toString();
  const books = await Book.find({ createdBy: userId }).populate("createdBy");

  return books;
};

module.exports = userBooks;
