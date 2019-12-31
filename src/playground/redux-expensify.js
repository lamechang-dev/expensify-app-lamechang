import { createStore, combineReducers } from "redux";
import uuid from "uuid";
import { joinSafe } from "upath";
import { visible } from "ansi-colors";

// Actionを定義する

// ActionのDispatchがされるといつでも呼び出される。
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  // getState() でアプリケーションの状態ツリーを返す。
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 500, createdAt: -21000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 300, createdAt: -11000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter("red"));
// store.dispatch(setTextFilter(""));

// store.dispatch(sortByAmount()); //amount
store.dispatch(sortByDate()); // date
store.dispatch(sortByAmount()); // date

//store.dispatch(setStartDate(-2000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
/*
const demoState = {
  expenses: [
    {
      id: "lamechang",
      description: "lame",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

const user = {
  name: "jen",
  age: 24
};

*/
