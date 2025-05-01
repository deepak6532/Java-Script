// 1. Calculate total cart value from an array of items with price and quantity.
const cartItems = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 700, quantity: 2 },
    { name: "Keyboard", price: 1500, quantity: 1 },
    { name: "Monitor", price: 12000, quantity: 1 }
];


const ans = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
}, 0);

console.log(ans)



//using map
// const costarr = cartItems.map((items) => items.price * items.quantity)
// console.log(costarr)
// const total = costarr.reduce((acc, curr) => acc + curr, 0)
// console.log(total)




// 2. Find the highest priced item in the product list.


const products = [
    { name: "Smartphone", price: 25000 },
    { name: "TV", price: 55000 },
    { name: "AC", price: 40000 },
    { name: "Smartwatch", price: 10000 }
];

const price = products.map(p => p.price)

console.log(price)

const maxprice = price.reduce((acc, num) => (acc < num ? num : acc), 0)

console.log(maxprice)


const max = products.reduce((acc, num) => acc < num.price ? num.price : acc, 0)

console.log(max)





// 3. Create a frequency map of product categories from an array of products.
const inventory = [
    { name: "Shampoo", category: "Beauty" },
    { name: "Toothpaste", category: "Beauty" },
    { name: "Sofa", category: "Furniture" },
    { name: "Dining Table", category: "Furniture" },
    { name: "Fan", category: "Electronics" }
];


const category_count = inventory.reduce((acc, i) => {
    acc[i.category]
        = (acc[i.category] || 0) + 1;
    return acc
}, {});

console.log(category_count)


const category = inventory.reduce((acc, i) => {
    acc[i.category] = [...(acc[i.category] || []), i.name];

    return acc;
}, {});

console.log(category)







// 4. Count how many products are currently out of stock.
const stockList = [
    { id: 1, name: "Shoes", inStock: true },
    { id: 2, name: "Jeans", inStock: false },
    { id: 3, name: "Jacket", inStock: false },
    { id: 4, name: "Shirt", inStock: true }
];


const ans = stockList.reduce((acc, i) => (!i.inStock ? acc + 1 : acc), 0);

console.log(ans)
// 2


// 5. Sum all the discount values from each item in a cart.

const discountedCart = [
    { name: "Phone", discount: 1200 },
    { name: "Tablet", discount: 1500 },
    { name: "Laptop", discount: 2500 }
];

const totalDiscount = discountedCart.reduce((acc, num) => acc + num.discount, 0)

console.log(totalDiscount);
//   5200



// 6. Group products by brand using a reduce-based object.
const productCatalog = [
    { name: "iPhone", brand: "Apple" },
    { name: "MacBook", brand: "Apple" },
    { name: "Galaxy S21", brand: "Samsung" },
    { name: "Galaxy Tab", brand: "Samsung" },
    { name: "Pixel", brand: "Google" }
];





const res = productCatalog.reduce(
    (acc, product) => {
        acc[product.brand] = [...(acc[product.brand] || []), product.name];
        return acc;
    }, {});


console.log(res);


// {
//     Apple: [ 'iPhone', 'MacBook' ],
//     Samsung: [ 'Galaxy S21', 'Galaxy Tab' ],
//     Google: [ 'Pixel' ]
//   }



// 7. Count the number of products per price range.

const shopItems = [
    { name: "USB Cable", price: 200 },
    { name: "Bluetooth Speaker", price: 1200 },
    { name: "Monitor", price: 9500 },
    { name: "Gaming Chair", price: 15000 },
    { name: "Laptop", price: 60000 }
];


const ans = shopItems.reduce(
    (acc, items) => {
        let range;
        if (items.price < 500)
            range = "Under 500";
        else if (items.price >= 500 && items.price <= 1000)
            range = "500-1000";
        else
            range = "1000 and above";

        acc[range] = (acc[range] || 0) + 1;
        return acc;
    }, {});

console.log(ans);

//   { 'Under 500': 1, '1000 and above': 4 }




