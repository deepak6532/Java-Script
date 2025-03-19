// 56
let greeting = "Hello";

function greetUser() {
    return function(name) {
        return `${greeting}, ${name}`;
    };
}

const greet = greetUser();
console.log(greet("Alice")); //   Hello, Alice

//57

let x = 5;

function testScope() {
    let x = 10;
    return x;
}

console.log(testScope());  //10 
console.log(x); // 5

//58
const restaurant = {
    name: "Pizza Place",
    order(...items) {
        return `Ordered: ${items.join(", ")}`;
    }
};

console.log(restaurant.order("Pizza", "Pasta"));  // Ordered: Pizza, Pasta


// 59
function welcomeMessage(name = "Guest") {
    return `Welcome, ${name}!`;
}

console.log(welcomeMessage()); //Welcome, Guest!
console.log(welcomeMessage("John"));   //Welcome, John!

// 60

function createCounter(start = 0) {
    let count = start;
    return function() {
        return ++count;
    };
}

const counter = createCounter(5);
console.log(counter());  // 6
console.log(counter()); // 7


// 61

function findMax(...numbers) {
    return Math.max(...numbers);
}

console.log(findMax(10, 20, 30, 40)); //40
console.log(findMax());
// -Infinity


// 62
function createUser(name, age) {
    return {
        name,
        age
    };
}

const user = createUser("Alice", 25);
console.log(user); //{ name: 'Alice', age: 25 }

// 63
function calculateTotal(price, tax = price * 0.1) {
    return price + tax;
}

console.log(calculateTotal(100));   // 110
console.log(calculateTotal(200, 30)); //230

// 64
function outer() {
    let outerVar = "Outer";

    function inner() {
        let innerVar = "Inner";
        return outerVar + " " + innerVar;
    }

    return inner();
}

console.log(outer());
// Outer Inner


// 65
function countArgs(...args) {
    return args.length;
}

console.log(countArgs(1, 2, 3));   // 3  
console.log(countArgs("a", "b", "c", "d"));   // 4

// 66


const userProfile = {
    name: "John",
    greet(greeting = "Hi") {
        return `${greeting}, ${this.name}`;
    }
};

console.log(userProfile.greet());
console.log(userProfile.greet("Hello"));
// Hi, John
// Hello, John


// 67

function sortNumbers(...numbers) {
    return numbers.sort((a, b) => a - b);
}

console.log(sortNumbers(10, 5, 2, 8));

// [2, 5, 8, 10]

// 68
function bankAccount(initialBalance) {
    let balance = initialBalance;
    return function() {
        return balance;
    };
}

const account = bankAccount(1000);
console.log(account()); //1000

// 69
function processPayment(amount, fee = 2, discount = 0) {
    return amount + fee - discount;
}

console.log(processPayment(100, undefined, 10)); // 92
console.log(processPayment(200, 5)); //205


// 70

function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5));  //10










