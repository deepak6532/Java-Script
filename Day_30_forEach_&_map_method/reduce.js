/*
📉 3. reduce 

📌 Kya karta hai? 

Array ke sabhi elements ko mila kar ek single value return karta hai (sum, total, object, string etc.). 

💼 Real-world Project Use Cases: 

Hospital Billing: Total cost of all patient bills. 

HR Payroll: Total monthly payout to employees. 

Patient Tracker: Total critical patients across departments. 

Inventory: Total number of medicines in stock. 

Doctor Feedback: Average rating calculate karna. 

 
*/

// ✅ 1. Sum of Numbers 

const numbers = [1, 2, 3, 4, 5]; 
const sum = numbers.reduce((acc, num) => acc + num, 0);  //15


// ✅ 2. Factorial (5!) 

const nums = [1, 2, 3, 4, 5]

let ans = nums.reduce((fact,acc)=> fact*acc,1)  //120
console.log(ans)


// ✅ 3. Max Number 

const values = [10, 45, 23, 89];

let max = values.reduce((max,acc)=>acc > max ? acc :max)
console.log(max )

 

// ✅ 5. Concatenate Words 

const words = ["Welcome", "to", "our", "platform"];

let ans = words.reduce((word,acc) => word + " " +acc)
console.log(ans )    //"Welcome to our platform"


// ✅ 6. Count Character Occurrences 

const chars = ['a', 'b', 'a', 'c', 'b']; 
const frequency = chars.reduce((acc, ch) => { 
  acc[ch] = (acc[ch] || 0) + 1; 
  return acc; 
}, {});      // { a: 2, b: 2, c: 1 }

