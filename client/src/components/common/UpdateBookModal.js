import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Modal, Form, Button } from "semantic-ui-react";
import { updateABook } from "../../redux/actions/bookActions";

const UpdateBookModal = ({
  open,
  closeModal,
  bookId,
  bookOldTitle,
  updateABook,
}) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(bookOldTitle);
  }, [bookOldTitle]);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleUpdate = () => {
    if (title.length === 0) return;
    closeModal();
    updateABook(bookId, title);
  };

  return (
    <Modal size="tiny" open={open} onClose={closeModal}>
      <Modal.Header>Update Your Book</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            required
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Name / Title of Book"
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={closeModal}>
          Cancel
        </Button>
        <Button positive onClick={handleUpdate}>
          Update
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

UpdateBookModal.propTypes = {
  updateABook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  updateABook,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateBookModal);
