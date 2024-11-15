let input = "turpentine and turtles";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'e' || input[i] === 'u') {
      resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length;j++) {
   if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
   }
  }
}


for (k = 0; k < resultArray.length; k++) {
  resultArray[k] = resultArray[k].toUpperCase();
}
let resultString = resultArray.join("")
console.log(resultString);
