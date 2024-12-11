const search = (array, target) => {
  let found = false;
  let numberOfTimesFound = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] === target) {
      found = true;
      console.log(`Found at position ${i}`);
      numberOfTimesFound.push(i);
    }
  }
  if (found === false) {
    console.log("Target not in array");
  }
  return numberOfTimesFound;
}

search([1,2,3,4,5], 1); // returns found at 0
search([1,2,3,4,5], 2); // returns found at 1
search([1,2,3,4,5], 6); // returns not found
search([1,2,3,4,5], 5); // returns found at 4
search([1,1,2,3,4,5], 1); // returns found at 0 and returns found at 1
