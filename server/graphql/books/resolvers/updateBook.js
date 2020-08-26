const Book = require("../../../models/book");

const updateBook = async (_, { id, title }) => {
  const updatedBook = await Book.findByIdAndUpdate(
    id,
    { title: title },
    (err) => {
      if (err) console.log(err);
    }
  );

  await updatedBook.populate("createdBy").execPopulate();
  return updatedBook;
};

module.exports = updateBook;
