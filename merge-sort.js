function mergeSort(arr) {
    const leftArr = arr.slice(0, Math.floor(arr.length / 2));
    const rightArr = arr.slice(Math.floor(arr.length / 2));
    console.log(leftArr, rightArr);
}

const test1 = [3, 2, 1, 13, 8, 5, 0, 1]; 
const test2 = [105, 79, 100, 110];

console.log(mergeSort(test1)); // Returns [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort(test2)); // Returns [79, 100, 105, 110]