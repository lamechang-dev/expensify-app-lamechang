import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action abject", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

// Setup test cases
// Call editExpense( note: "New note value")
// Make an assertion

test("should setup edit expense action object", () => {
  const action = editExpense("abc123", { note: `New note value` });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "abc123",
    updates: { note: `New note value` }
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 109500,
    createdAt: 1000,
    note: "this was last months rent"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: { ...expenseData }
  });
});

test("should setup add expense action object with default values", () => {});
