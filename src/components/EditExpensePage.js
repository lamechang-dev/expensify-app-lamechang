import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense } from "../actions/expenses";
import { bindActionCreators } from "redux";
import { startRemoveExpense } from "../actions/expenses";

const EditExpensePage = props => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.dispatch(editExpense(props.match.params.id, expense));
          props.history.push("/");
        }}
      ></ExpenseForm>
      <button
        onClick={e => {
          props.dispatch(startRemoveExpense(props.expense.id));
          props.history.push("/");
        }}
      >
        Remove
      </button>
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
