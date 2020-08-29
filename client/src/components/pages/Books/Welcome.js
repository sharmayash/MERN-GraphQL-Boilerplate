import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import bookHome from "../../../assets/images/bookHome.gif";

const Welcome = () => {
  return (
    <Grid.Row
      columns="equal"
      style={{ height: "100vh" }}
      verticalAlign="middle"
    >
      <Grid.Column textAlign="left" mobile={16} tablet={8} computer={8}>
        <Header size="huge" color="grey" style={{ fontFamily: "Josefin Sans" }}>
          Welcome to our books collection
        </Header>
        <Header
          size="small"
          color="grey"
          style={{ fontFamily: "Josefin Sans" }}
        >
          You can find the name of books added to our platform by the users on
          platform.
        </Header>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={8}>
        <Image src={bookHome} centered/>
      </Grid.Column>
    </Grid.Row>
  );
};

export default Welcome;
