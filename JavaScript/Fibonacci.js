const fibonacci = (number) => {
    if (number === 0 || number === 1) {
        return number;
    } else {
        return (fibonacci(number - 1) + fibonacci(number - 2));
    }

}
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