const shopItems = [
    { name: "USB Cable", price: 200 },
    { name: "Bluetooth Speaker", price: 1200 },
    { name: "Keyboard", price: 700 },
    { name: "Monitor", price: 9500 },
    { name: "Gaming Chair", price: 15000 },
    { name: "Laptop", price: 60000 },
    { name: "Phone", price: 1200 },
    { name: "Tablet", price: 1500 },
    { name: "Laptop", price: 2500 },
    { name: "Shampoo", price: 50 },
    { name: "Toothpaste", price: 300 },
    { name: "Sofa", price: 10000 },
    { name: "Dining Table", price: 19000 },
    { name: "Fan", price: 800 },
];
const itemsrange = shopItems.reduce((acc, items) => {
    let range;
    if (items.price < 500) range = "Under 500";
    else if (items.price >= 500 && items.price < 1000) range = "500-1000";
    else if (items.price >= 1000 && items.price < 5000) range = "1000-5000";
    else if (items.price >= 5000 && items.price < 10000) range = "5000-10000";
    else range = "10,000 and above";
    acc[range] = [...(acc[range] || []), items.name];
    return acc;
}, {});
console.log(itemsrange);



/* 
 {
  'Under 500': [ 'USB Cable', 'Shampoo', 'Toothpaste' ],
  '1000-5000': [ 'Bluetooth Speaker', 'Phone', 'Tablet', 'Laptop' ],
  '500-1000': [ 'Keyboard', 'Fan' ],
  '5000-10000': [ 'Monitor' ],
  '10,000 and above': [ 'Gaming Chair', 'Laptop', 'Sofa', 'Dining Table' ]
 }*/


// 8. Build a comma-separated string of all product names.


const listing = [
    { name: "Washing Machine" },
    { name: "Refrigerator" },
    { name: "Oven" },
    { name: "Dishwasher" }
];

// using map
const ans = listing.map((list) => list.name);
console.log(ans)

// using join
// const pname=  listing.map((list) => list.name).join(" ,");
// console.log(pname)




// 9. Convert a list of orders into a single object with order ID as keys.
const orders = [
    { id: "A101", amount: 2500 },
    { id: "A101", amount: 1500 },
    { id: "A102", amount: 3500 },
    { id: "A103", amount: 1500 },
    { id: "A101", amount: 15000 },
];

const idorders = orders.reduce((acc, o) => {
    acc[o.id] = [...(acc[o.id] || []), o.amount];
    return acc;
}, {});
console.log(idorders);

//   { A101: [ 2500, 1500, 15000 ], A102: [ 3500 ], A103: [ 1500 ] }


// 11. Count the number of patients each doctor has treated.

const appointments = [
    { doctor: "Dr. Roy", patient: "Anita" },
    { doctor: "Dr. Roy", patient: "Sumit" },
    { doctor: "Dr. Khan", patient: "Rita" },
    { doctor: "Dr. Sen", patient: "Akash" },
    { doctor: "Dr. Roy", patient: "Tina" }
];


const names = appointments.reduce(
    (acc, p) => {
        acc[p.doctor] = [...(acc[p.doctor] || []), p.patient];
        return acc;

    }, {});

console.log(names);

//   {
//     'Dr. Roy': [ 'Anita', 'Sumit', 'Tina' ],
//     'Dr. Khan': [ 'Rita' ],
//     'Dr. Sen': [ 'Akash' ]
//   }



// 12. Aggregate total consultation fees earned by each doctor.
const consultations = [
    { doctor: "Dr. Mehta", fee: 500 },
    { doctor: "Dr. Mehta", fee: 700 },
    { doctor: "Dr. Kapoor", fee: 800 },
    { doctor: "Dr. Das", fee: 600 },
    { doctor: "Dr. Kapoor", fee: 900 }
  ];
  
  const totalFees = consultations.reduce((acc, d) => {
    acc[d.doctor] = (acc[d.doctor] || 0) + d.fee;
    return acc;
  }, {});
  
  console.log(totalFees);


//   { 'Dr. Mehta': 1200, 'Dr. Kapoor': 1700, 'Dr. Das': 600 }