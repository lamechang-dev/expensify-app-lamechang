import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense } from "../actions/expenses";
import { bindActionCreators } from "redux";
import { startRemoveExpense } from "../actions/expenses";

const EditExpensePage = props => {
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          expense={props.expense}
          onSubmit={expense => {
            props.dispatch(startEditExpense(props.match.params.id, expense));
            props.history.push("/");
          }}
        ></ExpenseForm>
      </div>
      <div className="content-container">
        <button
          className="button button--secondary"
          onClick={e => {
            props.dispatch(startRemoveExpense(props.expense.id));
            props.history.push("/");
          }}
        >
          Remove Expense
        </button>
      </div>
    </div>
  );
};

// Remove expense via dispatch and then redirect to dashboard

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => {
      return expense.id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(EditExpensePage);
