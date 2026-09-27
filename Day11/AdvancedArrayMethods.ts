// ========== forEach(), map(), filter(), reduce(),  some(), every() ==========//

//1. forEach() - Executes a function once for each array element
// It takes function as a parameter

// Syntax: array.forEach(function(currentValue, index, array){})

// currentValue - the current element being processed in the array
// index (optional), The index of the current element being proccessed in the array
// array (optional), The array the current element belongs to.

//Ex1: Get index of all the fruites along with value
let fruits: string[] = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

console.log("Printing fruits along with index using for loop");

for (let i in fruits) {
    console.log(i, fruits[i]);
}

console.log("\nPrinting fruits along with index using for..each loop");

/* 
fruits.forEach(function (element, index) {
    console.log(`${index}, ${element}`);
})
*/

//using arrow function
fruits.forEach((element, index) => {
    console.log(`${index}, ${element}`);
})


//Ex 2:
fruits.forEach((element) => {
    console.log(element.toUpperCase());
});



// 2. map() - Creates a new array with the result of calling the function on every element of array
// It takes function as a parameter
// Returns the same number of elements that we have in original array

// Syntax: array.map(function(currentValue, index , array){})

//Ex1: Get square of all the numbers in an array. Ex: [1,2,3] then result should be [1,4,9]
let numbers: number[] = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(function (number/*element*/) {
    return (number * number);
});

console.log("\nOriginal array: ", numbers);
console.log("Squared numbers: ", squaredNumbers);

//Ex2: Double each number [1,2,3,4,5] --> [2,4,6,8,10] 
/* 
let doubledNumbers = numbers.map((number) => {
    return number * 2;
}); 
*/

let doubledNumbers = numbers.map((number) => number * 2);
//If you have single returen statement inside the arrow function then {} and 'return' statement are optional.

console.log("\nOriginal array: ", numbers);
console.log("Doubled numbers: ", doubledNumbers);



// 3. filter() - Creates a new array with all the elements that pass/satisfy the function
// It takes function as a parameter.
// Returns either same or fewer number of elements compared to original array

//Syntax: array.filter(function(currentValue, index, array){})

//Ex1: Get the only even numbers from an array
let evenNumbers = numbers.filter((number) => number % 2 == 0);

console.log("\nOriginal array: ", numbers);
console.log("Even numbers: ", evenNumbers);

//Ex2: Get the only numbers greater than 3
let greaterThanThree = numbers.filter((number) => number > 3);

console.log("\nOriginal array: ", numbers);
console.log("Greater than 3 numbers: ", greaterThanThree);



// 4.reduce() - Applies a function on every element of an array and returns a single value

// Syntax: array.reduce(function(accumulator, currentValue, index, array){})

// accumulator - the accumulated value from previous iteration
// currentValue - The current element being processed


// Ex1: Get the total (sum) of all the elements in an array
/* 
let total = 0;
for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
}
console.log("\nSum of all the number: ", total);
*/

//Using reduce method
let reducedResult = numbers.reduce((total, element) => { 
    return total + element 
}, 0); // Here 0 is default value of accumulator

/* let reducedResult = numbers.reduce((total, element) =>  total + element, 0); */ 

console.log("\nOriginal array: ", numbers);
console.log("Sum of all the number: ", reducedResult);


// 5. some() - Check if any element satisfies a condition
// Returns true if at least one element passes the condition, else false

// Syntax: array.some(function(currentValue, index, array))


//Ex1: Check if array contains negatives values
let containsNegative:boolean = numbers.some((element) => {return element <0});
console.log("Does array contain negative value? ", containsNegative);

//Ex2: Check if array contains positive values
let containsPositive:boolean = numbers.some((element) => {return element >0});
console.log("Does array contain positive value? ", containsPositive);



// 6. every() - check if all elements satisfiy a condition
// Return true if all elements pass the condition, else false

// Syntax: array.every(function(currentValue, index, array));

//Ex1: Check if all the element are even numbers
let allEven = numbers.every((element) => element%2==0);
console.log("Are all numbers even? ", allEven);

//Ex2: Check if all the element are greater than 1
let greaterThanOne = numbers.every((element) => element>1);
console.log("Are all numbers greater than 1? ", allEven);

//Ex3: Check if all the element are positive numbers
let allPositive = numbers.every((element) => element>0);
console.log("Are all numbers positive? ", allPositive);

