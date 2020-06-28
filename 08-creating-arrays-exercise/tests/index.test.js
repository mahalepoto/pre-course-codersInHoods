/**
 * Exercise 1
 *
 * Create an array "wildAnimals" and add 'tiger', 'rabbit',
 * 'panda' and 'giraffe' into it as strings
 */


/**
 * Exercise 2
 *
 * Create an array "pets" and add 'cat', 'dog' and 'hamster'
 * into it as strings(must contains dog)
 */

/**
 * Exercise 3
 *
 * Create a variable "animals". It should include all wildAnimals
 * and all pets. Find the way to concatenate your arrays with JS
 */

/**
 * Exercise 4
 *
 * create a dogIndex variable and by using "findIndex" JS method
 * find dog index in "animals" array
 */

/**
 * Exercise 5
 *
 * create a pandaIndex variable and by using "indexOf" JS method
 * find panda index in "animals" array
 */


const wildAnimals = ['tiger', 'rabbit', 'panda', 'giraffe'];
const pets = ['cat', 'dog', 'hamster',];

let animals = wildAnimals.concat(pets);

function checkFindIndex(animalIndex){
    return animalIndex === 'dog';
}
let dogIndex = animals.findIndex(checkFindIndex);

let pandaIndex = animals.indexOf('panda');

/**
 * create a variable with name "numbers"  which will be an array
 * and contain numbers from 1 to 9(ascending) and from 9 to 1(descending)
 * (each number should be twice in this array).
 */
let numbers = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];

/**
 * Exercise 6
 *
 * Create variable "first4DigitIndex" and from "numbers"
 * find index of first instance of digit 4
 */
let first4DigitIndex = numbers.indexOf(4);

/**
 * Exercise 7
 *
 * Create variable "last4DigitIndex" and from "numbers"
 * find index of last instance of digit 4
 */

let last4DigitIndex = numbers.lastIndexOf(4);

/**
 * Exercise 8
 *
 * Create variable "hasSeven" check does "numbers"
 * contains 7
 */
let hasSeven = numbers.includes(7);

/**
 * Exercise 9
 *
 * Create variable "hasTwenty" check does "numbers"
 * contains 20
 */
let hasTwenty = numbers.includes(20);

/**
 * Exercise 10
 *
 * Create variable "moreThanFour" returns first number
 * from "numbers" that is more than 4
 */
let moreThanFour = numbers.find(function(cond){
    return cond > 4;
});

/**
 * Exercise 11
 *
 * Create variable "moreThanSevenIndex" returns first number
 * from "numbers" that are more or equal 7
 */
let moreThanSevenIndex = numbers.find(function(cond){
    return cond >= 7;
});

// Exercise 1
describe("wildAnimals", () => {
	test('"wildAnimals" should be declared', () => {
		expect(Array.isArray(wildAnimals)).toBe(true);
	});

	test('"wildAnimals" should contain at least 4 elements', () => {
		expect(wildAnimals.length > 3).toBe(true);
	});
});

// Exercise 2
describe("pets", () => {
	test('"pets" should be declared', () => {
		expect(Array.isArray(pets)).toBe(true);
	});

	test('"pets" should contain at least 3 elements', () => {
		expect(pets.length >= 3).toBe(true);
	});
});

// Exercise 3
describe("animals", () => {
	test('create a variable "animals"', () => {
		expect(Array.isArray(animals)).toBe(true);
	});

	test("animals should contain all animals from wildAnimals and pets", () => {
		expect(animals).toEqual([...wildAnimals, ...pets]);
	});
});

// Exercise 4
describe("dogIndex", () => {
	test("dogIndex should be declared", () => {
		expect(typeof dogIndex).toEqual("number");
	});

	test("dogIndex should be correct dog index", () => {
		expect(dogIndex).toEqual(5);
	});
});

// Exercise 5
describe("pandaIndex", () => {
	test("pandaIndex should be declared", () => {
		expect(typeof pandaIndex).toEqual("number");
	});

	test("pandaIndex should be correct panda index", () => {
		expect(pandaIndex).toEqual(2);
	});
});

describe("numbers", () => {
	test("numbers should be declared and be an array", () => {
		expect(Array.isArray(numbers)).toBe(true);
	});

	test("numbers should contain 18 digits", () => {
		expect(numbers.length).toBe(18);
	});
});

// Exercise 6
describe("first4DigitIndex", () => {
	test("first4DigitIndex should be declared", () => {
		expect(typeof first4DigitIndex).toEqual("number");
	});

	test("first4DigitIndex should be equal to correct index", () => {
		expect(first4DigitIndex).toEqual(3);
	});
});

// Exercise 7
describe("last4DigitIndex", () => {
	test("last4DigitIndex should be declared", () => {
		expect(typeof last4DigitIndex).toEqual("number");
	});

	test("last4DigitIndex should be equal to correct index", () => {
		expect(last4DigitIndex).toEqual(14);
	});
});

// Exercise 8
describe("hasSeven", () => {
	test("hasSeven should be declared", () => {
		expect(typeof hasSeven).toEqual("boolean");
	});

	test("hasSeven should be equal true", () => {
		expect(hasSeven).toBe(true);
	});
});

// Exercise 9
describe("hasTwenty", () => {
	test("hasTwenty should be declared", () => {
		expect(typeof hasTwenty).toEqual("boolean");
	});

	test("hasTwenty should be equal false", () => {
		expect(hasTwenty).toBe(false);
	});
});

// Exercise 10
describe("moreThanFour", () => {
	test("moreThanFour should be declared", () => {
		expect(typeof moreThanFour).toEqual("number");
	});

	test("moreThanFour return first number that is more than 4", () => {
		expect(moreThanFour).toEqual(5);
	});
});

// Exercise 11
describe("moreThanSevenIndex", () => {
	test("moreThanSevenIndex should be declared", () => {
		expect(typeof moreThanSevenIndex).toEqual("number");
	});

	test("moreThanSevenIndex return first number that is more or equal 7", () => {
		expect(moreThanSevenIndex).toEqual(7);
	});
});
