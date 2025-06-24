
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