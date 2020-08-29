import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./index.css";
import { Grid, Header, Segment } from "semantic-ui-react";
import { getAllBooks } from "../../../redux/actions/bookActions";

export const AllBooks = ({ book, getAllBooks }) => {
  const { books } = book;
  let allBookComp;

  useEffect(() => {
    getAllBooks();
  }, [getAllBooks]);

  if (books.length > 0) {
    allBookComp = (
      <div className="box">
        <Segment.Group stacked>
          {books.map((book) => (
            <Segment clearing textAlign="center" key={book.id}>
              <Header
                as="h4"
                style={{ fontFamily: "Josefin Sans", textAlign: "center" }}
              >
                {book.title}
              </Header>
            </Segment>
          ))}
        </Segment.Group>
      </div>
    );
  }

  return (
    <Grid.Row verticalAlign="top">
      <Grid.Column textAlign="center">
        <Header
          size="huge"
          color="grey"
          style={{ fontFamily: "Josefin Sans", marginBottom: "5rem" }}
        >
          Books on our Platform
        </Header>
        {allBookComp}
      </Grid.Column>
    </Grid.Row>
  );
};

AllBooks.propTypes = {
  getAllBooks: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  book: state.book,
});

const mapDispatchToProps = {
  getAllBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllBooks);
