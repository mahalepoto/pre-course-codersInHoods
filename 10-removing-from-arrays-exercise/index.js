/**
 * create an array "carBrands"
 * and assign to it ["Mercedes", "Volvo", "BMW", "Reno", "Vauxhall"]
 */
const carBrands = ["Mercedes", "Volvo", "BMW", "Reno", "Vauxhall"];

/**
 * Exercise 1
 *
 * remove the last element from the carBrands array
 *
 * * PS: console.log() the result to see the difference
 */
let lastRemovedCarBrand = carBrands.pop();

/**
 * Exercise 2
 *
 * remove the first element from the carBrands array
 *
 * * PS: console.log() the result to see the difference
 */
let firstRemovedCarBrand = carBrands.shift();

/**
 * Exercise 3
 *
 * from "carBrands" remove "BMW"
 *
 * * PS: console.log() the result to see the difference
 */
let removeBmw = carBrands.splice(2,1);

/**
 * Exercise 4
 *
 * in "carBrands" replace Citroen with Rolls-Royce
 *
 * * PS: console.log() the result to see the difference
 */
let addElement = carBrands.splice(3, 0, 'Rolls-Royce');