// 41
function multiplierFactory(factor) {
return function(num) {
    return num * factor;
};
}
let double = multiplierFactory(2);
console.log(double(5));   //10


// 42

let x = 10;
function outerFunc() {
console.log(x);
}
function test() {
let x = 20;
outerFunc(); //10
}
test();

// 43

console.log(a);
let a = 10;


// Question: What is the output and why? Explain the concept of the "Temporal Dead Zone."

// Answer : Error 'Cannot access 'a' before initialization' known as temporal Dead Zone :if you access variable declare in let and const and return error temporal dead zone





// 44

function outer() {
console.log(a);
var a = 10;
function inner() {
    console.log(a);
    var a = 20;
}
inner(); //undefined 
}
outer();  //undefined 

// Question: What will be printed and why? Discuss how hoisting affects variables in nested functions.


// Answer: undefined undefined : hoisting affect the variable in nested function by moving the variable declaration to the top of the function scope  
  