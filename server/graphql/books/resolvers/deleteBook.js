const Book = require("../../../models/book");

const deleteBook = async (_, { id }) => {
  const deletedBook = await Book.findByIdAndDelete(id);

  await deletedBook.populate("createdBy").execPopulate();
  return deletedBook;
};

module.exports = deleteBook;
