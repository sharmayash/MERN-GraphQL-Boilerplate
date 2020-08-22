import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Label,
} from "semantic-ui-react";

import { signup } from "../../../redux/actions/authActions";

const SignUpForm = ({ auth, errors, signup, history }) => {
  const { isAuthenticated } = auth;
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
    //eslint-disable-next-line
  }, [isAuthenticated]);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      state.name.length === 0 ||
      state.email.length === 0 ||
      state.password.length === 0
    )
      return;

    signup(state.name, state.email, state.password);
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 400 }}>
        <Header as="h2" color="blue" textAlign="center">
          Join The Incredible Community of Readers by Signing Up
        </Header>
        <Form size="large">
          <Segment stacked>
            {errors.name ? (
              <Label pointing="below" color="red" basic>
                {errors.name}
              </Label>
            ) : (
              ""
            )}
            <Form.Input
              fluid
              icon="user"
              name="name"
              iconPosition="left"
              onChange={handleChange}
              placeholder="Full Name"
            />

            {errors.email ? (
              <Label pointing="below" color="red" basic>
                {errors.email}
              </Label>
            ) : (
              ""
            )}
            <Form.Input
              fluid
              icon="user"
              name="email"
              iconPosition="left"
              onChange={handleChange}
              placeholder="E-mail address"
            />

            {errors.password ? (
              <Label pointing="below" color="red" basic>
                {errors.password}
              </Label>
            ) : (
              ""
            )}
            <Form.Input
              fluid
              icon="lock"
              type="password"
              name="password"
              iconPosition="left"
              placeholder="Password"
              onChange={handleChange}
            />

            <Button onClick={handleSubmit} color="twitter" fluid size="large">
              Sign Up
            </Button>
          </Segment>
        </Form>
        <Message attached="bottom" info>
          Already a User? <Link to="/login">Log In</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

SignUpForm.propTypes = {
  auth: PropTypes.object.isRequired,
  signup: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

const dispatchActions = {
  signup,
};

export default connect(mapStateToProps, dispatchActions)(SignUpForm);
