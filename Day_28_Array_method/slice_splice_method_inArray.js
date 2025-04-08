// slice(start, end) ek naya array return karta hai bina original array ko badle.
//  End index include nahi hota. 

let fruits = ["Apple", "Mango", "Banana", "Grapes"]; 
 

let newFruits = fruits.slice(1, 3); 

 
console.log(newFruits);   
// Output: ["Mango", "Banana"] 

// slice() original array ko modify nahi karta.



// Agar hume last ke kuch elements extract karne hain, toh negative index ka use kar sakte hain. 

let numbers = [10, 20, 30, 40, 50]; 

// Last ke 3 elements chahiye 

let lastThree = numbers.slice(-3); 

console.log(lastThree);   

// Output: [30, 40, 50] 



// Agar hume poora array ka copy chahiye bina = operator use kiye (kyunki = sirf reference copy karta hai, new array nahi banata), toh slice() ka use kar sakte hain. 

let originalArray = ["A", "B", "C", "D"]; 

let copyArray = originalArray.slice();

copyArray.push("E");   

  

console.log(originalArray); // Output: ["A", "B", "C", "D"] (unchanged) 

console.log(copyArray);    // Output: ["A", "B", "C", "D", "E"] 

// Note: Yeh ek shallow copy hai, yani agar array ke andar objects hain, toh original object modify ho sakta hai. 



// Jaise hume sirf middle ke elements nikalne hain. 

let alphabets = ["A", "B", "C", "D", "E", "F", "G"]; 

let middle = alphabets.slice(2, 5); 

console.log(middle);   

// Output: ["C", "D", "E"] 




// React aur functional programming me hum arrays ko mutate nahi karte, toh slice() immutability maintain karne ke liye useful hota hai. 

let tasks = ["Task1", "Task2", "Task3", "Task4"]; 

let updatedTasks = tasks.slice(0, 2).concat(tasks.slice(3));   

  

console.log(updatedTasks);   

// Output: ["Task1", "Task2", "Task4"] 



        // 6. splice() - Array me element add ya delete karna 

// splice(start, deleteCount, item1, item2, ...) original array ko modify karta hai. 


let fruits = ["Apple", "Mango", "Banana"]; 

 
fruits.splice(1, 1, "Grapes"); 

console.log(fruits);  

// Output: ["Apple", "Grapes", "Banana"] 



// Jab user kisi cart se item delete kare toh splice() use hota hai. 


let cart = ["Laptop", "Mouse", "Keyboard", "Headphones"]; 

  

// "Mouse" ko remove karna hai (index 1) 

cart.splice(1, 1); 
console.log(cart); 

// Output: ["Laptop", "Keyboard", "Headphones"] 




// Todo List me Task Remove Karna 

// Agar koi task complete ho jaye toh usko list se remove karna hota hai. 

let tasks = ["Buy groceries", "Pay bills", "Walk the dog"]; 

  

// "Pay bills" ko remove karna hai (index 1) 

tasks.splice(1, 1); 

  

console.log(tasks); 

// Output: ["Buy groceries", "Walk the dog"] 




// Playlist me Song Replace Karna 

// Agar koi user apni playlist me ek song replace karna chahta hai, toh splice() use hota hai. 

let playlist = ["Song A", "Song B", "Song C"]; 

// "Song B" ko "New Song" se replace karna hai (index 1) 

playlist.splice(1, 1, "New Song"); 
console.log(playlist); 

// Output: ["Song A", "New Song", "Song C"] 

 