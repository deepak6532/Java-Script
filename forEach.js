// Har array element par operation perform karta hai, value return nahi karta. Mostly side-effects ke liye (console log, DOM update, API call). 

// 💼 Real-world Project Use Cases: 

// Email Notifier: Har employee ko email bhejna. 

// SMS Alerts: Patient appointments ke liye SMS bhejna. 

// Data Sync: Sabhi doctors ki profile ko API se sync karna. 

// Audit Logs: Actions ko log file me likhna. 

// Medicine Reminder: Har patient ke liye reminder trigger karna. 



// Use Kam Kyun Ho Gaya Hai? 

//  Return Value Nahi Deta 

// forEach() kuch return nahi karta, sirf side-effect ke liye use hota hai. 
// But modern devs prefer functional programming — jismein functions chain karte hain aur values return hoti hain.



let fruits = ["apple","mango","orange","kiwi"]

fruits.forEach(
    (f)=>(console.log("fruit is :",f))
    )

    // fruit is : apple
    // fruit is : mango
    // fruit is : orange
    // fruit is : kiwi   


const doctors = ["Dr. Sharma", "Dr. Bose"]; 
doctors.forEach(name => { 
    // dummy API call 
    console.log(`Syncing profile for ${name}`); 
}); 


// Syncing profile for Dr. Sharma
// Syncing profile for Dr. Bose 



const reminders = [ 
    { name: "Ravi", medicine: "Paracetamol" }, 
    { name: "Tina", medicine: "Antacid" } 
  ]; 
  
  
  reminders.forEach(r => console.log(`Reminder: ${r.name}, take ${r.medicine}`));

//   Reminder: Ravi, take Paracetamol
// Reminder: Tina, take Antacid


// ✅ 5. Audit Log Writer 

const actions = ["login", "viewed report", "logout"]; 
actions.forEach(act => console.log(`Action logged: ${act}`)); 
  
// Action logged: login
// Action logged: viewed report
// Action logged: logout



// ✅ 6. EdTech – Notify Students of Assignment Due 

const students = ["Ayan", "Neha", "Tushar"]; 
students.forEach(name => console.log(`${name}, your assignment is due tomorrow!`)); 


// // Ayan, your assignment is due tomorrow!
// Neha, your assignment is due tomorrow!
// Tushar, your assignment is due tomorrow!



// ✅ 7. HR – Log Late Entries 

const entries = [ 
    { name: "Rita", late: true }, 
    { name: "Ajay", late: false }, 
    { name: "Zara", late: true } 
  ]; 
  entries.forEach(e => { 
    if (e.late) console.log(`Late entry logged for ${e.name}`); 
  }); 
  
  
//   Late entry logged for Rita
// Late entry logged for Zara



// ✅ 8. eCommerce – Log Each Order for Audit 

const orders = [ 
    { id: 1, value: 2500 }, 
    { id: 2, value: 3200 } 
  ]; 
  orders.forEach(o => console.log(`Order ${o.id} logged. Value: ₹${o.value}`));


//   Order 1 logged. Value: ₹2500
// Order 2 logged. Value: ₹3200

// ✅ 9. Hospital Admin – Mark All Rooms for Cleaning 

const rooms = [101, 102, 103]; 
rooms.forEach(r => console.log(`Room ${r} marked for cleaning`));


// Room 101 marked for cleaning
// Room 102 marked for cleaning
// Room 103 marked for cleaning


// ✅ 10. Course Tracker – Console All Enrolled Courses 

const courses = ["React", "Data Structures", "System Design"]; 
courses.forEach(c => console.log(`Course enrolled: ${c}`)); 
  


// Course enrolled: React
// Course enrolled: Data Structures
// Course enrolled: System Design
