import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Header, Button } from "semantic-ui-react";

import { logOutUser } from "../../../redux/actions/authActions";

const Home = ({ auth, logOutUser }) => {
  const { isAuthenticated, user } = auth;

  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh", paddingTop: "1rem" }}
      verticalAlign="top"
      columns="equal"
    >
      <Grid.Column>
        <Header as="h2">
          {isAuthenticated ? <>Welcome {user.userName}</> : null}
        </Header>
      </Grid.Column>
      <Grid.Column>
        <Button onClick={logOutUser} color="twitter" size="large">
          Log Out
        </Button>
      </Grid.Column>
    </Grid>
  );
};

Home.propTypes = {
  auth: PropTypes.object.isRequired,
  logOutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const dispatchActicns = {
  logOutUser,
};

export default connect(mapStateToProps, dispatchActicns)(Home);
