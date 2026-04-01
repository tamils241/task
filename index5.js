// 1
var a = 10; //declare a
a = 20; // updates value to 20
var a = 30; //re-declare
console.log(a); // 30

// 2
var a = 5;//declare
var a = 15;//re-declare
console.log(a); //15

// 3
var a = 1; //declare a
a = 2; //updates value
a = 3; //re-updates value
console.log(a); //3

// 4
var a = 7; //declare a
a = 14; //updates value
var a = 21; //re-declare
a = 28; //updates value
console.log(a);  //28

// 5
var a = 100; //declare a
var a = 200; //re-declare
a = 300; //update value
console.log(a); //300

// 6
var a = 9; //declare a
console.log(a); //9

// 7
var a = 11; //declare a
a = 22; //updates value
console.log(a); 22

// 8
var a = 50; //declare a
var a = 60; //re-declare a
var a = 70; //re-declare a
console.log(a); //70

// 9
var a = 2;  //declare a
a = 4; //update value
a = 6; //re-update value
var a = 8; //re-declare a
console.log(a); //8

// 10
var a = 99; //declare a
a = 88; //update value
console.log(a); //88


// 11
let b = 10; //declare b
b = 20; // update value
console.log(b); //20

// 12
let b = 5; //declare b
b = 15; // update value
b = 25;  // re-update value
console.log(b); //25

// 13
let b = 1; //declare b
console.log(b); //1

// 14
let b = 7; //declare b
b = 14; // update value
console.log(b); //14

// 15
let b = 100;   //declare b
b = 200;      // update value 
b = 300;      // re-update value
console.log(b); //300

// 16
let b = 9;  //declare b
let b = 18;  //re-declare b
console.log(b); // SyntaxError (already declared b)

// 17
let b = 50; //declare b
b = 60;     // update value 
let b = 70; //re-declare b
console.log(b); // SyntaxError (already declared b)

// 18
let b = 2; //declare b
b = 4;     // update value 
console.log(b); //4

// 19
let b = 99; //declare b
b = 88;     //update value 
b = 77;     //re-update value 
console.log(b); //77

// 20
let b = 11; //declare b
b = 22;  //update value
console.log(b); //22


// 21
const c = 10; //declare c
console.log(c);//10

// 22
const c = 5; //declare c
c = 15;      //update value (you cannot change a const value)
console.log(c); //type error (already declare c value )

// 23
const c = 1; //declare c
const c = 2; //re-declare c (re-declaration is not allowed)
console.log(c); //SyntaxError (already declared c)

// 24
const c = 7; //declare c
console.log(c); //7

// 25
const c = 100; //declare c
console.log(c); //100

// 26
const c = 50; //declare c
c = 60;  //update value (you cannot change a const value)
console.log(c); //type error (already declare c value )

// 27
const c = 9;  //declare c
console.log(c); //9

// 28
const c = 20;//declare c
const c = 30; //re-declare c (re-declaration is not allowed)
console.log(c); //SyntaxError (already declared c)

// 29
const c = 99; //declare c
console.log(c); //99

// 30
const c = 11; //declare c
c = 22;       //update value (you cannot change a const value)
console.log(c); //type error (already declare c value )


// 31
var a = 1; //declare a
var a = 2; //re-declare a
var a = 3; //re-declare a
console.log(a); //3

// 32
var a = 10; //declare a
a = 20;     //update value
a = 30;      //re-update value
var a = 40;  //re-declare a
console.log(a); //40

// 33
var a = 5; //declare a
a = 15; //update value
console.log(a); //15

// 34
var a = 100; //declare a
var a = 200; //re-declare a
var a = 300; //re-declare a
a = 400;     //update value
console.log(a); //400

// 35
var a = 7; //declare a
console.log(a); //7

// 36
let b = 3; //declare b
b = 6;     //update value
b = 9;     //update value
console.log(b);//9

// 37
let b = 12; //declare b
let b = 24; //re-declare b
console.log(b); // SyntaxError (already declared b)

// 38
let b = 8; //declare b
b = 16;    //update value
console.log(b); //16

// 39
const c = 2; //declare c
console.log(c); //2

// 40
const c = 4; //declare c
c = 8;       //update value (you cannot change a const value)
Console.log(c); //type error (already declare c value )