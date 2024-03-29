// Export a stateless functional component
// description, amount, createdAt
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import numeral from "numeral";

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title">
        {moment(createdAt).format("MMM Do, YYYY")}
      </span>
    </div>
    <h3 className="list-item__data">
      {numeral(amount / 100).format("$0,0.00")}
    </h3>
  </Link>
);

export default connect()(ExpenseListItem);
