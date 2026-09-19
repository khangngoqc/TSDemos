//Named function: A function that is declared with a name

/*
function functionName(parameter): returnType
{
    //block of code
}

functionName():  //calling the function/invoking the function

*/

//Example Named Function with no parameters and no return type

/* 
function display():void {
    console.log("Welcome to TypeScript");
}

display(); //calling function
*/

//Example 2: Named function with parameters and return type

/* 
function addNumbers(x:number, y:number):number
{
    return x + y;
}

let result = addNumbers(2,3);
console.log(result); // 5
console.log(addNumbers(2,3)); //5 
*/


//Example 3: Named function with Rest parameters - same parameter type
//Rest parametes dont restrict the number of valies that you can pass to a function
/* 
function addNumbers(...nums:number[])
{
    let i;
    let sum:number = 0;
    for(i = 0; i <nums.length; i++){
        sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum);
}

addNumbers(4, 5, 1, 12); //22 
*/

//Example 4: Named function with Rest parameters - multiple types
/* function findElements(...elements: (number | string)[]): number 
{
    return elements.length;   
}

let res = findElements(3, "John", 61, "Scott", 2, 1111);
console.log(res); //6 
*/


//Example 5: Named function with Optional Parameters
/* 
\function displayDetails(id: number, name: string, mailId?: string): void {

    console.log("ID: ", id);
    console.log("Name: ", name);
    if (mailId !== undefined) {
        console.log("Email: ", mailId);
    }

}

displayDetails(123, "John Doe", "JD@gmail.com");
displayDetails(123, "John Doe");
*/

//Example 6: Named function with default parameters
function calculateDiscount(price: number, rate: number = 0.50): void {
    let discount: number = price * rate;
    console.log("Discount Amount: ", discount);
}

calculateDiscount(10000, 0.35);
calculateDiscount(10000);


