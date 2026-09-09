/*
1) Premitive Data Types(Built-in Data Types)
Number
String
Boolean
Null
Undefined
Any
Union Type
Void


2) Non-Premitive Data Types(Objects)
Array
Class
Function
Interface
Tuple etc...



*/

// 1. NUMBER TYPE
// Represent both integer and floating point numbers.
/* let num:number = 10;
let floatNum = 10.5;
let bigNum = 343434343323232;

console.log("num: " + num); // num: 10
console.log("floatNum: " + floatNum); // floatNum: 10.5
console.log("bigNum: " + bigNum); // bigNum: 343434343323232

console.log("Type of num: " + typeof num); // Type of num: number
console.log("Type of num: " + typeof (num)); // Type of num: number
 */


// 2. STRING TYPE
// Represent textual data.

/*
1. Single quotes (' ')
2. Double quotes (" ")
3. Backticks (` `)

*/
/* 
let firstName:string = "John";
let lastName:string = 'Doe';
//let fullName:string = "Hello",firtName, lastName;

let greeting:string = `Hello ${firstName} ${lastName}`;

console.log(greeting); // Output: Hello, John, Doe */


// 3. BOOLEAN TYPE
// Represent true or false values.
/* 
let isStudent:boolean = true;
let hasJob:boolean = false;

console.log("Is Student? " + isStudent); // Output: Is Student? true
console.log("Has job? " + hasJob); // Output: Has job? false*/


// 4. NULL & UNDEFINED TYPE
// Special types for absence of value.
/* let emptyValue:null = null;

let notAssigned:undefined = undefined;

console.log(emptyValue); // Output: null
console.log(notAssigned); // Output: undefined

let price:number;
console.log(price); // Output: undefined */


// 5. ANY TYPE
// Represents any value and can be assigned to any type. loses TypeScript benefits of type checking.

/* let value:any =  "Welcome";
console.log(typeof value); // Output: String

value = 10;
console.log(typeof value); // Output: number

value = true;
console.log(typeof value); // Output: boolean   

console.log(value); // Output: true */



// 6. UNION TYPE
// Represents a variable that can hold multiple types of values.
/* let id:number | string | boolean;

id = "ABC123";
console.log(id);

id = 12345;
console.log(id);

id = true;
console.log(id); */


//7. VOID TYPE
//Used for functions that do not return a value.

/* function show(): void {
    console.log("This function does not return a value.");
}

show(); // Output: This function does not return a value. */

function sum(a: number, b: number): number {
    return a + b;
}

let res = sum(5, 10); // Output: 15
console.log("Sum: " + res); // Output: Sum: 15  