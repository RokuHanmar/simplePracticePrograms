const sort = (array) => {
    let highest = 0;
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }

    return array;
}

console.log(sort([1, 2, 3, 5, 4]));
console.log(sort([5, 4, 3, 2, 1]));
console.log(sort([1, 5, 2, 8, 3, 10, 9, 6, 7, 4]));