import * as firebase from "firebase";
import * as expensesActions from "../actions/expenses";
var config = {
  apiKey: "AIzaSyD4MKN_H_XV4OtDGiIZBdg5JN6JQDLgx2c",
  authDomain: "expensify-lamechang.firebaseapp.com",
  databaseURL: "https://expensify-lamechang.firebaseio.com",
  projectId: "expensify-lamechang",
  storageBucket: "expensify-lamechang.appspot.com",
  messagingSenderId: "846940401244",
  appId: "1:846940401244:web:7d2daae90a7c2a2d668099",
  measurementId: "G-CQ06VF4934"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
