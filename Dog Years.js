// Creates a variable called myAge and sets it to 20
let myAge = 20;

// Creates a variable called earlyYears and sets it to 2
let earlyYears = 2;

earlyYears *= 10.5;

// Creates a variable called laterYears and sets it 2 less than myAage
laterYears = myAge - 2;

// Multiply laterYears by 4
laterYears *= 4;

/*
console.log(earlyYears);
console.log(laterYears);
*/

// Creates a variable that combines early and later years
let myAgeInDogYears = earlyYears + laterYears;

// Saves a name as a lower case string
let myName = "Rohan".toLowerCase();

// String interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
