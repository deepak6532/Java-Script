// 1
function greet(name = "Guest", message = "Welcome!") {
    return `${name}, ${message}`;
}

console.log(greet("Alice"));
console.log(greet());

// ans :
//  Alice, Welcome!
// Guest, Welcome!


// 2
function sum(...numbers) {
    return numbers.reduce((acc, curr) => sum + curr, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(5, 10));

// 6 15  : (acc is a varraiable name)

// 3
function displayInfo(firstName, lastName, age) {
    return `${firstName} ${lastName} is ${age} years old.`;
}

console.log(displayInfo("John", "Doe", 30));
console.log(displayInfo("Jane", "Smith", 25));

// John Doe is 30 years old.
// Jane Smith is 25 years old.


// 4

const person = {
    name: "Alex",
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(person.greet());

// Hello, my name is Alex



// 5
function outerFunc(outerValue) {
    return function innerFunc(innerValue) {
        return outerValue + innerValue;
    };
}

const addFive = outerFunc(5);
console.log(addFive(10));
console.log(addFive(3));


// 15  => 5+10
// 8  => 5+3


// 6

let outerVar = "I am outside";

function outer() {
    let outerVar = "I am inside";
    function inner() {
        return outerVar;
    }
    return inner();
}

console.log(outer());

// I am inside

// 7
function multiply(factor = 2, ...numbers) {
    return numbers.map(num => num * factor);
}

console.log(multiply(3, 1, 2, 3));
console.log(multiply(undefined, 4, 5));


// [ 3, 6, 9 ]
// [ 8, 10 ]


// 8
function combine(first, second, ...rest) {
    return [first, second, ...rest];
}

console.log(combine(1, 2,3, 4, 5 ));
console.log(combine("a", "b", "c"));
// [ 1, 2, 3, 4, 5 ]
// [ 'a', 'b', 'c' ]


// 9

const counter = {
    count: 0,
    increment() {
        return ++this.count;
    },
    reset() {
        return this.count = 0;
    }
};

console.log(counter.increment());   //1


console.log(counter.increment());  //2

console.log(counter.reset());    //0

console.log(counter.increment()); //1


// 10

let x = 10;

function testScope(a, b = x) {
    let x = 20;
    return a + b;
}

console.log(testScope(5));

// 15

// 11 
const joinStrings = (...strings) => strings.join(" ");

console.log(joinStrings("Hello", "World"));
console.log(joinStrings("", "is", "awesome"));

// Hello World
//  is awesome

//12
function calculateArea(length = 5, width = 10) {
    return length * width;
}

console.log(calculateArea(7));
console.log(calculateArea());
// 70 50 

// 13
function logAll(...args) {
    return args.length;
}

console.log(logAll());
console.log(logAll(1, 2, 3));
//  0 3

// 14
const multiply = function(a = 1, b = 2) {
    return a * b;
};

console.log(multiply(3, 4));
console.log(multiply(5));
// 12 10


// 15
function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}

const counter1 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());

// 1 2 3





