export const getExpensesTotal = expenses => {
  let sum;
  if (expenses.length === 0) {
    return 0;
  } else {
    let amounts = expenses.map(expense => expense.amount);
    let sum = 0;
    amounts.forEach(amount => {
      sum = sum + amount;
    }, 0);
    return sum;
  }
};

export const getExpensesCount = expenses => {
  let count;
  if (expenses.length === 0) {
    return 0;
  } else {
    return expenses.length;
  }
};
