const sort = (array) => {
    for (i = 0; i < array.length; i++) {
        let swapped = false;
        for (j = 0; j < (array.length - i - 1); j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
        if (!swapped) {
            break;
        }
    }

    return array;
}

console.log(sort([1, 2, 3, 5, 4]));
console.log(sort([5, 4, 3, 2, 1]));
console.log(sort([1, 5, 2, 8, 3, 10, 9, 6, 7, 4]));
