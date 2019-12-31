import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy: decrementBy
});

const setCount = ({ count = 0 } = {}) => ({
  type: "SET",
  count: count
});

const resetCount = () => ({
  type: "RESET"
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: (state.count = 0)
      };

    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//Actions
//I'd like to increment the count

store.dispatch(decrementCount({ decrementBy: 1 }));

store.dispatch(incrementCount({ incrementBy: 1 }));

store.dispatch(setCount({ count: 12 }));

store.dispatch(resetCount());

// increment, decrement, reset
