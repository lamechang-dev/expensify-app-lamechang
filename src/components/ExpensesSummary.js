import React from "react";
import { connect } from "react-redux";
import {
  getExpensesTotal,
  getExpensesCount
} from "../selectors/expenses-total";
import numeral from "numeral";
import expensesSelector from "../selectors/expenses";

const ExpensesSummary = (props, dispatch) => (
  <div>
    <h1>{`Viewing ${props.expensesCount} Expenses totalling ${numeral(
      props.expensesSum / 100
    ).format("$0,0.00")} `}</h1>
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
