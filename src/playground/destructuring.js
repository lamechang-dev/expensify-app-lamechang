// Object Destructuring

const person = {
  name: "andrew",
  age: 26,
  location: {
    city: "japan",
    temp: 92
  }
};

const { name: firstName = "Anonymous", age } = person;
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}.`);

const { city, temp } = person.location;
if (city && temp) {
  console.log(`It's ${temp} in ${city}.`);
}

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {}
};

const { name: publisherName = "Self-published" } = book.publisher;

console.log(`This book's publisher is ${publisherName}`);

const address = [
  "1299 S Juniper Street",
  "Philadelphia",
  "Pennsylvania",
  "19147"
];

const [street, city, state, zip] = address;

console.log(`You are in ${address[1]} ${address[2]}`);
