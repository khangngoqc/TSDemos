// A call back function: A function passed as an argument to another function and executed later
//Example 1: 
/* 
    function greet(name: string, callback:(msg: string) => void) 
{
    console.log(name);
    callback("Hello"); //executing callback function;
}

//callback function
function showMessage(msg: string) {
    console.log(msg);
}

//calling the function by passing the callback function
greet("John", showMessage);

*/

//Example 2:

function sum(a: number, b: number, callback: (res: number) => void) {
    callback(a + b);
}


//callback function 
function displayResult(result: number): void {
    console.log(result);
}

sum(10, 20, displayResult);

