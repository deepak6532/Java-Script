// 16

let name = "Outside";

function outerFunction() {
    let name = "Inside";
    function innerFunction() {
        return name;
    }
    return innerFunction();
}

console.log(outerFunction());

// inside

// 17

const car = {
    brand: "Toyota",
    getBrand() {
        return this.brand;
    }
};

const getBrand = car.getBrand;
console.log(getBrand());

//undefined 

// 18

function listColors(color1, color2, ...otherColors) {
    return otherColors;
}

console.log(listColors("Red", "Blue", "Green", "Yellow"));


// [ 'Green', 'Yellow' ]

// 19
function displayMessage(message = "Hello") {
    return message;
}

console.log(displayMessage(undefined));
console.log(displayMessage("Hi"));


// Hello  Hi


// 20

function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const multiplyBy3 = createMultiplier(3);
console.log(multiplyBy3(5));             // 15

// 21


let value = 10;

const calculate = function(a) {
    let value = 20;
    return a + value;
};

console.log(calculate(5));   //25 
console.log(value);             // 10




// 22

function sumNumbers(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}

const numbers = [1, 2, 3];
console.log(sumNumbers(...numbers));  //6 


// 23
function displayUser(name = "Unknown", age = 18) {
    return `${name} is ${age} years old`;
}

console.log(displayUser("John", 25));   // John is 25 years old
console.log(displayUser(undefined, 30));  // Unknown is 30 years old


// 24 

let number = 100;

function outerFunc() {
    let number = 50;
    function innerFunc() {
        return number;
    }
    return innerFunc();
}

console.log(outerFunc());  // 50

//  25

const calculator = {
    add(...nums) {
        return nums.reduce((a, b) => a + b, 0);
    }
};

console.log(calculator.add(5, 10, 15)); // 30

// 26
function createAdder(x) {
    return function(y) {
        return x + y;
    };
}

const add10 = createAdder(10);
console.log(add10(5));  //15
console.log(add10(20));  //30


// 27

function displayInfo(name = "Anonymous", age = 18) {
    return `${name} is ${age} years old.`;
}

console.log(displayInfo(null, 25)); // null is 25 years old.
console.log(displayInfo(undefined, null)); // Anonymous is null years old.

// 28

function createArray(...items) {
    return items;
}

console.log(createArray(1, 2, 3, 4));   // [ 1, 2, 3, 4 ]
console.log(createArray("a", "b", "c"));   // [ 'a', 'b', 'c' ]


// 29

let a = 1;

function outer() {
    let a = 2;
    function inner() {
        return a;
    }
    return inner();
}

console.log(outer());      //2


// 30


function calculateTotal(price, tax = price * 0.05) {
    return price + tax;
}

console.log(calculateTotal(100));   // 105
console.log(calculateTotal(200, 30)); // 230 





