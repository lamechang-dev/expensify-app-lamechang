import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense, addExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            type="Add"
            onSubmit={expense => {
              this.props.startAddExpense(expense);
              this.props.history.push("/dashboard");
            }}
          />
        </div>
      </div>
    );
  }
}

const mapsDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapsDispatchToProps)(AddExpensePage);
