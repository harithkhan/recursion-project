function fibs(number) {
    
    if (number === 1) return [0];
    if (number === 2) return [0, 1];
    let fibArr = [0, 1];
    for (i = 2; i < number; i++) {
        const lastNumber = fibArr[fibArr.length -1 ];
        const secondLastNumber = fibArr[fibArr.length - 2];
        fibArr.push(lastNumber + secondLastNumber);
    }
    return fibArr
}

function fibsRec(number) {
    console.log("This was printed recursively");
    if (number === 1) return [0];
    if (number === 2) return [0, 1];
    const sequence = fibsRec(number - 1);
    const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    const newSequence = sequence.slice();
    newSequence.push(nextNumber);
    return newSequence;
}

console.log(fibs(8)); // Return [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(8)); // Return [0, 1, 1, 2, 3, 5, 8, 13]