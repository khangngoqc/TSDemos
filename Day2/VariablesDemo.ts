//Variable: A container which can hold/store some data.

//var, let, const

//Syntax: keyword variableName :dataType(pptional) = value;
//ex: var age: number = 25;
//ex: var age = 25; 
//TypeScript will automatically infer the data type based on the value assigned.

/* 
var age: number = 30;
console.log(age); 
 */


//var vs let vs const
//---------------------
/* 
    1) Scope
    2) Declaration/Value Assignent
    3) Re-declaration
    4) Re-initialization/Re-assignment
    5) Hoisting

 */

//var - We do not use this in Modern JavaScript/TypeScript. Avoid var because  it has function scope and can lead to unexpected behavior. It is hoisted and can be re-declared and re-assigned.
//let - Use let when you need a variable that can change.
//const - Use const when the variable value should not change.


//1) Scope - Accessible area (Functional Scope(var) & Block Scope(let, const))

//Example 1: var (Functional Scope)
/* function varScopeExample() {
    if (true) {
        var msg = "I am a var variable";
        console.log(msg); // Accessible here
    }
        console.log(msg); // Accessible here because var has functional scope
}

varScopeExample(); */


//Example 2: let and const (Block Scope)
/* function blockScopeExample() {
    if (true) {
        let msg = "I am a let variable";
        const msg2 = "I am a const variable";
        console.log(msg); // Accessible here
        console.log(msg2); // Accessible here
    }
    // console.log(msg); // Not accessible here
    // console.log(msg2); // Not accessible here
}

blockScopeExample(); 
 */


//Example 3:
/* function scopeDiff(){
    if(true){
        var num1 = 10;
        let num2 = 20; 
        const num3 = 30;

        console.log(num1);
        console.log(num2);
        console.log(num3);

    }

    console.log(num1); // accessible here because var has functional scope
    console.log(num2); // not accessible here
    console.log(num3); // not accessible here

}

scopeDiff(); 
*/


//2) Declaration/Value Assignment

//Example 1: var can be declared without initialization
/* var x; // Declaration
console.log(x); // undefined
x=30; // initialization 
console.log(x); // 30 */

//Exmple 2: let can be declared without initialization
/* let y; // Declaration
console.log(y); // undefined
y = 40; // initialization
console.log(y); // 40 */

//Example 3: const must be initialized at the time of declaration
/* const z = 50; // correct
console.log(z);  */


//3) Re-declaration
// var - allows the Re-declaration
// let and const - not allow the Re-declaration (making code safer)

//Example 1: var allows re-declaration
/* var city = "New York";
var city = "Los Angeles";
console.log(city); // Los Angeles */

//Example 2: let does not allow re-declaration
/* let country = "Vietnam";
let country = "Japan"; // Error: Cannot redeclare block-scoped variable 'country'.
console.log(country);*/

//Example 3: const does not allow re-declaration
/* const planet = "Earth";
const planet = "Mars"; // Error: Cannot redeclare block-scoped variable 'planet'.
console.log(planet);  */


//4) Re-initialization/Re-assignment
// var and let allow re-initialization/re-assignment
// const - Re-assignment is not allowed (Only constants allowed - cannot change the value)

//Example 1: var allows re-assignment
/* var age = 25;
age = 30; // Re-assignment is allowed
console.log(age); // 30 */

//Example 2: let allows re-assignment
/* let score = 100;
score = 200; // Re-assignment is allowed
console.log(score); // 200 */

//Example 3: const does not allow re-assignment
/* const pi = 3.14;
// pi = 3.14159; // Error: Cannot assign to 'pi' because it is a constant.
console.log(pi); // 3.14 */


//5) Hoisting - var (Hoisted with undefined), let and const (Hoisted but not initialized)

/* console.log(a); // undefined
var a = 10; 
console.log(a); // 10 */

/* console.log(b); // not initialized
let b = 20;
console.log(b); // 20 */

console.log(c); // not initialized
const c = 30;
console.log(c); // 30