// Introduction to Arrays
let superheros = ["supaerman", "Batman", "Joker", "Spiderman", "Wonder woman"];

console.log("Hero 1 is", superheros[0]);
console.log("Hero 5 is", superheros[4]);

superheros[2] = "Doctor Strange";
console.log(superheros);

// Add value to the end of  array
// push method
superheros.push("Deadpool");
console.log(superheros);

// remove last value from array
// pop method
superheros.pop();
console.log(superheros);

// Array iteration
for(let i = 0; i < superheros.length; i++){
    console.log("Hero: ", i+1,  superheros[i]);
};

// for Each method
superheros.forEach(function(hero){
    console.log(hero);
});

// Array Methods
console.log("Array length is", superheros.length);
console.log("value of 3 is", superheros.indexOf("Wonder woman"));
console.log("Joined Array:", superheros.join("-"));

let sclicedArray = superheros.slice(0, 1);
console.log(sclicedArray);