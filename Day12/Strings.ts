//Declaration of strings
let str1: string = 'This is a string with single quote.'
let str2: string = "This is a string with double quote."
let str3: string = `This is a string with back tick.`

console.log(str1);
console.log(str2);
console.log(str3);

let num: number = 10;
console.log("\nNumber is: ", num); //Number is: 10 //valid
console.log("Number is: ${num}"); //invalid
console.log('Number is: ${num}'); //invali
console.log(`Number is: ${num}`); //Number is: 10 //valid

//String methods
let str: string = "Hello, TypeScript!";

//1. lenght - find the length of a  string (how many number of characters)
console.log("\nLength of a string: ", str.length); //18

//2. toUpperCase() and toLowerCase()
console.log("\nUpper case:", str.toUpperCase()); //HELLO, TYPESCRIPT!
console.log("Lower case:", str.toLowerCase());  //hello, typescript!

//3. charAt() and indexOf()
console.log("\nCharacter at 4th index: ", str.charAt(4)); //o
console.log("Index of 'Type':", str.indexOf("Type"));

//4. substring(starting index, ending index)
//ending index is exclusive
// "Hello, TypeScript!"
console.log(str.substring(0, 5)); //Hello

//5. includes() returns true or false(boolean)
//string value is case sensitive
console.log(str.includes("abc")) //false
console.log(str.includes("TypeScript")) //true
console.log(str.includes("!")) //true
console.log(str.includes("TYPESCRIPT")) //false

//6. startWith() and endWith() --> returns a boolean value(true/false)
console.log("\nstarts with:", str.startsWith("Hello")) //true
console.log("ends with: ", str.endsWith("!")) //true  

console.log("ends with: ", str.endsWith("abc"))


//7. replace(
//"Hello, TypeScript!"
console.log("\nReplace string: ", str.replace("TypeScript", "World")); //Hello World

//8, split() - break the string into multipe parts based on the delimeter, returns an array
//Ex1:
let words:string[] = str.split(" ");
console.log("\nAfter spliting a string",  words);

//Ex2:
let myString:string = "abc@gmail.com,xyzabc,abc"
let arr = myString.split(",");
console.log("\nemail: ", arr[0]);
console.log("password: ", arr[1]);

//9. trim(), trimStart(), trimEnd()
myString = "   welcome to typescript   ";
console.log("\nOriginal string:", myString);
console.log("Trim string:", myString.trim());
console.log("TrimStart string:", myString.trimStart());
console.log("TrimEnd string:", myString.trimEnd());

//10.concat()
str1 = "welcome";
str2 = "to typescript";
str3 = "and javascript"

console.log("\nAfter concatination:", str1.concat(str2));
console.log("After concatination:", str1 +str2);

console.log("welcome".concat(str2));

console.log(str1.concat(str2).concat(str3))



//concept of string immutability 
let n:number = 10;
let res = n +5;
console.log(res); //15
console.log(n); //10

str1 ="welcome";
let modifiedString = str1.concat("to typescript");
console.log(str1); //welcome


//Multiline string
let multiline:string = `\nwelcome 
                        to typescript`;

console.log(multiline);
