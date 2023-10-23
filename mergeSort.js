const mergeSort = arr => {
    // Base cases
    if (arr.length <= 0) {
        return [];
    }
    if (arr.length === 1) {
        return  arr; 
    }

    // Do merge sort for the left and right portions of the array recursively
    const left = 0;
    const right = arr.length - 1;
    const mid = (left + right) / 2; 
    const leftPortion = mergeSort(arr.slice(left, mid + 1)); 
    const rightPortion = mergeSort(arr.slice(mid + 1, right + 1));

    // Merge the left and right portions back
    let sortedArr = [];
    let i = 0;
    let j = 0;
    while (i < leftPortion.length && j < rightPortion.length) {
        if (leftPortion[i] < rightPortion[j]) {
            sortedArr.push(leftPortion[i]);
            i += 1;
        } else {
            sortedArr.push(rightPortion[j]);
            j += 1;
        }
    }
    // Copy the remaining elements from the longer portion
    for (i; i < leftPortion.length; i++) {
        sortedArr.push(leftPortion[i]);
    }
    for (j; j < rightPortion.length; j++) {
        sortedArr.push(rightPortion[j]);
    }
    return sortedArr;
};

console.log(mergeSort([3, 2, 5, 7, 1, 4, 8, 6, -1, 11]));
console.log(mergeSort([2, 3, 1]));
console.log(mergeSort([2, 3, 1, 4]));
console.log(mergeSort([0]));
console.log(mergeSort([]));