
console.log("==========ARITHMETIC OPERATORS==========")

let a:number = 10,  b:number = 20;

// 1. ARITHMETIC OPERATORS
console.log("Addition: " + (a + b)); // Output: Addition: 30
console.log("Subtraction: " + (a - b)); // Output: Subtraction: -10
console.log("Multiplication: " + (a * b)); // Output: Multiplication: 200
console.log("Division: " + (a / b)); // Output: Division: 0.5
console.log("Modulus: " + (a % b)); // Output: Modulus: 10

console.log("==========ASSIGNMENT OPERATORS==========")

// 2. ASSIGNMENT OPERATORS = 
a = 10;
b = 5;

//a += b; // a = a + b
console.log(a += b); // a = a + b = 15
console.log(a -= b); // a = a - b = 10
console.log(a *= b); // a = a * b = 50
console.log(a /= b); // a = a / b = 2
console.log(a %= b); // a = a % b = 0
console.log(5**2); // 5^2 = 25


console.log("==========ASSIGNMENT OPERATORS==========")
//3. RELATIONAL OPERATORS
//Returns boolean - true/false
// > < >= =< == != ===(Strict equality)

a = 10;
b = 20;
console.log(a>b); //false
console.log(a<b); //true
console.log(a>=b); //false
console.log(a<=b); //true
console.log(a==b); //false
console.log(a!=b); //true


console.log("==========Difference between ==(equality)  ===(strict equality)==========")
//Difference between ==(equality)  ===(strict equality)
let num1:any = 10; //number type
let num2:any = "10"; //string type

console.log(num1==num2); //true (only compares values)
console.log(num1===num2); //false (compares the values & types)


console.log("==========LOGICAL OPERATORS==========")

//Logical Operators     &&  ||  !
//return true/false (boolean)
//works between boolean variables

// b1       b2          &&          ||          !b1
//----------------------------------------------------
//true      true        true        true        false
//true      false       false       true        
//false     true        false       true        true
//false     false       false       false

let b1:boolean = true;
let b2:boolean = false;

console.log(b1 && b2); //false
console.log(b1 || b2); //true
console.log(!b1) //false
console.log(!b2) //true

//combiantion of logical & Relational operators
console.log("==========Mixing of Logical & Relational operators==========")
console.log(20>10 && 10>5); //true
console.log(10<20 || 5>10); //true 

