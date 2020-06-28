/**
 * Exercise 1
 *
 * Create a function `greet` which takes your name as a parameter
 * and return "Hello 'your_name'!"
 */

/**
 * Exercise 2
 *
 * Create a function `loginValidation` which takes age(number)
 * and returns "Welcome!" if the age is 18+ and "Sorry, not allowed."
 * if the age is less than 18
 */

/**
 * Exercise 3
 *
 * Create a function `minNumber` which takes 2 numbers as params
 * and return the least one.
 */

/**
 * Exercise 4
 *
 * Create a function `randomNumber` which returns an integer between
 * 1 and 10, fraction should be rounded to lower integer
 */

/**
 * Exercise 5
 *
 * Create a function `getOppositeNumber` that takes a number as a param and
 * returns an opposite number
 */

 function greet(your_name) {
    return "Hello " + your_name + "!";
 }

 function loginValidation(age) {

    if (age >= 18) {
        return "Welcome!";
    } else {
        return "Sorry, not allowed.";
    }
 }

 function minNumber(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
 }

 function randomNumber() {
     return Math.floor(Math.random() *10);
 }

 function getOppositeNumber(number) {
    let n = number - number;
    return n - number;
 }