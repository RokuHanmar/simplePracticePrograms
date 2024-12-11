const search = (array, target) => {
  let found = false;
  for (i = 0; i < array.length; i++) {
    if (array[i] === target) {
      found = true;
      console.log(`Found at position ${i}`);
    }
  }
  if (found === false) {
    console.log("Target not in array");
  }
}

search([1,2,3,4,5], 1); // returns found at 0
search([1,2,3,4,5], 2);  // returns found at 1
search([1,2,3,4,5], 6);  // returns not found
search([1,2,3,4,5], 5);  // returns found at 4
search([1,1,2,3,4,5], 1);  // returns found at 0. Should also return found at 1
