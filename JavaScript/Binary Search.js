const search = (array, target) => {
  let found = false;
  let startpoint = array[0];
  let endpoint = array[array.length - 1];
  

/*  console.log(startpoint);
  console.log(endpoint);
  console.log(midpoint);*/

  while (found === false && array.length > 0) {
    let midpoint = array[Math.floor(array.length / 2)];
    if (midpoint === target) {
      console.log(`Found at position ${midpoint}`);
      found = true;
    
    } else if (midpoint > target) {
      endpoint = midpoint;
    
    } else if (midpoint < target) {
      startpoint = midpoint;
    }
  }

  if (array.length <= 0 && found === false) {
    console.log("Target not in array");
    return null;
  }
}

search([1,2,3,4,5], 1); // returns found at 0
search([1,2,3,4,5], 2); // returns found at 1
search([1,2,3,4,5], 6); // returns not found
search([1,2,3,4,5], 5); // returns found at 4
search([1,1,2,3,4,5], 1); // returns found at 0 and returns found at 1
