import React, { useState } from "react";

import readingSide from "../../../assets/svgs/reading-side.svg";
import { Icon, Grid, Image, Header, Button } from "semantic-ui-react";

import AddBookModal from "../../common/AddBookModal";

export const Welcome2 = () => {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Grid.Row columns="2" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column mobile={16} tablet={8} computer={8}>
        <Image src={readingSide} />
      </Grid.Column>
      <Grid.Column textAlign="left" mobile={16} tablet={8} computer={8}>
        <Header size="huge" color="grey" style={{ fontFamily: "Josefin Sans" }}>
          You can also contribute on your platform by helping other readers to
          find new books.
        </Header>
        <Header
          size="small"
          color="grey"
          style={{ fontFamily: "Josefin Sans" }}
        >
          Just click on below mentioned button to add a book.
        </Header>
        <Button
          size="big"
          color="twitter"
          animated="fade"
          onClick={openModal}
          style={{ marginTop: "2rem" }}
        >
          <Button.Content visible>Add a Book</Button.Content>
          <Button.Content hidden>
            <Icon name="add square"></Icon>
          </Button.Content>
        </Button>
      </Grid.Column>
      <AddBookModal open={isOpen} closeModal={closeModal} />
    </Grid.Row>
  );
};

export default Welcome2;
