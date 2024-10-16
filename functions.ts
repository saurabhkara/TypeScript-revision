//Regular function

function addition(a: number, b: number): number {
    return a + b;
}

console.log(addition(3, 4));

//Function expression

const substraction = function (a: number, b: number): number {
    return a - b
}

console.log(substraction(8, 5))

//Arrow function
const multiply = (a: number, b: number): number => a * b;

console.log(multiply(5, 4));

// another way to defining the type of function

type TOperation = (a: number, b: number) => number

const anotherArrow: TOperation = (a, b) => a + b;
console.log(anotherArrow(5, 4))



