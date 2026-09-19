////Arrow Function / Lambda Function

/*
Lambda refers to anonymous functions in programming.
Lambda functions are concise mechanism to represent anonymous functions
These functions are also called as Arrow functions.

There are 3 parts to a Lambda function.

1. Parameters - A function may optionallu have parameters
2. The fat arrow notation/lambda notation (=>) -  It is also called as the "goes to operator"
3. Statements - represent the functions instruction set

Syntax:
    let variable = (parameters) =>
    {
        //block of code
    }

    variable();

*/


//Example 1:  Arrow Function with No Parameters and No return type
let greet = (): void => {
    console.log("Hello TypeScript");
}

greet();


//Example 2: Arrow function with Parameters and a Return type

/* 
let add = (a:number, b:number):number =>{
    return a+b;
}
console.log(add(10,34)); //44
*/

//Example 3:  Arrow Function with Implicit Return;
/* let mul = (a:number, b:number):number => a*b;
console.log(mul(13,35)); //445
*/

//Example 4: arrow function with optional paramenter
let display = (id: number, name: string, email?: string) => {
    console.log("ID: ", id);
    console.log("Name: ", name);
    if (email !== undefined) {
        console.log("Email: ", email);
    }
}

display(12, "Khang", "test@gmail.com");
display(12, "Lam");

//Example 5: Arrow function with parameters
let caculateDiscount = (price: number, rate: number = 0.5) => {
    let discount = price * rate;
    console.log("Discount Amount: ", discount);
}

caculateDiscount(10000, .2);
caculateDiscount(10000);


//Example 6: Arrow function with Rest parameters
let findElements = (...elements: any[]): number => {
    return elements.length;
}

console.log(findElements(12, "hiwe", 2151, true, "sadsqf")); //5