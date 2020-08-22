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

import { login } from "../../../redux/actions/authActions";

const LoginForm = ({ auth, errors, login, history }) => {
  const { isAuthenticated } = auth;
  const [state, setState] = useState({
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
    if (state.email.length === 0 || state.password.length === 0) return;

    login(state.email, state.password);
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 400 }}>
        <Header as="h2" color="blue" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            {errors.emailLogin ? (
              <Label pointing="below" color="red" basic>
                {errors.emailLogin}
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
            <Form.Field inline>
              <Form.Input
                fluid
                icon="lock"
                type="password"
                name="password"
                iconPosition="left"
                placeholder="Password"
                onChange={handleChange}
              />
              {errors.passwordLogin ? (
                <Label pointing="above" color="red" basic>
                  {errors.passwordLogin}
                </Label>
              ) : (
                ""
              )}
            </Form.Field>

            <Button onClick={handleSubmit} color="twitter" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message attached="bottom" info>
          New to us? <Link to="/signup">Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

LoginForm.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

const dispatchActions = {
  login,
};

export default connect(mapStateToProps, dispatchActions)(LoginForm);
