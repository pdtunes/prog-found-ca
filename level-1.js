/* Level 1
Question 1
Declare and initialise a variable with a string value. */

var food = "Meat";

/* Question 2
Create an object variable called person and give it two properties (a key and a value) of your choice. */

var person = {
  name: "Peder",
  haircolor: "brown"
};

/* Question 3
Create a variable called outOfStock and assign it a boolean value.
Create an if else statement that checks the value of outOfStock.
If it is true, console log "Out of stock". Otherwise log "In stock". */

var outOfStock = true;

if ((outOfStock = true)) {
  console.log("Out of Stock");
} else {
  console.log("In Stock");
}

/* Question 4
Create an array of five numbers.
Loop through the array and console log each value. */

var numbers = [1, 2, 3, 4, 5];
for (i = 1; i <= numbers.length; i++) {
  console.log(i);
}

/* Question 5
Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop. */
for (i = 15; i <= 25; i++) {
  console.log(i);
}

/* Question 6
Using the same loop from the above question, only log the value of the counter variable if it is equal to 20. */
for (i = 15; i <= 25; i++) {
  if (i == 20) console.log(i);
}

/* Question 7
Create an array of two objects. Each object must have the same three properties (with different values):
one property with a string value
one property with a number value
one property with a boolean value
Loop through the array and console log the number value and the boolean value. */

var player1 = {
  name: "Alan Shearer",
  number: 9,
  active: false
};

var player2 = {
  name: "Juan Mata",
  number: 8,
  active: true
};

var players = [player1, player2];

for (var i = 0; i < players.length; i++) {
  console.log(players[i].number);
  console.log(players[i].active);
}

/* Question 8
Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.
Inside the function, log the string "I don't like " together with the argument.
Call the function and pass in a value of your choice.
Example:
If you pass in the value "giraffes", the function should log: "I don't like giraffes". */
function whatIDontLike(dontLike) {
  var text = "I don't like ";
  console.log(text + dontLike);
}

whatIDontLike("mondays");

/* Question 9
Create a function that accepts two arguments.
Inside the function, subtract the second argument from the first and console log the result. */

function math(number1, number2) {
  console.log(number1 - number2);
}

math(8, 2);

/* Question 10
Create an empty array.
Create a function that accepts one argument.
Inside the function, add the argument to the array.
Call the function and pass in a value of any type. */

var sports = [];
function sportType(type) {
  sports.push(type);
}

sportType("football");

console.log(sports);
