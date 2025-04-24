/*🔍 2. filter 

📌 Kya karta hai? 

Sirf un elements ko retain karta hai jo condition match karte hain. Returns a new filtered array. 

💼 Real-world Project Use Cases: 

Hospital Admin: Sirf admitted patients ka list dikhana. 

HR Dashboard: Active employees ko filter karna. 

Doctor Finder: Sirf specialists (like Cardiologist) ko dikhana. 

Medicine Stock: Expired medicines ko hatana. 

Lab Tests: Sirf abnormal results ko highlight karna. */


// ✅ 1. Hospital Admin → Admitted Patients Only 

const patients = [{ name: 'Ravi', admitted: true },

{ name: 'Sita', admitted: false }];
const admittedPatients = patients.filter(p => p.admitted);

console.log(admittedPatients)

// // [ { name: 'Ravi', admitted: true } ]


// ✅ 2. HRMS → Active Employees 

const employees = [{ name: 'Amit', status: 'active' },

{ name: 'Neha', status: 'inactive' }];
const activeEmployees = employees.filter(e => e.status === 'active');

console.log(activeEmployees)

// [ { name: 'Amit', status: 'active' } ]




// ✅ 3. Doctor Finder → Only Cardiologists 

const doctors = [{
    name: 'Dr. Roy',

    specialty: 'Cardiologist'
}, { name: 'Dr. Khan', specialty: 'Dermatologist' }];

const cardio = doctors.filter(d => d.specialty == "Cardiologist")

console.log(cardio)

// [ { name: 'Dr. Roy', specialty: 'Cardiologist' } ]


// ✅ 4. Pharmacy → Non-Expired Medicines 

const meds = [{ name: 'Paracetamol', expired: false },

{ name: 'Insulin', expired: true }];


const Expired = meds.filter(m => m.expired == false)

console.log(Expired)

// [ { name: 'Paracetamol', expired: false } ]


// ✅ 5. Lab Tests → Abnormal Results Only 

const results = [{ test: 'Glucose', value: 180 },

{ test: 'BP', value: 120 }];

const abnormal = results.filter(r => r.value > 140)
console.log(abnormal)

// [ { test: 'Glucose', value: 180 } ]




// ✅ 6. Feedback System → Only Negative Feedback 

const feedbacks = ['Great service', 'Doctor was rude', 'Billing issue'];
const negative = feedbacks.filter(fb => fb.toLowerCase().includes('rude') || fb.toLowerCase().includes('issaue'));

console.log(negative)

// [ 'Doctor was rude', 'Billing issue' ]


// ✅ 7. Appointment Portal → Upcoming Appointments 

const appointments = [{ time: '2025-04-01' }, { time: '2025-04-15' }];
const upcoming = appointments.filter(a => new Date(a.time) > new Date());

console.log(upcoming)

// []




const negativeWords = [

    "bad", "poor", "worst", "angry", "disappointed", "horrible", "fail"

];
const feedbacks = [

    { id: 1, user: "Ravi", feedback: "This is the worst product I have ever used." },

    { id: 2, user: "Meera", feedback: "Amazing service, I loved it!" },

    { id: 3, user: "Amit", feedback: "I am so disappointed with the delivery time." },

    { id: 4, user: "Priya", feedback: "The product is fantastic, I am happy with it." },

    { id: 5, user: "Suman", feedback: "The worst experience, I would not recommend it." }

];

const negative = feedbacks.filter(f => negativeWords.some(word => f.feedback.toLowerCase().includes(word))
);
console.log(negative)
console.log("..........................................")

const positive = feedbacks.filter(f =>
    !negativeWords.some(word => f.feedback.toLowerCase().includes(word))

);

console.log(positive)


// output

