import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      !isAuthenticated ? (
        <div>
          <Component {...props}></Component>
        </div>
      ) : (
        <Redirect to="/dashboard" />
      )
    }
  ></Route>
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);

// 1. Create PublicRoute (copy PrivateRoute)
// 2. Redirect to /dashboard if logged in
// 3. Render component if not logged in
// 4. Use it for the LoginPage
