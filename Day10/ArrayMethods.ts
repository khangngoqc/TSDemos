let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange", "mango"];

console.log("Numbers array: ", numbers); //[1,2,3,4,5]
console.log("Fruites array: ", fruits);  //["apple", "banana", "orange", "mango"]


//length - attribute  (not a method)
console.log("size of numbers array: ", numbers.length);
console.log("size of fruits array: ", fruits.length);

console.log("/////======== push() ========/////");
//1. push() -  Adds single/multiple elements to the end of an array
//Syntax: array.push(element, ..., elementN)
numbers.push(6, 7);
console.log("After push(): ", numbers);

//2. pop() - Removes the last element from an array
//Syntax: array.pop()
console.log("/////======== pop() ========/////");
let lastFruit = fruits.pop();
console.log("After pop(): ", fruits);
console.log("Removed fruit is: ", lastFruit);


//3.shift() - Remove th first element from an array
//Syntax:  array.shift()
console.log("/////======== shift() ========/////");
let fistNumber = numbers.shift();
console.log("After shift()", numbers);
console.log("Remove number: ", fistNumber);

//4. unshift() - Add single/multiple elements to the beginning of an array
//Syntax: array.unshift(element1,..., elementN)
console.log("/////======== unshift() ========/////");
fruits.unshift("kiwi", "pear");
console.log("After unshift():  ", fruits); //[ 'kiwi', 'pear', 'apple', 'banana', 'orange' ]


//5.concat() - combines two or mor arrays of same data types
//Syntax: array.concat(array1,...,arrayN)
console.log("/////======== concat() ========/////");
let concatNum = numbers.concat([8, 9], [10, 11, 12]);
console.log("Concatenated array: ", concatNum);

//6. slice() - Extracts a sectuib if an array
// starting index from zero
// Ending index will be exclusive. Ex: if 3 is Ending index it will consider 2 (3-1=2)
// Syntax: array.slice(start, end)
console.log("/////======== slice() ========/////");
///let extractedArray = fruits.slice(1,3);
let extractedArray = fruits.slice(2, 5);
console.log("After Slice(): ", extractedArray); //


//7. splice() - Adds/removes elements from an array(From everywhere)
//Syntax: array.splice(start, deleteCount, items1, ..., itemN)
console.log("/////======== splice() ========/////");

console.log("Current elements in fruits array: ", fruits); //[ 'kiwi', 'pear', 'apple', 'banana', 'orange' ]

//Ex1: only removing
let removedElements = fruits.splice(1, 2);
console.log("After slice(1,2): ", fruits); // [ 'kiwi', 'banana', 'orange' ]
console.log("Removed Elements: ", removedElements); // [ 'pear', 'apple' ]

//Ex2: not removed but added
fruits.splice(1, 0, 'pineapple', 'grape');
console.log("After slice(1, 0, 'pineapple', 'grape'): ", fruits); //[ 'kiwi', 'pineapple', 'grape', 'banana', 'orange' ]

//Ex3: both remove and add
fruits.splice(1,2,"mango","cherry");
console.log("After slice(1,2,'mango','cherry'): ", fruits); //[ 'kiwi', 'mango', 'cherry', 'banana', 'orange' ]


//8. indexOf() - Finds the index of an element, If element not found then return -1
//Syntax: array.indexOf(searchElement) (or) array.indexOf(searchElementm, Starting index)
console.log("/////======== indexOf() ========/////");

//Ex 1
let bananaIndex =  fruits.indexOf('banana');
console.log("Index of banana: ",  bananaIndex); //3

//Ex 2
let papayaIndex = fruits.indexOf('papaya');
console.log("Index of papaya: ", papayaIndex) //-1

//Ex 3
bananaIndex =  fruits.indexOf('banana', 2);


//9. includes() - Check if an element exists
//true or false
//Syntax: array.includes(searchElement, fromIndex)
console.log("/////======== includes() ========/////");

let isAppleExist:boolean = fruits.includes('apple');
console.log("Does fruit include apple? ", isAppleExist); //false

let isBananaExist:boolean = fruits.includes('banana');
console.log("Does fruit include apple? ", isBananaExist); //true

//10. toString() - Converts array to string
//Syntax array.toString()
console.log("/////======== toString() ========/////");
console.log(numbers); //[2,3,4,5,6,7]
let numbersString = numbers.toString();
console.log("Conver numbers[] to a string: ", numbersString);

let myArray:string[] = ['s','h','i','n','k','a'];
console.log("Orignal array: ", myArray );