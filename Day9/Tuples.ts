/*
Tuples in TypeScript
-------------------------
A tuples is a fixed-length array where each element has a specific type.
It helps in storing multiple fields of different data types together.

*/

//Example 1: tuple with 2 values
/* let person:[string, number] = ["Khang", 6];

console.log(person[0]);
console.log(person[1]);

console.log(person);
*/

//Example 2: tuple with multiple values
let user: [number, string, boolean, number, string] = [10, "yes", false, 31, "haha"];
console.log(user);


//Example 3: Iterating over a tuple using a traditional for loop
console.log("using traditional for loop...");
for (let i = 0; i < user.length; i++) {
    console.log(user[i]);
}

//Example 4: Iterating using a `for..in` loop
console.log("using for...in for loop...");
for (let i in user) {
    console.log(user[i]);
}

//Example 5: Iterating using 'for...of' loop (value-based iteration)
console.log("using for...of for loop...");
for (let value of user) {
    console.log(value);
}

//Example 6: Tuple Array (Array of Tuples)
let students: [number, string][] = [[101, "Khang"], [102, "Lộc"], [103, "Dũng"]];
console.log(students.length);
console.log(students[2]); //[103, "Dũng"]
console.log(students[2][1]); //["Dũng"]