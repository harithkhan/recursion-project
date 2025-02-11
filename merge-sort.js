function merge(sortedLeftArr, sortedRightArr) {
    let sortedArr = [];
    const arrLength = sortedLeftArr.length + sortedRightArr.length;
    for (let i = 0; i < arrLength; i++) {
        if (sortedLeftArr[0] < sortedRightArr[0] ||
        (sortedLeftArr[0] === sortedRightArr[0])
        ) {
        sortedArr.push(sortedLeftArr.shift());
    } else if (sortedLeftArr[0] > sortedRightArr[0]) {
        sortedArr.push(sortedRightArr.shift());
    } else if (!sortedLeftArr[0]) {
        sortedArr.push(sortedRightArr.shift());
    } else if (!sortedRightArr[0]) {
        sortedArr.push(sortedLeftArr.shift());
    }
    }
    return sortedArr;
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    let leftArr = arr.slice(0, Math.floor(arr.length / 2));
    let rightArr = arr.slice(Math.floor(arr.length / 2));
    const sortedLeftArr = mergeSort(leftArr);
    const sortedRightArr = mergeSort(rightArr);

    return merge(sortedLeftArr, sortedRightArr)
}

const test1 = [3, 2, 1, 13, 8, 5, 0, 1]; 
const test2 = [105, 79, 100, 110];

console.log(mergeSort(test1)); // Returns [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort(test2)); // Returns [79, 100, 105, 110]