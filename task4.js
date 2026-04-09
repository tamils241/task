// Task 1: E-Commerce Discount System
// Concepts: function, parameters, return, condition
//  Build a function:
// Input: product name, price
// Apply:
// If price > 1000 → 20% discount
// Else → 10% discount
// Return final price
//  Example:
// calculateDiscount("Shoes", 2000)
//  Output:
// Product: Shoes
// Final Price: 1600

function calculateDiscount(productName, price)
{
let finalPrice
if(price>1000)
{
finalPrice = price - price * 0.20
}
else
{
finalPrice = price - price * 0.10
}
return `Product: ${productName}\nFinal Price: ${finalPrice}`;
}

console.log(calculateDiscount("Shoes", 2000))

// Task 2: Order Processing using Callback
// Concepts: callback, higher order function

function payment(amount)
{
console.log(`Payment of ${amount} successful`)
}

function orderSuccess()
{
console.log("Order delivered")
}

function placeOrder(callback)
{
console.log("Order placed")
callback(500)
orderSuccess()
}

placeOrder(payment)

// Task 3: Employee Data Loop System
// Concepts: for loop, array, object

let employees = [
{name:"tamil", salary:50000},
{name:"naveen", salary:70000}
]

for(let i = 0; i < employees.length; i++)
{
if(employees[i].salary > 60000)
{
console.log(`${employees[i].name}: High Salary`)
}
else
{
console.log(`${employees[i].name}: Normal Salary`)
}
}

// Task 4: Login Attempts (While Loop)
// Concepts: while loop

let attempts = 1
let correctPassword = "admin123"
let enteredPassword 

while(attempts <= 3)
{
console.log(`Attempt ${attempts}`)

if(attempts === 2)
{
enteredPassword = "admin123"
}

if(enteredPassword === correctPassword)
{
console.log("Login success")
break
}
else
{
console.log("Try again")
}

attempts++
}

// If all attempts finished
if (attempts > 3) {
    console.log("Account locked");
}



// Task 5: Coupon Generator (Generator Function)
// Concepts: generator

function* gen()
{
yield "10% OFF"
yield "20% OFF"
yield "Free Delivery"
yield "Cashback"
}

let offers = gen()

console.log(offers.next().value)
console.log(offers.next().value)
console.log(offers.next().value)
console.log(offers.next().value)


// Task 6: Shopping Cart Total (for...of)
// Concepts: for...of

let cart = [100,300,200,400]
let total = 0
for(let amount of cart)
{
    total = total+amount
}
console.log("final amount:",total);

// Task 7: User Profile System (for...in)
// Concepts: object loop

let user = {
name: "tamil",
role: "Developer",
location: "India"
}

for(let key in user)
{
console.log(`${key} : ${user[key]}`)
}

// Task 8: Factory Pattern (Function Reuse)
// Concepts: return, reuse

function Phone()
{
return "Phone"
}

function Battery()
{
return "Battery"
}

function Charger()
{
return "Charger"
}

let order = `${Phone()} + ${Battery()} + ${Charger()}`
console.log(`Your Order: ${order}`)

// Task 9: College Form with Default Values
// Concepts: default parameters

function collegeForm(studentName, department )
{
return `Student: ${studentName}\nDepartment: ${department}`
}

console.log(collegeForm("tamil","Not Assigned"))

// Task 10: Currying - EMI Calculator
// Concepts: currying

function emi(principal)
{
return function(rate)
{
return function(time)
{
return (principal * rate * time) / 100
}
}
}

console.log(`EMI: ${emi(10000)(2)(12)}`)

// Task 11: Even/Odd Analyzer
// Concepts: loop + condition

for(let number = 1; number <= 10; number++)
{
if(number % 2 === 0)
{
console.log(`${number} -> Even`)
}
else
{
console.log(`${number} -> Odd`)
}
}

// Task 12: Function Scope Debugging
// Concepts: var, let, const

if(true)
{
var Message = "var works outside block"
let Message1 = "let works only inside block"
const Message2 = "const works only inside block"

console.log(Message1)
console.log(Message2)
}

console.log(Message)

// Task 13: Real-Time Alert System (IIFE)
// Concepts: IIFE

;(function()
{
console.log("Flash Sale: 50% OFF on Shirts")
})()

// Task 14: Marks Calculator with Return
// Concepts: return

function marks(mark1, mark2, mark3)
{
let totalMarks = mark1 + mark2 + mark3
let averageMarks = totalMarks / 3
return `Total: ${totalMarks}\nAverage: ${averageMarks}`
}

console.log(marks(80, 90, 70))

// Task 15: Retry Offer System (Generator + Condition)
// Concepts: generator + done

function* retryOffers()
{
yield "10% OFF"
yield "20% OFF"
yield "Free Delivery"
}

let nextOffer = retryOffers()
let offerResult = nextOffer.next()

while(!offerResult.done)
{
console.log(offerResult.value)
offerResult = nextOffer.next()
}

if(offerResult.done)
{
console.log("All offers expired")
}
