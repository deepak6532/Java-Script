// 31
function outer() {
    let outerVar = "Outer";
    return function middle() {
        let middleVar = "Middle";
        return function inner() {
            return `${outerVar} ${middleVar}`;
        };
    };
}

console.log(outer()()());   // Outer Middle

// 32

function listNumbers(first, second = 2, ...rest) {
    return rest;
}

console.log(listNumbers(1, 3, 4, 5, 6));   // [ 4, 5, 6 ]
console.log(listNumbers(1));                // []

// 33
function createCounter(start) {
    let count = start;
    return function() {
        return ++count;
    };
}

const counter1 = createCounter(0);
const counter2 = createCounter(5);

console.log(counter1());   // 1
console.log(counter2());   // 6

// 34
const robot = {
    name: "Robo",
    greet(...messages) {
        return `${this.name}: ${messages.join(" ")}`;
    }
};

console.log(robot.greet("Hello", "World!"));     // Robo: Hello World!

// 35
function getValue(value = 10) {
    return value || 20;
}

console.log(getValue(0));   //20
console.log(getValue(25));   //25 

// 36
let globalValue = "Global";

function makeFunc() {
    let localValue = "Local";
    return function() {
        return localValue;
    };
}

const myFunc = makeFunc();
console.log(myFunc());  // Local

// 37

function countItems(...items) {
    return items.length;
}

console.log(countItems(1, 2, 3, 4));  //4
console.log(countItems("a", "b"));   //2

// 38
function createGreeter(greeting) {
    return function(name) {
        return `${greeting}, ${name}`;
    };
}

const sayHello = createGreeter("Hello");
console.log(sayHello("Alice"));     // Hello, Alice


// 39

function createSentence(subject = "Someone", verb = "does", object = "something") {
    return `${subject} ${verb} ${object}.`;
}

console.log(createSentence("The cat", "jumps", "high")); // The cat jumps high.

console.log(createSentence("The dog"));   //The dog does something.

// 40

function makeArray(...args) {
    return args;
}

console.log(makeArray(1, 2, 3, 4));     // [1, 2, 3, 4]


// 41
let count = 10;

function incrementCounter() {
    return ++count;
}

console.log(incrementCounter());   //11
console.log(incrementCounter());   // 12


// 42
function greet(name = "Guest") {
    return `Hello, ${name}`;
}

console.log(greet(undefined));   // Hello, Guest
console.log(greet("John"));     // Hello, John


// 43
function concatStrings(...strings) {
    return strings.join(",");
}

console.log(concatStrings("apple", "banana", "cherry"));
console.log(concatStrings());  //apple,banana,cherry


// 44
let message = "Global";

function outer() {
    let message = "Outer";
    function inner() {
        let message = "Inner";
        return message;
    }
    return inner();
}

console.log(outer());    // inner


// 45
const user = {
    name: "Alice",
    getName: function() {
        return this.name;
    }
};


// console.log(user.name)   // Alice
// user.name  =  "Deepak"
// console.log(user.name)   // Deepak


const getName = user.getName;
console.log(getName());   // undefined


















