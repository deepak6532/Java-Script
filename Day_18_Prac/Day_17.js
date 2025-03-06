
function test() {
    console.log(a);
    var a = 10;
    console.log(a);
}
test();
function test() {
    console.log(a);
    var a = 10;
    console.log(a);
}
test();

function test() {
    console.log(a);
    var a = 10;
    console.log(a);
}
test();

function test() {
    console.log(a);
}
test();

function test() {
    console.log(a);
    var a = 10;
    console.log(a);
}
test();
function test() {
   
    var a = 10;

}
test();
function test() {
    console.log(a);

}
test();

function test() {
    console.log(a);
}
test();
var a = 10;
REGex Software
14:19
var a = -5;
function test() {
    console.log(a);
     var a;
}
test();
var a = 10;
keep
Pinned

var a  = -5
function test() {
    console.log(a);
}
test();
var a = 10;


// What happens when you try to access a function before it is declared using function expression and function declaration?
// REGex Software
// 14:36
console.log(x); 
console.log(y); 
console.log(hello()); 

var x = 5;
let y = 10;
function hello() {
    return "Hello!";
}





function createIncrement() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const increment = createIncrement();
console.log(increment());
console.log(increment());
console.log(increment());




function counter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}
let count1 = counter();
let count2 = counter();
count1();
count1();
count2();
count2();




function outer() {
    function inner() {
        console.log(x);
    }
    return inner;
}
var closeFn = outer();
closeFn();
  var x = 10;  // undefined 
