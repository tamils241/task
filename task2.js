//Section 1: Printing & User Interaction

//1.Print your name and designation in the console.
console.log("Thamizhazhagan");

//2.Show an alert saying "Welcome to JavaScript Session".
alert("welcome to javascript session")


//3.Ask the user: "Do you like coding?" using confirm() and print the result.
let result = confirm("Do you like coding?");
console.log(result);


//4.Take user input for favorite food using prompt() and print it.
let food = prompt("Enter your favorite food:");
console.log(food);


//5.Display "Good Evening Team" on the UI using document.writeln().
document.write("good eveing team")

//Section 2: Console Methods

//6.Print a number using console.log().
console.log(100);
console.log(3.14);

//7.Print a warning message: "This is a warning".
console.warn("this is a warning ")


//8.Print an error message: "Something went wrong!".
console.error("somthing went wrong")

//9.Clear the console after printing 3 messages.
console.clear()

//Section 3: Data Types

//10.Create a variable with your name and print its type.
let name = "Tamil";
console.log(typeof (name));


//11.Store your age and print the datatype.
let name1 = "tamil :";
let age = 33;
console.log(name1, age);


//12.Store a boolean value (true/false) and print it.
let tamil = true;
let ravi = false;

console.log(tamil); // true
console.log(ravi);  // false


//13.Declare a variable without value and print it.
let a;
console.log(a); //undefined


//14.Assign null to a variable and print it.
let a1 = null;
console.log(a1);


//Section 4: Arrays

//15.reate an array of 5 fruits and print it.
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits);

//16.Print the first and last element of the array.
let fruits1 = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits1[0]); // first element
console.log(fruits1[4]); // last element


//17.Add one more fruit dynamically and print updated array.
let fruits2 = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
fruits2.push("Pineapple"); // add new fruit
console.log(fruits2);


//18.Remove the last element and print array.
let fruits3 = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
let removed = fruits3.pop();
console.log(removed); // last removed fruit


//19.Find the length of the array.
let fruits4 = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits4.length);

//Section 5: Objects

//20.Create an object for a student (name, age, course).
let student = {
  name: "Tamil",
  age: 33,
  course: "JavaScript"
};

console.log(student);

//21.Print the student name.
console.log(student.name);
console.log(student.age);

//22.Add a new property (college) dynamically.
student.college = "ABC College"; // add new property
console.log(student);


//23.Access nested array inside object (like your fruit example).
let student = {
  name: "Tamil",
  age: 33,
  course: "JavaScript",
  fruits: ["Apple", "Banana", "Mango"]
};

// access nested array
console.log(student.fruits);

// access specific element
console.log(student.fruits[0]); // first fruit
console.log(student.fruits[2]); // third fruit

//24.Update a property value.
let student = {
  name: "Tamil",
  age: 33,
  course: "JavaScript"
};
//update property
student.age = 34;
student["course"] = "React";

console.log(student);

 //Section 6: Operators

//25.Add two numbers and print result.
let a3 = 20;
let b3 =30;
let result1= a3+b3;
console.log(result1);

//26.Subtract two numbers.
let a4 = 20;
let b4 =30;
let result2= a4-b4;
console.log(result2);

//27.Multiply two numbers.
let a5 = 20;
let b5 =30;
let result3= a5*b5;
console.log(result3);

//28.Divide two numbers.
let a6 = 20;
let b6 =30;
let result4= a6+b6;
console.log(result4);

//29.Find remainder using %.
let a7 = 10;
let b7 = 3;

let remainder = a % b;
console.log(remainder);

//30.Use exponent operator (**) to find power.
let base = 2;
let power = 3;

let result5 = base ** power;
console.log(result5);


 //Section 7: Increment & Decrement

//31.Create a variable and use post increment.
let a8 = 5;
console.log(a8++); //  increments
console.log(a8);

//32.Create a variable and use pre increment.
let b = 5;
console.log(++b); // increments first, then uses value
console.log(b);


//33.Show difference between num++ and ++num.
let x = 5;
console.log(x++); // 5 (then becomes 6)

let y = 5;
console.log(++y); // 6 (already incremented)


//34.Use decrement operator and print values.
let z = 5;

console.log(z--); // 5 (then becomes 4)
console.log(z);   // 4

console.log(--z); // 3


//35.Predict output before running (important logic task 👇)
let a9 = 5;
let b1 = a9++;
let c = ++a9;

console.log(a9); //7
console.log(b1);  //5
console.log(c);  //7

//Section 8: Real-Time Logic Tasks

//36.Ask user age and check if eligible to vote.
let age1 = prompt("Enter your age:");

if (age1 >= 18) {
  console.log("You are eligible to vote");
} 
else {
  console.log("You are not eligible to vote");
}

//37.Ask user name and greet: "Hello Naveen".

let name2 = prompt("Enter your name:");
console.log("Hello " + name2);

//38.Store marks in array and print highest value.
let marks = [85, 90, 78, 92, 88];

let max = Math.max(...marks);
console.log("Highest mark:", max);

//39.Create object for fruits category (like your example) and access values.
let fruit = {
  tropical: ["Mango", "Pineapple"],
  citrus: ["Orange", "Lemon"],
  berries: ["Strawberry", "Blueberry"]
};

console.log(fruit.tropical);
console.log(fruit.citrus[0]);


//40.Combine prompt + array:

//Ask user to enter 3 favorite fruits
let f1 = prompt("Enter first fruit:");
let f2 = prompt("Enter second fruit:");
let f3 = prompt("Enter third fruit:");
//Store in array
let favFruits = [f1, f2, f3];
//Print them
console.log(favFruits);