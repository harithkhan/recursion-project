function mergeSort(arr) {
    if (arr.length === 1) {
        console.log("Ping")
        return arr[0]
    }
    if (arr.length === 2) {
        console.log("Ping 2")
        if (arr[0] > arr[1]) {
            return [arr[1], arr[0]];
        } else return [arr[0], arr[1]];
    }
    const leftArr = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
    const rightArr = mergeSort(arr.slice(Math.floor(arr.length / 2)));

    return leftArr.concat(rightArr);
}

const test1 = [3, 2, 1, 13, 8, 5, 0, 1]; 
const test2 = [105, 79, 100, 110];

console.log(mergeSort(test1)); // Returns [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort(test2)); // Returns [79, 100, 105, 110]