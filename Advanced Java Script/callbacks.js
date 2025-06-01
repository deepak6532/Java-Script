// What is a Callback in JavaScript?
// A callback is a function that is passed as an argument to another function and is executed after the completion of that function.

// Callbacks are used to handle asynchronous operations like API calls, reading files, timers, etc.

function demo(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

demo("Alice", sayBye);




// Call Backs function use setTimeout fucntion 

// console.log("------------------------------------------------------------");


function a(name, callbacks) {
  console.log("Hello " + name);
  callbacks();
  callbacks(); // Called twice
}

function callbacks() {
  console.log("this is a call backs function ");
}

setTimeout(function () {
  console.log("This is a timeout function.");
}, 2000);                                           // 2000 milliseconds = 2 seconds

a("Deepak", callbacks);




console.log("------------------------------------------------------------");






function greet(name, callback, call) {
  callback();
  console.log("Hello " + name);
  call();
}

function sayBye() {
  console.log("Goodbye!");
}

function saycallback() {
  console.log("This is a callback function.");
}

function second_greet(firstFunction) {
  firstFunction("Alice", sayBye, saycallback);
  console.log("This is the second greet function.");
}

// Call second_greet and pass the greet function
second_greet(greet);
