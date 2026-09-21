//step 1: write a signatures of functions
//step 2: implement a function
//step 3: calling function

//Example 1: Different parameter Type(data types)
/* function getInfo(id: number): string;
function getInfo(name: string): string;

function getInfo(param: number | string): string {
    if (typeof param === "number") {
        return `User id:  ${param}`;
    }
    else  {
        return `User name:  ${param}`;
    }
}

console.log(getInfo(101));
console.log(getInfo("John"));
*/


//Example 2: Different Number of Parameters
/* 
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

function add(a: number, b: number, c?: number): number {
    if (c === undefined) {
        return a + b;
    } else {
        return a + b + c;
    }
}

console.log(add(10, 23, 15));
console.log(add(21,44)); 
*/


//Example 3: different return type
/* 
function processInput(str:string):string;
function processInput(number:number):number;

function processInput(input: string | number): string | number
{
    if(typeof input == "string"){
        return `Input is string type ${input.toUpperCase()}`;
    }else{
        return `Input is number type ${Math.sqrt(input)}`;
    }
}

console.log(processInput("john"));
console.log(processInput(999));
*/


//Example 4: 
function greet(name: string): string;
function greet(age: number): string;
function greet(isMarried: boolean): string;

function greet(param: string | number | boolean): string {
    if (typeof param === "string") {
        return `User name is ${param}`;
    }
    else if (typeof param === "number") {
        return `User age is ${param}`;
    } else {
        let res = param ? "married" : "single";
        return `User is ${res}`;
    }
}

console.log(greet("John"));
console.log(greet(25));
console.log(greet(false));
