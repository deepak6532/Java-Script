// 1. Filter all patients who are admitted currently.
const patients = [
    { id: 1, name: "Rohan", admitted: true },
    { id: 2, name: "Anjali", admitted: false },
    { id: 3, name: "Vikram", admitted: true },
    { id: 4, name: "Sita", admitted: false }
];

const result = patients.filter(p => p.admitted)

console.log(result)

//   [
//     { id: 1, name: 'Rohan', admitted: true },
//     { id: 3, name: 'Vikram', admitted: true }
//   ]


// 2. Filter doctors who are available today.
const doctors = [
    { id: 1, name: "Dr. Meena", availableToday: true },
    { id: 2, name: "Dr. Ali", availableToday: false },
    { id: 3, name: "Dr. Tara", availableToday: true },
    { id: 4, name: "Dr. Ronit", availableToday: false }
];

const availableDoctor = doctors.filter(d => d.availableToday)

console.log(availableDoctor)

//   [
//     { id: 1, name: 'Dr. Meena', availableToday: true },
//     { id: 3, name: 'Dr. Tara', availableToday: true }
//   ]


// 3. Filter patients whose age is more than 60.
const patients = [
    { id: 1, name: "Dinesh", age: 65 },
    { id: 2, name: "Sunita", age: 45 },
    { id: 3, name: "Mahesh", age: 72 },
    { id: 4, name: "Komal", age: 58 }
];

const patientAge = patients.filter(p => p.age > 60)

console.log(patientAge)


//   [
//     { id: 1, name: 'Dinesh', age: 65 },
//     { id: 3, name: 'Mahesh', age: 72 }
//   ]


// 4. Filter hospital staff who are nurses.
const staff = [
    { id: 1, name: "Pooja", role: "Nurse" },
    { id: 2, name: "Raj", role: "Doctor" },
    { id: 3, name: "Lata", role: "Nurse" },
    { id: 4, name: "Amit", role: "Receptionist" }
];

const nurse = staff.filter(f => f.role == "Nurse")
console.log(nurse)


//   [
//     { id: 1, name: 'Pooja', role: 'Nurse' },
//     { id: 3, name: 'Lata', role: 'Nurse' }
//   ]


// 5. Filter ICU patients.
const patients = [
    { id: 1, name: "Karan", ward: "ICU" },
    { id: 2, name: "Seema", ward: "General" },
    { id: 3, name: "Nitin", ward: "ICU" },
    { id: 4, name: "Suman", ward: "Private" }
];


const IcuPatient = patients.filter(p => p.ward == "ICU")

console.log(IcuPatient)


//   [
//     { id: 1, name: 'Karan', ward: 'ICU' },
//     { id: 3, name: 'Nitin', ward: 'ICU' }
//   ]

// 6. Filter doctors who have more than 5 years of experience.
const doctors = [
    { id: 1, name: "Dr. Renu", experience: 10 },
    { id: 2, name: "Dr. Sameer", experience: 3 },
    { id: 3, name: "Dr. Alok", experience: 8 },
    { id: 4, name: "Dr. Namrata", experience: 5 }
];

const seniordr = doctors.filter(f => f.experience >= 5)
console.log(seniordr)

//   [
//     { id: 1, name: 'Dr. Renu', experience: 10 },
//     { id: 3, name: 'Dr. Alok', experience: 8 },
//     { id: 4, name: 'Dr. Namrata', experience: 5 }
//   ]


// 7. Filter patients with pending bills.
const patients = [
    { id: 1, name: "Aarti", pendingBill: true },
    { id: 2, name: "Rakesh", pendingBill: false },
    { id: 3, name: "Deepak", pendingBill: true },
    { id: 4, name: "Kavita", pendingBill: false }
];


const pendingbill = patients.filter(p => p.pendingBill)
console.log(pendingbill)


//   [
//     { id: 1, name: 'Aarti', pendingBill: true },
//     { id: 3, name: 'Deepak', pendingBill: true }
//   ]


// 8. Filter hospital equipment that needs maintenance.
const equipment = [
    { id: 1, name: "ECG Machine", needsMaintenance: true },
    { id: 2, name: "Ventilator", needsMaintenance: false },
    { id: 3, name: "Suction Pump", needsMaintenance: true },
    { id: 4, name: "Ultrasound", needsMaintenance: false }
];


const need_main = equipment.filter(h => h.needsMaintenance)

console.log(need_main)


//   [
//     { id: 1, name: 'ECG Machine', needsMaintenance: true },
//     { id: 3, name: 'Suction Pump', needsMaintenance: true }
//   ]



// 9. Filter ambulance drivers who are on duty.
const drivers = [
    { id: 1, name: "Suraj", onDuty: true },
    { id: 2, name: "Harish", onDuty: false },
    { id: 3, name: "Neeraj", onDuty: true },
    { id: 4, name: "Aakash", onDuty: false }
];


const onduty = drivers.filter(d => d.onDuty)

console.log(onduty)


//   [
//     { id: 1, name: 'Suraj', onDuty: true },
//     { id: 3, name: 'Neeraj', onDuty: true }
//   ]


// 10. Filter medicines that are out of stock.
const medicines = [
    { id: 1, name: "Paracetamol", inStock: false },
    { id: 2, name: "Amoxicillin", inStock: true },
    { id: 3, name: "Ibuprofen", inStock: false },
    { id: 4, name: "Metformin", inStock: true }
];


