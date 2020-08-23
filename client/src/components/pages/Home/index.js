import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Header, Button, Icon, Segment } from "semantic-ui-react";

import { logOutUser } from "../../../redux/actions/authActions";
import { Link } from "react-router-dom";

const Home = ({ auth, logOutUser }) => {
  const { isAuthenticated, user } = auth;

  return (
    <Grid textAlign="center" style={{ height: "100vh", paddingTop: "1rem" }}>
      {isAuthenticated ? (
        <Grid.Row columns="equal">
          <Grid.Column>
            <Header as="h2">
              <>Welcome {user.userName}</>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Button
              onClick={logOutUser}
              color="twitter"
              animated="fade"
              size="large"
            >
              <Button.Content visible>Log Out</Button.Content>
              <Button.Content hidden>
                <Icon name="sign out"></Icon>
              </Button.Content>
            </Button>
          </Grid.Column>
        </Grid.Row>
      ) : (
        <Grid.Row textAlign="right">
          <Grid.Column>
            <Button.Group size="large" style={{ paddingRight: "1rem" }}>
              <Button color="green" animated as={Link} to="/login">
                <Button.Content visible>Log In</Button.Content>
                <Button.Content hidden>
                  <Icon name="sign in"></Icon>
                </Button.Content>
              </Button>
              <Button.Or />
              <Button color="violet" animated as={Link} to="/signup">
                <Button.Content visible>Sign Up</Button.Content>
                <Button.Content hidden>
                  <Icon name="user plus"></Icon>
                </Button.Content>
              </Button>
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
      )}
      <Grid.Row verticalAlign="top">
        <Grid.Column>
          <Segment vertical>
            <Header size="huge">
              Get Started by Cloning the template repository from{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/sharmayash/MERN-graphql-Aws-ec2-boilerplate.git"
              >
                Github
              </a>
            </Header>
          </Segment>
          <Segment vertical>OR</Segment>
          <Segment vertical>
            <Header size="huge">
              Go To the <Link to="/books">Books App</Link>
            </Header>
          </Segment>
        </Grid.Column>
      </Grid.Row>
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
