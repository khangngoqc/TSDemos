//// Anonymous Function (Unamed Function/Nameless Function)

/*
    An anonumous function is a function that does not have a name.
    Instead, it is assigned to a variable, which acts as its name.

    Syntax:
    let variable = function(parameters){
        //function body
    }

    variable(); //calling the function
*/

//Example 1: Anonymous function
/* 
let msg = function (): string {
    return "Hello TypeScript!";
}
console.log(msg()); 
*/


//Example 2: Anonymous Function wih Parameters
let multiply = function(a:number, b:number):number{
    return a * b ;
}

console.log(multiply(5, 6)); //30