// A constant named kelvin stores the temp in Kelvin
const kelvin = 293;

// A var named celsius stores the temp in Celsius
let celsius = kelvin - 273;

// a var named fahrenheit stores the temp in Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// Rounds the temp in Fahrenheit down
fahrenheit = Math.floor(fahrenheit);

let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature is ${celsius} degrees Celsius`);
console.log(`The temperature is ${kelvin} degrees Kelvin`);
console.log(`The temperature is ${newton} degrees Newton`);
