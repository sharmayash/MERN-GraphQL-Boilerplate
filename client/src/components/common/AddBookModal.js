import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Modal, Form, Button } from "semantic-ui-react";
import { addABook } from "../../redux/actions/bookActions";

const AddBookModal = ({ open, closeModal, addABook }) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAdd = () => {
    if (title.length === 0) return;
    closeModal();
    addABook(title);
  };

  return (
    <Modal size="tiny" open={open} onClose={closeModal}>
      <Modal.Header>Add a Book</Modal.Header>
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
        <Button positive onClick={handleAdd}>
          Add
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

AddBookModal.propTypes = {
  addABook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addABook,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBookModal);
