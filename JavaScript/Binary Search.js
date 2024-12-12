const search = (array, target) => {
    let found = false;
    let startpoint = 0;
    let endpoint = array.length - 1;


    /*console.log(startpoint);
      console.log(endpoint);
      console.log(midpoint);*/

    while (startpoint <= endpoint && found === false) {
        let midpoint = Math.floor((startpoint + endpoint) / 2);
        if (array[midpoint] === target) {
            console.log(`Found at position ${midpoint}`);
            found = true;

        } else if (array[midpoint] > target) {
            endpoint = midpoint;

        } else if (array[midpoint] < target) {
            startpoint = midpoint;
        }
    }

    if (startpoint >= endpoint && found === false) {
        console.log("Target not in array");
    }
}

search([1,2,3,4,5], 1); // returns found at 0
search([1,2,3,4,5], 2); // returns found at 1
search([1,2,3,4,5], 6); // returns not found
search([1,2,3,4,5], 5); // returns found at 4
search([1,1,2,3,4,5], 1); // returns found at 0 and returns found at 1
