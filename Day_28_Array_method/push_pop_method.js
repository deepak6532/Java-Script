// Push mehod
// 1. push() - Array ke last me element add karna

let arr = [10,20,30]

console.log(arr)   // [10,20,30]

arr.push(40)
console.log(arr)    // [10,20,30,40]


// Push mehod


let arr= ["apple","mango"]
console.log(arr)            // ["apple","mango"]

// add mutiple items
arr.push("Banana","Orange","kiwi")
console.log(arr)  // ["apple","mango","Banana","Orange","kiwi"]



// Empty Array me Data Insert Karna (Dynamic Data Handling) 

let a = []

a.push(10)
a.push(15)
a.push("Deepak")
a.push(true)

console.log(a)  // [10,15,"Deepak",true]



// Stack Data Structure Implement Karna (LIFO - Last In, First Out) 

// push() aur pop() ka combination stack (LIFO) implement karne ke liye use hota hai. 



// POP() Method -in Array

// 2. pop() - Array ke last se ek element hatana 

// Agar hume last ka element delete karna ho, toh pop() use karte hain. Yeh bhi original array ko modify karta hai. 


// pop() operation


// Last add item ko remove krna 
let arr = [10,20,30,40,]

arr.pop()
console.log(arr)  //[10,20,30]

arr.pop()
console.log(arr)    // [10,20]



let arr2  = ["apple","mango",50,"Banana",true]

console.log(arr2.pop())  // true

arr2.pop()
console.log(arr2)  //[ 'apple', 'mango', 50 ]



let arr3 = [10,20,30,40,"apple","kiwi"]

arr3.pop() //[10,20,30,40,"apple"]
arr3.pop()  //[ 10, 20, 30, 40 ]
console.log(arr3)