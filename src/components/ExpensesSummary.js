import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getExpensesTotal,
  getExpensesCount
} from "../selectors/expenses-total";
import numeral from "numeral";
import expensesSelector from "../selectors/expenses";

const ExpensesSummary = (props, dispatch) => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">
        Viewing <span>{props.expensesCount}</span> Expenses totalling{" "}
        <span>{numeral(props.expensesSum / 100).format("$0,0.00")}</span>
      </h1>
      <div className="page-header__actions">
        <Link to="/create" className="button">
          Add Expense
        </Link>
      </div>
    </div>
  </div>
);

// Viewing 2 expenses totalling $94.34
// Viewint 1 expense totalling $94.34

const mapStateToProps = state => ({
  expensesCount: getExpensesCount(
    expensesSelector(state.expenses, state.filters)
  ),
  expensesSum: getExpensesTotal(expensesSelector(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpensesSummary);
