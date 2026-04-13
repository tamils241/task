// Task 1: E-commerce Cart Total
let cart = [
  { name: "Shirt", price: 500, qty: 2 },
  { name: "Shoes", price: 1500, qty: 1 },
  { name: "Cap", price: 300, qty: 3 }
];

// Calculate total price using reduce
let totalPrice = cart.reduce((total, product) => total + product.price * product.qty, 0);

// Print only products above 1000 price using filter
let expensiveProducts = cart.filter((product) => product.price > 1000);

// Get all product names in uppercase using map
let upperCaseNames = cart.map((product) => product.name.toUpperCase());

console.log("Total Cart Price:", totalPrice);
console.log("Products Above 1000:", expensiveProducts);
console.log("Product Names in Uppercase:", upperCaseNames);


// Task 2: Student Result System
let students = [
  { name: "Arun", marks: 85 },
  { name: "Bala", marks: 45 },
  { name: "Charan", marks: 60 },
  { name: "Divya", marks: 30 }
];


let failed_Students = students.filter((student) => student.marks < 50);

let Distinction = students.some((student) => student.marks > 80);

let all_Passed = students.every((student) => student.marks > 35);

let first_FailedStudent = students.find((student) => student.marks < 50);

console.log("Failed Students:", failed_Students);
console.log("Any Distinction:", Distinction);
console.log("All Students Passed:", all_Passed);
console.log("First Failed Student:", first_FailedStudent);


// Task 3: Employee Salary Analysis
let employees = [
  { name: "A", salary: 25000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 15000 },
  { name: "D", salary: 50000 }
];

let increasedSalaries = employees.map((employee) => ({
  ...employee,
  salary: employee.salary + employee.salary * 0.1
}));

let highSalaryEmployees = employees.filter((employee) => employee.salary > 30000);

let totalSalaryExpense = employees.reduce((total, employee) => total + employee.salary, 0);

let sortedByHighestSalary = [...employees].sort((a, b) => b.salary - a.salary);

console.log("Employees with 10% Salary Increase:", increasedSalaries);
console.log("Employees with Salary > 30000:", highSalaryEmployees);
console.log("Total Salary Expense:", totalSalaryExpense);
console.log("Employees Sorted by Highest Salary:", sortedByHighestSalary);


// Task 4: String Real Use Case (Search System)
let products = ["Laptop", "Mobile", "Tablet", "Camera"];

let hasMobile = products.includes("Mobile");
let lowerCaseProducts = products.map((product) => product.toLowerCase());
let tabletIndex = products.indexOf("Tablet");
let productString = products.join("-");

console.log("Does Mobile exist?", hasMobile);
console.log("Products in Lowercase:", lowerCaseProducts);
console.log("Index of Tablet:", tabletIndex);
console.log("Products as String:", productString);


// Task 5: Date Real-Time Task (Age Calculator)
let dob = new Date("2004-08-15");
let today = new Date();
let age = today.getFullYear() - dob.getFullYear();
let monthDifference = today.getMonth() - dob.getMonth();

if (
  monthDifference < 0 ||
  (monthDifference === 0 && today.getDate() < dob.getDate())
) {
  age--;
}

console.log(`You are ${age} years old`);


// Task 6: Login Validation System
let users = [
  { username: "admin", password: "1234" },
  { username: "user", password: "abcd" }
];

let enteredUsername = "admin";
let enteredPassword = "1234";

let existingUser = users.find((user) => user.username === enteredUsername);
let isValidLogin = users.find(
  (user) => user.username === enteredUsername && user.password === enteredPassword
);

console.log("User Exists:", existingUser);
console.log(isValidLogin ? "Login Success ✅" : "Invalid Credentials ❌");


// Task 7: Even Number Analyzer
let numbers = [10, 15, 20, 25, 30];

let evenNumbers = numbers.filter((number) => number % 2 === 0);
let hasOddNumber = numbers.some((number) => number % 2 !== 0);
let allNumbersEven = numbers.every((number) => number % 2 === 0);
let firstNumberAbove20 = numbers.find((number) => number > 20);

console.log("Even Numbers:", evenNumbers);
console.log("Any Odd Number Exists:", hasOddNumber);
console.log("All Numbers Are Even:", allNumbersEven);
console.log("First Number Greater Than 20:", firstNumberAbove20);


// Bonus Challenge
let orders = [
  { id: 1, amount: 500, status: "delivered" },
  { id: 2, amount: 1500, status: "pending" },
  { id: 3, amount: 2000, status: "delivered" }
];

let deliveredRevenue = orders
  .filter((order) => order.status === "delivered")
  .reduce((total, order) => total + order.amount, 0);

let pendingOrders = orders.filter((order) => order.status === "pending");
let hasOrderAbove1000 = orders.some((order) => order.amount > 1000);
let ascendingOrders = [...orders].sort((a, b) => a.amount - b.amount);

console.log("Total Revenue of Delivered Orders:", deliveredRevenue);
console.log("Pending Orders:", pendingOrders);
console.log("Any Order Above 1000:", hasOrderAbove1000);
console.log("Orders Sorted by Amount:", ascendingOrders);
