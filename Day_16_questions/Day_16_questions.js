// 29
let x = 10;
if (true) {
  let x = 20;
  console.log(x);
}
console.log(x);  // 20 10 


//30
function counter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const increment = counter();
console.log(increment());
console.log(increment()); // 1 2


//31

function testHoisting(param) {
  console.log(param);
  var param = 20;
}
testHoisting(10); //10



// 32

let a = 1;
function outer() {
  let a = 2;
  function inner() {
    console.log(a);
  }
  inner();
}
outer(); // 2


// 33

function createCounter() {
  let count = 0;
  return {
    increment: function() {
      count++;
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    }
  };
}

const counter = createCounter();
counter.increment();
counter.decrement(); //1 0 





// 34 
let a = 1;
function outerFunc() {
  let a = 2;
  return function() {
    console.log(a);
  };
}
let result = outerFunc();
result(); // 2

//35

console.log(test());
function test() {
  return 5;    //5
}



// practice

console.log("======")
console.log(i); //undefined 
for(var i=0;i<5;i++)
{
    console.log(i)
}
console.log("======")
console.log(i); //5



// 36

function createMultiplier(multiplier) {
  return function(num) {
    return num * multiplier;
  };
}

let double = createMultiplier(2);
console.log(double(4));  // 8 

// 37

var x = 10;
if (true) {
  let x = 20;
  console.log(x);
}
console.log(x);  //20 10


// 38
function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

let counter = createCounter();
console.log(counter());
console.log(counter());



// 39
console.log(typeof func); //undefined 
var func = function() {
  return 10;
};
console.log(typeof func); // function

// 40
function scopeTest() {
  console.log(x);
  var x = 10;
}
scopeTest(); //undefined :hosting






