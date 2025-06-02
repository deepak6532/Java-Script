/*
✅ 5. some 

📌 Kya karta hai? 

Check karta hai ki kya koi ek bhi element condition match karta hai. Boolean return karta hai. 

💼 Real-world Project Use Cases: 

Hospital Dashboard: Kya koi patient critical hai? 

Attendance Tracker: Kya koi employee absent hai? 

Lab Monitor: Kya kisi test me "positive" result hai? 

Doctor Availability: Kya koi doctor on-call hai? 

Appointment Check: Kya kisi patient ne time miss kiya? 
=*/

 

// 1. Kya koi patient critical hai? 

const patients = [{ name: "Ravi", critical: true }, 

 { name: "Neha", critical: false }]; 
 
const isCritical = patients.some(p => p.critical);
console.log(isCritical)


// 2. Kya kisi patient ka bill pending hai? 

const bills = [{ id: 1, paid: true},  

{ id: 2, paid: false }];

let ans = bills.some(bill => !bill.paid)
console.log(ans)



// 3. Kya kisi test report me "positive" result hai? 

const reports = ["negative", "positive", "negative"];

let ans = reports.some(p => p==="positive")
console.log(ans)


// 4. Kya koi doctor abhi on-call hai? 

const doctors = [{ name: "Dr. A", onCall: false },  

{ name: "Dr. B", onCall: true }];

let result= doctors.some(r => r.onCall);

console.log(result)