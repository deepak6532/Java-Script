/*🔁 1. map 

📌 Kya karta hai? 

Ek array ko transform karta hai — har element ko change karke ek naya array return karta hai.  

Original array change nahi hota. 

💼 Real-world Project Use Cases: 

Hospital Billing System: Sabhi patients ke bills me 18% GST add karna. 

HR Management: Employees ke names ko capitalize karna for reports. 

Doctor Portal: Doctor list me prefix "Dr." add karna. 

Lab Reports: Test results me units append karna (value + " mg/dL"). 

Appointment System: Time slots ko readable format me convert karna ("09:00" → "9 AM"). 
*/

let fruits = ["apple","mango","orange","kiwi","lemon"]

fruits.map(
    (f)=>console.log(`Item is: ${f}`)
    )
    
// Item is: apple
// Item is: mango
// Item is: orange
// Item is: kiwi
// Item is: lemon


// ✅ 1. Hospital Billing System: Add 18% GST 

const bills = [1000, 1500, 2000]; 
const billsWithGST = bills.map(bill => bill * 1.18);

console.log("old",bills);
console.log("new" ,billsWithGST);


// old [ 1000, 1500, 2000 ]
// new [ 1180, 1770, 2360 ]


// ✅ 2. HR Management: Capitalize Employee Names 

const employees = ['raj', 'neha', 'amit']; 

const capitalized = employees.map(name => name.charAt(0).toUpperCase() + name.slice(1)); 

console.log(capitalized)
  
// [ 'Raj', 'Neha', 'Amit' ]

// ✅ 3. Doctor Portal: Prefix "Dr." 

const doctors = ['Singh', 'Verma', 'Chatterjee']; 

const fullNames = doctors.map(name => `Dr. ${name}`);


console.log("FullName is :",fullNames);

// FullName is : [ 'Dr. Singh', 'Dr. Verma', 'Dr. Chatterjee' ]

// ✅ 4. Lab Reports: Add Units to Test Values 

const testResults = [85, 120, 140]; 
const formattedResults = testResults.map(val => `${val} mg/dL`);

console.log(formattedResults)

// [ '85 mg/dL', '120 mg/dL', '140 mg/dL' ]




// ✅ 5. Appointment System: Convert to AM/PM 

const times = ['09:00', '13:00', '18:30'];

const readableTimes = times.map(time => { 
    
  const [hour, min] = time.split(':'); 
  
  const hr = parseInt(hour); 
  const suffix = hr >= 12 ? 'PM' : 'AM'; 
  return `${hr % 12 || 12}:${min} ${suffix}`; 
}); 

console.log(times)
console.log(readableTimes)


// [ '09:00', '13:00', '18:30' ]
// [ '9:00 AM', '1:00 PM', '6:30 PM' ]

