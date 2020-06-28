const target = 15;
const userValue = "15";

const password = "JSisKool888";
const passwordConfirmation = "JSisCool888";

const sortOrder = "ALPHABETICAL";

// ADD YOUR CODE BELOW
let targetMatchesCoercedUserValue;
let targetMatchesUserValue;
let passwordMatchesConfirmation;
let passwordMessage;
let fruits; 

targetMatchesCoercedUserValue = target == userValue;
targetMatchesUserValue = target === userValue;
passwordMatchesConfirmation = password === passwordConfirmation;

if (passwordConfirmation !== password) {
   passwordMessage = "Oops, your password and confirmation do not match!";
    
}

if (sortOrder === 'ALPHABETICAL') {
    fruits = "banana, cherry, watermelon";
}