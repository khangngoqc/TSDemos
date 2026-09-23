/*
Arrays in TypeScript
--------------------
- An arrays i s a special tyoe of variable that stores multiple values.
- The values can be of the same or different data types.
- Arrays are declared  using `[]` or the generic `Array<T>` type.
- Arrays are an ordered collection of elements
*/

//Approach 1: using letteral
let names: string[] = []; // Declaration
//Initialization/assigning values
names[0] = "Khang";
names[1] = "Hiển";
names[2] = "Kiên";
names[3] = "Vy";

//let names:string[] = ["Khang","Hiển","Kiên","Vy"]; //Declaration+initialization

//Approach 2: Using generic Array<T> type;

let empNames: Array<string> = ["Nhi", "Khoa", "Trí", "Duy"];
let empIds: Array<number> = [101, 102, 103, 104];
let data: Array<string | number> = ["Nhi", 101, "Khoa", 102, "Trí", "Duy"];
let mixedData: Array<any> = [1, "Khang", true, null];

//console.log(empNames);
//console.log(empNames[1]);

//Example 1: Iterating over an array using a traditional for loop

console.log("Size of an Array: ", empNames.length); //4 (How many values stored)
console.log("Employee Names...");
for (let i = 0; i < empNames.length; i++) {
    console.log(empNames[i]);
}

//Example 2: Iterating using 'for...in' loop (indexes)
console.log("Employee Ids...");
for (let i in empIds) {
    console.log(empIds[i]);
}

//Example 3: Iterating using "for..of" loop (values)
console.log("Mixed data...");
for (let value of data) {
    console.log(value);
}

//Example 4: Passing an Array to function
//Search an element i n an array using function
function search(ele: number, arr: number[]): boolean 
{
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            return true;
        }
    }

     return false;
}

let arr: number[] = [1, 24, 125, 25, 64, 67, 78];
console.log(search(67, arr)); //true
console.log(search(69, arr)); //false

//Example 5: A fucntions take an Array and return an array
function capitalizeWords(arr:string[]):string[]
{
    
    let result:string[] = [];
    
    for(let i in arr){
        result[i] = arr[i].toUpperCase();
    }

    return result;
}

let words:string[] = ["test", "TypeScript", "qa"];

console.log(capitalizeWords(words));