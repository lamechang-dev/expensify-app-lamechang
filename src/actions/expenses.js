import uuid from "uuid";
import database from "../firebase/firebase";

//component calls action generator
// action generator returns object
// component dispatches object
// redux store exchange

// component calls action generator
// action generator returns function
// component dispatches function (?)
// function runs (has the ability to dispatch other actions and do whatever it wants)

// ADD-EXPENSE
export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense = expenseData => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

// REMOVE-EXPENSE
//　引数のidは、オブジェクトの要素の中身を意味している
// また、{ id } = {}は、デフォルトの値が空であることを意味している
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

export const startRemoveExpense = id => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database
      .ref(`users/${uid}/expenses/`)
      .child(id)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id: id }));
      });
  };
};

// EDIT-EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

export const startEditExpense = (
  id,
  { amount, createdAt, description, note }
) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const expense = { amount, createdAt, description, note };
    database
      .ref(`users/${uid}/expenses/`)
      .child(id)
      .update({
        amount: amount,
        createdAt: createdAt,
        description: description,
        note: note
      })
      .then(() => {
        dispatch(editExpense(id, expense));
      });
  };
};

// SET_EXPENSES

export const setExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses
});
export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
      .once("value")
      .then(snapshot => {
        const expenses = [];
        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};

// 1. Fetch all expense data once
// 2. Parse that data into an array
// 3. Dispatch SET_EXPENSES
