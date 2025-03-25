// 3. shift() - Array ke first element ko remove karna(QUEUE DS) 

// shift() first element ko hata deta hai aur baaki elements ko left shift kar deta hai. 

let fruits = ["Apple", "Mango", "Banana"];

fruits.shift();   

console.log(fruits);  

// Output: ["Mango", "Banana"] 



// Queue Data Structure (FIFO - First In, First Out) 


let queue = []; 

  

queue.push("Customer 1"); 

queue.push("Customer 2"); 

queue.push("Customer 3"); 

  

console.log(queue);  // Output: ["Customer 1", "Customer 2", "Customer 3"] 

queue.shift();  // First element remove hoga 

console.log(queue);  
 // Output: ["Customer 2", "Customer 3"] 



let playlist = ["Song A", "Song B", "Song C"]; 

  

playlist.shift(); 

  

console.log(playlist); 

// Output: ["Song B", "Song C"] 

let orders = ["Order #101", "Order #102", "Order #103"]; 

  

orders.shift(); 

  

console.log(orders); 

// Output: ["Order #102", "Order #103"] 





// 4. unshift() - Array ke shuru me element add karna 

// Agar hume array ke starting me element add karna ho, toh unshift() use hota hai. 

 

let fruit = ["Mango", "Banana"]; 

 
fruit.unshift("Apple"); 

 
console.log(fruit);   
// Output: ["Apple", "Mango", "Banana"] 
  

//  Recent Items List (Shopping, Browsing, Streaming) 

// Jab koi naya item add hota hai toh usko list ke top pe dikhana hota hai. 



let chatMessages = ["Hello!", "How are you?"]; 

  

chatMessages.unshift("Hey there!"); 

  

console.log(chatMessages); 

// Output: ["Hey there!", "Hello!", "How are you?"] 



let stack = []; 

stack.unshift("Page 1"); 

stack.unshift("Page 2"); 

stack.unshift("Page 3"); 

console.log(stack);   

// Output: ["Page 3", "Page 2", "Page 1"] 

stack.shift(); // Top element remove hoga 

console.log(stack); 

// Output: ["Page 2", "Page 1"] 

 