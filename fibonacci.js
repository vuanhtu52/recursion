const fibs = num => {
    if (num <= 0) {
        return [];
    }
    let arr = [];
    for (let i = 0; i < num; i++) {
        if (i === 0) {
            arr.push(0);
        } else if (i === 1) {
            arr.push(1);
        } else {
            arr.push(arr[i-1] + arr[i-2]);
        }
    }
    return arr;
};

// console.log(fibs(8));

const fibsRec = num => {
    if (num <= 0) {
        return [];
    }
    if (num === 1) {
        return [0];
    }
    if (num === 2) {
        return [0, 1];
    }
    let arr = fibsRec(num - 1);
    arr = arr.concat(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
};

console.log(fibsRec(9));