// Task 1: E-commerce Cart System
//Concepts: spread, array methods, object manipulation
let cart1 = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 1500 }
];

let cart2 = [
  { name: "Watch", price: 2000 }
];

// Merge both carts using spread
let mergedCart = [...cart1, ...cart2];

// Add 1 new product using push
mergedCart.push({ name: "Bag", price: 1200 });

// Remove the last added product using pop
mergedCart.pop();

// Find total price
let totalPrice = mergedCart.reduce((total, product) => total + product.price, 0);

console.log("Merged Cart:", mergedCart);
console.log("Total Price:", totalPrice);


// Task 2: User Profile Management
// Concepts: object spread, destructuring
let user = {
  name: "tamil",
  role: "Trainee",
  salary: 20000
};

let update = {
  role: "Developer",
  salary: 50000
};

// Merge user and update using spread
let updatedUser = { ...user, ...update };

// Destructure name, role, and salary
let { name, role, salary } = updatedUser;

console.log(`${name} is now a ${role} earning ${salary}`);

// Task 3: Function with Rest Operator (Team Score System)
// Concepts: rest operator
function teamScore(teamName, ...scores) {
  let totalScore = scores.reduce((total, score) => total + score, 0);
  let highestScore = Math.max(...scores);

  console.log("Team Name:", teamName);
  console.log("Scores:", scores);
  console.log("Total Score:", totalScore);
  console.log("Highest Score:", highestScore);
}

teamScore("Warriors", 85, 90, 78, 92);



// Task 4: Nested Data Extraction (API Response Simulation)
// Concepts: nested destructuring
let apiData = {
  user: {
    name: "tamil",
    address: {
      city: "Bangalore",
      pincode: 560001
    }
  }
};

let {
  user: {
    name: apiName,
    address: { city, pincode }
  }
} = apiData;

console.log(`${apiName} lives in ${city} - ${pincode}`);


// Task 5: Array Dashboard (Admin Panel)
// Concepts: splice, slice, includes, indexOf
let users = ["A", "B", "C", "D", "E"];
users.splice(2, 2, "X", "Y");
let firstThreeUsers = users.slice(0, 3);
let hasB = users.includes("B");
let indexOfE = users.indexOf("E");

console.log("Updated Users:", users);
console.log("First 3 Users:", firstThreeUsers);
console.log("Does B exist?", hasB);
console.log("Index of E:", indexOfE);



// Task 6: Data Cleaning Tool
// Concepts: flat, filter, type handling
let messyData = [1, 2, [3, 4, [5]], null, undefined, "hello"];
let flatData = messyData.flat(Infinity);
let cleanArray = flatData.filter((item) => item !== null && item !== undefined);

console.log("Clean Array:", cleanArray);




// Task 7: Sorting Bug Fix (Real Industry Issue)
// Concepts: sort()
let prices = [1000, 200, 50, 5000];

let ascendingPrices = [...prices].sort((a, b) => a - b);

console.log("Original Prices:", prices);
console.log("Ascending Prices:", ascendingPrices);
console.log("Default sort fails because numbers are compared as strings, not as numeric values.");



// Task 8: Analytics Report Generator
// Concepts: reduce
let orders = [
  { id: 1, amount: 100 },
  { id: 2, amount: 200 },
  { id: 3, amount: 300 }
];

let totalRevenue = orders.reduce((total, order) => total + order.amount, 0);
let averageOrderValue = totalRevenue / orders.length;

console.log("Total Revenue:", totalRevenue);
console.log("Average Order Value:", averageOrderValue);



// Task 9: Inventory System (Advanced)
// Concepts: combine everything
let inventory1 = ["Laptop", "Mouse", "Keyboard"];
let inventory2 = ["Monitor", "Printer"];

inventory1.push("Headphones");

inventory1.pop();

inventory1.splice(1, 1, "Gaming Mouse");

let hasKeyboard = inventory1.includes("Keyboard");

let mergedInventory = [...inventory1, ...inventory2];

console.log("Inventory 1:", inventory1);
console.log("Inventory 2:", inventory2);
console.log("Keyboard exists:", hasKeyboard);
console.log("Merged Inventory:", mergedInventory);



// Task 10: Interview Level Challenge
function processData(...data) {
  let finalArray = [...new Set(data.flat(Infinity))].sort((a, b) => a - b);
  return finalArray;
}

console.log("Processed Data:", processData(1, 2, [3, 4], [5, [6]]));
