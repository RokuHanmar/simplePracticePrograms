fizzBuzz = (i) => {

	if (i % 3 === 0 && i % 5 === 0) {
		return("FizzBuzz");
	} else if (i % 3 === 0) {
		return("Fizz");
	} else if (i % 5 === 0) {
		return("Buzz");
	} else {
		return(i);
	}
}
console.log(fizzBuzz(1)); // 1
console.log(fizzBuzz(3)); // Fizz
console.log(fizzBuzz(50)); // Buzz
console.log(fizzBuzz(150)); // FizzBuzz
