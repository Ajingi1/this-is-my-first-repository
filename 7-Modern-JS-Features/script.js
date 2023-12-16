// Arrow funtion
/* 
traditonal funtion declaration
function myFunction(){

} 

Arrow
const myFunction = () => {

}
*/
/*
arrow function is pretty common in the advance concepts and frameworks of JS.
*/
const great = () => {
    console.log("Marry Christmas!");
}
great();

// Enhanced object literals 
const person = {
    name: "Ron",
    age: 22,
    greating() {
        console.log(`My name is ${this.name}.`);
    }
}
person.greating();

// spread and rest opartors
// spread
function sum(x, y, z){
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));

// Rest 
function myFunction (firstArg, ...restOfArgs){
    console.log(firstArg);
    console.log(restOfArgs);
}
myFunction('one', 'two', 'three', 'four');

// common Js Built-in methods
// Array
// Filter

// even numbers
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
const even = numbers2.filter((number) => number % 2 == 0);
console.log(even);

// odd numbers
const odd = numbers2.filter((number) => number % 2 == 1);
console.log(odd);

// string
// split
const message = "Hello Universe!";
const words = message.split(" ")
console.log(words);

// includes
const sentence = "The quick brown fox jumpeds over the lazy dog";
const containsWord = sentence.includes("fox");
console.log(containsWord);

// Length
const sentenceLength = sentence.length;
console.log(sentenceLength);

// object
const cat ={
    name: 'Chicha',
    age: 3,
    color: ["Black", "white"]
}

// Keys
console.log(Object.keys(cat));

// values
console.log(Object.values(cat));
console.log(cat);

// Entries
console.log(Object.entries(cat));

// Math
// max and min
const maxNumber = Math.max(10, 5, 20, 30);
console.log(maxNumber);

const minNumber = Math.min(10, 5, 20, 30);
console.log(minNumber);

// Random
const randomValue = Math.random() * 10;
console.log(randomValue);
// round
console.log(Math.round(randomValue));

// floor
console.log(Math.floor(randomValue));

// ceil
console.log(Math.ceil(randomValue));

// Nested Math Methods
const randomNumber = Math.floor(Math.random() * 100)
console.log("Random number between 1 and 100:", randomNumber);


// other methods
// Date
const currentDate = new Date();
console.log(currentDate);

const Christmas = new Date(2023, 11, 25);
console.log(Christmas);

// toFixed
const price = 100.12345.toFixed(4);
console.log(price);

// toString

const num = 38;
const parsedString = num.toString();
console.log(parsedString);

