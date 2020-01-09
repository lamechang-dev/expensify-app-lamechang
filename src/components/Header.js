import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <NavLink
          to="/dashboard"
          className="header__title"
          activeClassName="is-active"
          exact={true}
        >
          <h1>Expensify</h1>
        </NavLink>
        <button onClick={startLogout} className="button--link button">
          Logout
        </button>
      </div>
    </div>
  </header>
);

const mapsDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapsDispatchToProps)(Header);