// [
// {
//     id: 1,
//     user: 'Ravi',
//     feedback: 'This is the worst product I have ever used.'
// },
// {
//     id: 3,
//     user: 'Amit',
//     feedback: 'I am so disappointed with the delivery time.'
// },
// {
//     id: 5,
//     user: 'Suman',
//     feedback: 'The worst experience, I would not recommend it.'
// }
// ]
// ..........................................
// [
// { id: 2, user: 'Meera', feedback: 'Amazing service, I loved it!' },
// {
//     id: 4,
//     user: 'Priya',
//     feedback: 'The product is fantastic, I am happy with it.'
// }
// ]






// ✅ 8. Staff Management → Filter by Department 

const staff = [{ name: 'Pooja', dept: 'ICU' },
{ name: 'Suresh', dept: 'OPD' }
];

const icuStaff = staff.filter(s => s.dept === 'ICU');

console.log(icuStaff)

// [ { name: 'Pooja', dept: 'ICU' } ]

// ✅ 9. Nurse Dashboard → Night Shift Nurses 

const nurses = [{ name: 'Anu', shift: 'night' },
{ name: 'Rani', shift: 'day' }];
const nightShift = nurses.filter(n => n.shift === 'night');

console.log(nightShift);


// [ { name: 'Anu', shift: 'night' } ]


// ✅ 10. Patient Intake → Age > 60 

const patients = [{ name: 'Karan', age: 65 },

{ name: 'Reema', age: 45 }];
const seniorCitizens = patients.filter(p => p.age > 60);

console.log(seniorCitizens)

//    [ { name: 'Karan', age: 65 } ]




// ✅ 11. Doctor CRM → Verified Profiles Only 

const profiles = [{ name: 'Dr. Bose', verified: true },

{ name: 'Dr. Das', verified: false }];
const verifiedDoctors = profiles.filter(p => p.verified);

console.log(verifiedDoctors)

// [ { name: 'Dr. Bose', verified: true } ]




// ✅ 12. HR Portal → Filter Out Resigned Staff 

const staff = [{ name: 'Dev', resigned: false },

{ name: 'Riya', resigned: true }];
const workingStaff = staff.filter(s => !s.resigned);

console.log(workingStaff)

//    [ { name: 'Dev', resigned: false } ]


// ✅ 13. Medical Records → Only High Risk Patients 

const records = [{ name: 'Ali', risk: 'high' },

{ name: 'Ravi', risk: 'low' }];
const highRisk = records.filter(r => r.risk === 'high');

console.log(highRisk)

// [ { name: 'Ali', risk: 'high' } ]


// ✅ 14. Equipment Inventory → Only Available Items 

const items = [{ name: 'ECG', available: true },

{ name: 'MRI', available: false }];
const availableItems = items.filter(i => i.available);

console.log(availableItems)

// [ { name: 'ECG', available: true } ]


// ✅ 19. Lab → Only Tests with Missing Reports 

const tests = [{ test: 'Thyroid', report: true },

{ test: 'Cholesterol', report: false }];
const missingReports = tests.filter(t => !t.report);

console.log(missingReports)

//    [ { test: 'Cholesterol', report: false } ]


// ✅ 20. Login Logs → Only Failed Attempts 

const logs = [{ user: 'admin', success: true },

{ user: 'guest', success: false }];
const failedLogins = logs.filter(log => !log.success);

console.log(failedLogins)

// [ { user: 'guest', success: false } ]




//  41.  EdTech → Subscription Reminder Calls (Upcoming Expiry) 

const users = [

    { name: 'Ravi', expiryDate: '2025-04-14' },

    { name: 'Megha', expiryDate: '2025-05-01' },

    { name: 'Kunal', expiryDate: '2025-04-11' },

];



const today = new Date();
// console.log(today)
const reminderThreshold = 3; // days before expiry 



const usersToRemind = users.filter(user => {

    const expiry = new Date(user.expiryDate);

    const diffTime = expiry - today;

    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    return diffDays <= reminderThreshold && diffDays >= 0;

});

console.log(usersToRemind)

//   []
