import getExpensesTotal from "../selectors/expenses-total";

const expenses = [
  { id: 1, description: "Gum", note: "", amount: 195, createdAt: 0 },
  { id: 2, description: "Gum", note: "", amount: 195, createdAt: 0 },
  { id: 3, description: "Gum", note: "", amount: 195, createdAt: 0 }
];

const total = getExpensesTotal(expenses);
console.log(total);
