
function isEvenOrOdd(number) {
    return (number & 1) === 0 ? 'Even' : 'Odd';
}

const square = n => n * n;
console.log(square(2)); 

//type2=>multiple parameter

const add = (a, b) => a + b;
console.log(add(1, 2)); 

//type3 =>without parameter

const greet = () => "Hello, World!";
console.log(greet()); 

//type4=>with return type

const multiply = (a, b) => {
    const result = a * b;
    return result;
};
console.log(multiply(1, 5));

//Rest operator
function rest(...a)
{
    return (a)
}
console.log(rest([1,2,3]))
console.log(rest([1,2,3,4,5]))

//Callback function
function callback(a,b)
{
    return a+b;
}
function callback2(callback,a,b)
{
    return callback(a,b);
}
console.log(callback2(callback,1,2));
