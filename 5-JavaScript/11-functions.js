//Functions - Set of instructions

function greet(){
    console.log("Instruction #1");
    console.log("Instruction #2");
    console.log("Instruction #3");
    console.log("Merry Christmas!");
};

greet(); //calling the function

//Function Hoisting
// 1.Function declaration
function functionDeclaration (){
    console.log("Hello wordl! I am a function declaration");
};
functionDeclaration()


// 2. Function Expression 
const functionExpression = function(){
    console.log("Hello universe I am a Function expresssion");
};
functionExpression();



// Function with parameters
function greetByName(name){// variable - parameter / argument - value
    console.log("Hello", name);
};
greetByName("Gab");
greetByName("Ahmad");



// Functions with a return value
function sum(a, b){
    a = a + 1;
    return a + b;
};
console.log("sum:", sum(10, 5));




// Anonymous Function
let greet2 = function (){
    console.log("Hello");
};
greet2();




// Higher-ordeer function
function calculate(operation, num1, num2){
    return operation(num1, num2)
}

// CallBack function 
function add(a, b){
    return a + b;
};

function substract(a, b){
    return a - b;
}

let total = calculate(add, 10, 5);
let difference = calculate(substract, 23, 13);

console.log("Result of addition:", total);
console.log("Result of substraction:", difference);