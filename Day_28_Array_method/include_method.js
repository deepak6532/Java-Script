// includes() - Kya ek element array me hai ya nahi? 
// Yeh true ya false return karta hai. 


let fruits = ["Apple", "Mango", "Banana"]; 
console.log(fruits.includes("Mango"));  // true 
console.log(fruits.includes("Grapes")); // false 



// includes() Kab Use Hota Hai ? 
// ✅ 1️⃣ List me koi value exist karti hai ya nahi 

let users = ["Amit", "Pooja", "Raj"];

if (users.includes("Pooja")) { 
    console.log("User found!"); 
} else { 
    console.log("User not found!"); 
} 
// Output: User found! 



// Case-Sensitive Search (Case sensitive hota hai, lowercase nahi match karega) 


let fruits = ["Apple", "Mango", "Banana"]; 
 
console.log(fruits.includes("apple")); // Output: false  (kyunki "Apple" aur "apple" alag hai)


// NaN ko detect karna (Special Case) 

let arr = [1, 2, NaN, 4]; 
 
console.log(arr.includes(NaN)); // Output: true