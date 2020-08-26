import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { Icon, Grid, Header, Button, Segment } from "semantic-ui-react";

import { getUsersBooks, deleteABook } from "../../../redux/actions/bookActions";

import AddBookModal from "../../common/AddBookModal";
import UpdateBookModal from "../../common/UpdateBookModal";

export const UsersBooks = ({ book, getUsersBooks, deleteABook }) => {
  let userBookComp;
  const { userBooks } = book;
  const [isOpen, setOpen] = useState(false);
  const [upState, setUpState] = useState({
    id: "",
    title: "",
    open: false,
  }); // For Update Modal

  useEffect(() => {
    getUsersBooks();
  }, [getUsersBooks]);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const openUpModal = (id, oldTitle) => {
    setUpState({
      id: id,
      open: true,
      title: oldTitle,
    });
  };

  const closeUpModal = () => {
    setUpState({
      id: "",
      title: "",
      open: false,
    });
  };

  if (userBooks.length > 0) {
    userBookComp = (
      <div
        style={{
          height: "50vh",
          overflow: "auto",
          "&::WebkitScrollbar": {
            appearance: "none",
            height: 0,
          },
        }}
      >
        <Segment.Group stacked>
          {userBooks.map((book) => (
            <Segment clearing textAlign="center" key={book.id}>
              <Header
                as="h4"
                floated="left"
                style={{ fontFamily: "Josefin Sans" }}
              >
                {book.title}
              </Header>
              <Button
                color="red"
                icon="delete"
                floated="right"
                onClick={() => deleteABook(book.id)}
              />
              <Button
                icon="edit"
                color="blue"
                floated="right"
                onClick={() => openUpModal(book.id, book.title)}
              />
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
          Your Added Books
        </Header>
        {userBookComp}
        <Button
          size="big"
          color="twitter"
          animated="fade"
          style={{ margin: "2rem" }}
          onClick={openModal}
        >
          <Button.Content visible>Add More</Button.Content>
          <Button.Content hidden>
            <Icon name="add square"></Icon>
          </Button.Content>
        </Button>
      </Grid.Column>
      <AddBookModal open={isOpen} closeModal={closeModal} />
      <UpdateBookModal
        open={upState.open}
        bookId={upState.id}
        bookOldTitle={upState.title}
        closeModal={closeUpModal}
      />
    </Grid.Row>
  );
};

UsersBooks.propTypes = {
  deleteABook: PropTypes.func.isRequired,
  getUsersBooks: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  book: state.book,
});

const mapDispatchToProps = {
  deleteABook,
  getUsersBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersBooks);
