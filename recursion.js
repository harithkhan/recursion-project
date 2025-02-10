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

console.log(fibs(8)); // Return [0, 1, 1, 2, 3, 5, 8, 13]