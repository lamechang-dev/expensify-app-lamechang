import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";
import expensesReducers from "./reducers/expenses";
import filtersReducers from "./reducers/filters";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "./actions/filters";

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  // getState() でアプリケーションの状態ツリーを返す。
  console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: "Water Bill", amount: 4500, note: "text" }));
store.dispatch(addExpense({ description: "Gas Bill", createdAt: 1000 }));
store.dispatch(addExpense({ description: "Water bill", amount: 109500 }));

const jsx = (
  <Provider store={store}>
    <AppRouter></AppRouter>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
