// 1
console.log(typeof test);
var test = function() { return 5; };  //undefined hosting



// 2

let x = 5;
function scopeTest() {
   
  console.log(x);
  var x = 10;

}
scopeTest(); // undefind :hosting 


// 3
function createIncrementer() {
    let count = 0;
    return function() {
      return ++count;
    };
  }
  
  let increment = createIncrementer();
  
  console.log(increment()); //1
  
  console.log(increment()); //2
  
  console.log(increment); //3



// 4
console.log(foo);
var foo = 10; //undefined :hosting


// 5
function blockScope() {
    let x = 10;
    if (true) {
      let x = 20;
      console.log(x);
    }
    console.log(x);
  }
  blockScope(); //20 10


// 6
function outer() {
    var outerVar = "outer";
    return function inner() {
      console.log(outerVar);
    };
  }
  var innerFunc = outer();
  innerFunc(); //outer


// 7
let a = 10;
function shadow() {
  let a = 5;                //variable shadowing 
  console.log(a);
}
shadow();
console.log(a);     //5 10



// 8

function outerFunc() {
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
  
  let counter = outerFunc();
  counter.increment(); // 1    0
  counter.decrement();

// 9

function outerFunc() {
    let x = 10;
    function innerFunc() {
      console.log(x);
    }
    return innerFunc;
  }
  let result = outerFunc();
  result();  //10
  

// 10 
function hoistingTest() {
    console.log(x);
    var x = 10;
  }
hoistingTest(); //undefined


// 11
function add(a = 5, b = a * 2) {
    return a + b;
  }
console.log(add(3)); //9
console.log(add()); //15


// 12
function createCounter() {
    let count = 0;
    return function() {
      return ++count;
    };
  }
const counte = createCounter();
console.log(counte());  //1
console.log(counte());   //2


// 13 
function testHoist() {
    console.log(foo);
    var foo = 10;
  }
testHoist(); //undefined      : hosting 


//15
function multiplierFactory(factor) {
    return function(num) {
      return num * factor;
    };
  }
let double = multiplierFactory(2);
console.log(double(4)); // factor  =2 aand num = 4  => 8
  

