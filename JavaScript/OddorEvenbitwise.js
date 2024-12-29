
function isOddOrEven(num) {
    return (num & 1) === 0 ? 'Even' : 'Odd';
}

console.log(isOddOrEven(5));
console.log(isOddOrEven(10)); 