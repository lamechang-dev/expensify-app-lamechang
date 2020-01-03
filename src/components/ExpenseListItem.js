// Export a stateless functional component
// description, amount, createdAt
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
  <div>
    <Link to={`/edit/${id}`}>{description}</Link>
    <p>
      {"$" + amount / 100} - {moment(createdAt).format("MMM Do, YYYY")}
    </p>
  </div>
);

export default connect()(ExpenseListItem);