const checkStock = medicines.filter(stock => stock.inStock)
console.log(checkStock)


//   [
//     { id: 2, name: 'Amoxicillin', inStock: true },
//     { id: 4, name: 'Metformin', inStock: true }
//   ]



// 11. Filter employees who are currently on leave.
const employees = [
    { id: 1, name: "Ravi", onLeave: false },
    { id: 2, name: "Priya", onLeave: true },
    { id: 3, name: "Arjun", onLeave: true },
    { id: 4, name: "Neha", onLeave: false }
];

const leaveEmployee = employees.filter(emp => emp.onLeave)

console.log(leaveEmployee)


//   [
//     { id: 2, name: 'Priya', onLeave: true },
//     { id: 3, name: 'Arjun', onLeave: true }
//   ]

// 12. Filter employees with pending performance reviews.

const employees = [
    { id: 1, name: "Rahul", reviewPending: true },
    { id: 2, name: "Sneha", reviewPending: false },
    { id: 3, name: "Imran", reviewPending: true },
    { id: 4, name: "Ritu", reviewPending: false }
];


const pendingReview = employees.filter(review => review.reviewPending)

console.log(pendingReview)


//   [
//     { id: 1, name: 'Rahul', reviewPending: true },
//     { id: 3, name: 'Imran', reviewPending: true }
//   ]



// 13. Filter employees who joined in the current financial year.


const employees = [
    { id: 1, name: "Meera", joiningYear: 2023 },
    { id: 2, name: "Aakash", joiningYear: 2022 },
    { id: 3, name: "Suman", joiningYear: 2025 },
    { id: 4, name: "Nikhil", joiningYear: 2021 }
];

const currentDate = (new Date()).getFullYear();

console.log(currentDate)

//   ....


// 14. Filter employees with designation as "Software Engineer".


const employees = [
    { id: 1, name: "Tanvi", designation: "Software Engineer" },
    { id: 2, name: "Rakesh", designation: "HR Manager" },
    { id: 3, name: "Leena", designation: "Software Engineer" },
    { id: 4, name: "Abhishek", designation: "QA Analyst" }
];


const SE = employees.filter(emp => emp.designation === "Software Engineer");

console.log(SE);


//   [
//     { id: 1, name: 'Tanvi', designation: 'Software Engineer' },
//     { id: 3, name: 'Leena', designation: 'Software Engineer' }
//   ]


// 15. Filter employees whose salary is above ₹80,000.

const employees = [

    { id: 1, name: "Aditya", salary: 75000 },
    { id: 2, name: "Kiran", salary: 90000 },
    { id: 3, name: "Divya", salary: 82000 },
    { id: 4, name: "Manav", salary: 70000 }
];

const result = employees.filter(emp => emp.salary > 80000)

console.log(result)


//   [
//     { id: 2, name: 'Kiran', salary: 90000 },
//     { id: 3, name: 'Divya', salary: 82000 }
//   ]



// 16. Filter doctors who specialize in cardiology.


const doctors = [
    { id: 1, name: "Dr. Asha", specialty: "Cardiology" },
    { id: 2, name: "Dr. Vivek", specialty: "Dermatology" },
    { id: 3, name: "Dr. Neha", specialty: "Cardiology" },
    { id: 4, name: "Dr. Ravi", specialty: "Neurology" }
  ];
  
  
  const Cardio = doctors.filter(dr => dr.specialty==="Cardiology")
  
  console.log(Cardio)


//   [
//     { id: 1, name: 'Dr. Asha', specialty: 'Cardiology' },
//     { id: 3, name: 'Dr. Neha', specialty: 'Cardiology' }
//   ]

// 19. Filter doctors with more than 1000 consultations.


const doctors = [
    { id: 1, name: "Dr. Arya", consultations: 1200 },
    { id: 2, name: "Dr. Vikas", consultations: 850 },
    { id: 3, name: "Dr. Sneha", consultations: 1300 },
    { id: 4, name: "Dr. Raj", consultations: 700 }
  ];
  
  
  const doctor = doctors.filter(dr =>dr.consultations >= 1000);
  console.log(doctor)

  
//   [
//     { id: 1, name: 'Dr. Arya', consultations: 1200 },
//     { id: 3, name: 'Dr. Sneha', consultations: 1300 }
//   ]


// 21. Filter products priced below ₹500.

const products = [
    { id: 1, name: "Pen", price: 50 },
    { id: 2, name: "Notebook", price: 250 },
    { id: 3, name: "Power Bank", price: 999 },
    { id: 4, name: "USB Cable", price: 300 }
  ];
  
  
  const belowprice  = products.filter(p => p.price < 500);
  console.log(belowprice);

  
//   [
//     { id: 1, name: 'Pen', price: 50 },
//     { id: 2, name: 'Notebook', price: 250 },
//     { id: 4, name: 'USB Cable', price: 300 }
//   ]
  


// 22. Filter items with discount greater than 20%.


const items = [
    { id: 1, name: "Shirt", discount: 25 },
    { id: 2, name: "Jeans", discount: 15 },
    { id: 3, name: "Shoes", discount: 30 },
    { id: 4, name: "Cap", discount: 10 }
  ];
  
  
  const discount = items.filter(ds  => ds.discount >20);
  console.log(discount)

  
//   [
//     { id: 1, name: 'Shirt', discount: 25 },
//     { id: 3, name: 'Shoes', discount: 30 }
//   ]









