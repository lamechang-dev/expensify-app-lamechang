// Export a stateless functional component
// description, amount, createdAt

import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
  <div>
    <Link to={`/edit/${id}`} >{description}</Link>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
);

export default connect()(ExpenseListItem);
