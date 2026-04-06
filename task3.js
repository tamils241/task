//1. User Input
let name = prompt("Enter Name:");

let age = prompt("Enter Age:");
let salary = prompt("Enter Monthly Salary:");
let loanAmount = prompt("Enter Loan Amount:");

console.log("Name:", name);
console.log("Age:", age);
console.log("Salary:", salary);
console.log("Loan Amount:", loanAmount);

//2. Eligibility Check (Logical Operators)
//Conditions:

// Eligibility Check
if (age >= 21 && age <= 60 && salary >= 25000) 
    {
    console.log("Eligible");
} else 
    {
    console.log("Not Eligible ");
}

//3: EMI Calculation (Assignment Operator)
// EMI Calculation
let emi = loanAmount;

emi /= 12;   // same as: emi = emi / 12

console.log("EMI:", emi);

//4. Loan Category (If-Else)
// Loan Category
if (loanAmount > 500000) 
    {
    console.log("Loan Category: High Loan");
} 
else if (loanAmount > 200000) 
    {
    console.log("Loan Category: Medium Loan");
} 
else 
    {
    console.log("Loan Category: Low Loan");
}


//5: Risk Level (Ternary Operator)

let riskLevel = (salary > 50000) ? "Low Risk" : "High Risk";

console.log("Risk Level:", riskLevel);

//6. Customer Type (Switch)

switch (true) {
    case (emi > 40000):
        console.log("Customer Type: Premium Customer");
        break;

    case (emi > 20000):
        console.log("Customer Type: Standard Customer");
        break;

    default:
        console.log("Customer Type: Basic Customer");
}

//7.Type Conversion Check (Must)
age = Number(ageInput);
salary = Number(salaryInput);
loanAmount = Number(loanInput);

console.log(" Age:", typeof age);
console.log("Salary:", typeof salary);
console.log("Loan:", typeof loanAmount);