import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "../components/pages/Home";
import LoginForm from "../components/pages/LogIn";
import SignUpForm from "../components/pages/SignUp";
import Books from "../components/pages/Books";
import AllBooks from "../components/pages/AllBooks";

import PrivateRoute from "../helpers/PrivateRoute";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />
          <PrivateRoute path="/books" component={Books} />
          <PrivateRoute path="/allbooks" component={AllBooks} />
        </Switch>
      </BrowserRouter>
    );
  }
}
