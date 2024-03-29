import React, { Component } from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Expensify</h1>
          <p>It's time to get your expenses under control.</p>
          <button
            className="box-layout__button button"
            onClick={this.props.startLogin}
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
