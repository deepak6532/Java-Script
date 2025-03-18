// 46
function showDetails(id, ...details) {
    return details;
}

console.log(showDetails(101, "Alice", "Developer", "NYC"));  // [ 'Alice', 'Developer', 'NYC' ]



// 47

function calculateDiscount(price, discount = 10) {
    return price - (price * discount) / 100;
}

console.log(calculateDiscount(100));   //    100 - (1000) /100 => 90 
console.log(calculateDiscount(200, 20));    //  200 - (4000) / 100 => 160



// 48

function secretHolder(secret) {
    return function() {
        return secret;
    };
}

const revealSecret = secretHolder("My Secret");   //My Secret
console.log(revealSecret());


// 49
var globalVar = "I am global";

function outerFunction() {
    var localVar = "I am local";
    return function innerFunction() {
        return globalVar + " and " + localVar;
    };
}

console.log(outerFunction()());   //I am global and I am local 


// 50
const divide = function(a = 10, b = 2) {
    return a / b;
};

console.log(divide(20, 4));    // 5
console.log(divide(15));    //7.5


// 51

const person = {
    firstName: "John",
    lastName: "Doe",
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());  //John Doe

// 52
function sumAll(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

console.log(sumAll(1, 2, 3, 4));  // 10
console.log(sumAll());              // 0

// 53

function createPowerFunction(power) {
    return function(base) {
        return Math.pow(base, power);
    };
}

const square = createPowerFunction(2);
console.log(square(5)); //25


//54


function displayScore(score = 100) {
    return score || 0;
}

console.log(displayScore(0));    // 0 
console.log(displayScore(80));   // 80

// 55
function mixAndMatch(...args) {
    return args.join("-");
}

console.log(mixAndMatch(1, "apple", true));    // 1-apple-true


                                      









