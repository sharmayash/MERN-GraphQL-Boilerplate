import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getAllBooks } from "../../../redux/actions/bookActions";
import { Icon, Grid, Header, Button, Segment } from "semantic-ui-react";

export const AllBooks = ({ book, getAllBooks }) => {
  const { books } = book;
  let allBookComp;

  useEffect(() => {
    getAllBooks();
  }, [getAllBooks]);

  if (books.length > 0) {
    allBookComp = (
      <div
        style={{
          height: "60vh",
          overflow: "auto",
          "&::WebkitScrollbar": {
            appearance: "none",
            height: 0,
          },
        }}
      >
        <Segment.Group stacked>
          {books.map((book) => (
            <Segment clearing textAlign="center" key={book.id}>
              <Header
                as="h4"
                floated="left"
                style={{ fontFamily: "Josefin Sans" }}
              >
                {book.title}
              </Header>
              <Button color="red" floated="right" icon="delete" />
              <Button color="blue" floated="right" icon="edit" />
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
        <Button
          color="twitter"
          animated="fade"
          size="big"
          style={{ margin: "2rem" }}
        >
          <Button.Content visible>
            View all books on our platform
          </Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right"></Icon>
          </Button.Content>
        </Button>
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
