let students = []; 

  

students.push("Aman"); 

students.push("Rohit"); 

students.push("Priya"); 

  
console.log(students);   

// Output: ["Aman", "Rohit", "Priya"] 




let colors = ["Red", "Green"]; 

colors.push("Blue", "Yellow", "Pink"); 

console.log(colors); 

// Output: ["Red", "Green", "Blue", "Yellow", "Pink"]


let stack = []; 

  

stack.push(10); 

stack.push(20); 

stack.push(30); 

  

console.log(stack);   

// Output: [10, 20, 30] 


// Real-time Chat Applications me Message Store Karna 
let messages = []; 

  

function sendMessage(msg) { 

    messages.push(msg); 

    console.log("New message:", msg); 

} 

  

sendMessage("Hello!");   

sendMessage("How are you?");   

  

console.log(messages); 

// Output: ["Hello!", "How are you?"] 





// POP() METHOD IN ARRAY 


let message = ["Hi!", "How are you?", "Let's meet up!"]; 

  

message.pop(); 

  

console.log(message); 

// Output: ["Hi!", "How are you?"] 


let cart = ["Laptop", "Phone", "Headphones"]; 

  

cart.pop();   

  

console.log(cart); 

// Output: ["Laptop", "Phone"] 