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

const jsx = (
  <Provider store={store}>
    <AppRouter></AppRouter>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
