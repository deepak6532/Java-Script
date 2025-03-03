//16 
let x = 5;
function checkScope() {
  let x = 10;
  console.log(x);
}
checkScope();
console.log(x); // 10 5 


// 17
function hoistParam(param) {
  console.log(param);
  var param = 20;
}
hoistParam(10);  //10 

// 18
let x = 1;
function outer() {
  let x = 2;
  function inner() {
    console.log(x);
  }
  inner();
}
outer();  // 2


// 19 
function testArgs(a, b, c) {
    console.log(arguments[2], arguments[1], arguments[2]);
  }
testArgs(1, 2 ,4); // 4 2 4



//  20  Variable Shadowing in Blocks

let x = 5;
{
  let x = 10;
  console.log(x);
}
console.log(x);   //10  5 


// 21
function outer() {
  let a = 1;
  function inner() {
    console.log(a);
  }
  return inner;
}
let result = outer();
result();  // 1


// 22

console.log(typeof foo);
console.log(foo)
var foo = function() {
  return 5;
};
console.log(foo)   // undefined undefined [function:foo]




// 23 Function Declaration Hoisting

function hoistFunc() {
//   console.log(foo());
    function foo() {
    return 10;
    }
    console.log(foo());
}
hoistFunc(); // 10 



// 24 
function createFunction() {
    let count = 0;
    return function() {
    return ++count;
    };
}

const increment = createFunction();
console.log(increment());
console.log(increment());  // 1 2



// 25 
let x = 10;
function checkScope() {
    let x = 20;
    console.log(x);
}
checkScope();
console.log(x); // 20 10



//26 
(function() {
    var x = 5;
})();
console.log(x);  //Error 




// 27

function outerFunction() {
    var outerVar = "I'm outer";
    return function innerFunction() {
    console.log(outerVar);
    };
}
outerFunction()(); //  I'm outer






