let input = "turpentine and turtles";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'e' || input[i] === 'u') {
      resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length;j++) {
   // console.log(vowels[j]);
   // console.log(j);
   if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
      //console.log(resultArray);
   }
  }
 // console.log(input[i]);
 // console.log(i);
}


for (k = 0; k < resultArray.length; k++) {
  resultArray[k] = resultArray[k].toUpperCase();
}
let resultString = resultArray.join("")
console.log(resultString);
