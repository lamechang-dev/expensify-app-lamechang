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

// const notes = [
//   {
//     id: "12",
//     title: "first note!",
//     body: "this is my note"
//   },
//   {
//     id: "76lase",
//     title: "another note",
//     body: "this is my note"
//   }
// ];

// database.ref("notes").set(notes);

// database
//   .ref()
//   .set({
//     name: "Ryosuke Yoshimoto",
//     age: 26,
//     stressLevel: 6,
//     job: {
//       title: "Software Debveloper",
//       company: "Google"
//     },
//     isSingle: false,
//     location: {
//       city: "Tokyo",
//       country: "Japan"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch(e => {
//     console.log("this failed", e);
//   });

// // Change the stressLevel to a 9
// // Change job.company to Amazon
// // Change location.city to Seattle

// database
//   .ref()
//   .update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     "location/city": "Seattle"
//   })
//   .then(() => {
//     console.log("data is updated");
//   });
