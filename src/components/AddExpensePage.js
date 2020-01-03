import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense, addExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={expense => {
            // use push
            // attach then callback
            // dispatch action
            // redirect
            this.props.startAddExpense(expense);
            this.props.history.push("/");
          }}
        />
      </div>
    );
  }
}

const mapsDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapsDispatchToProps)(AddExpensePage);
