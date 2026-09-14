//if condition

/*

if(condition)
{
    //statements
}

*/

//Example 1: If age is greater than or equal to 18, the message "You are eligible to vote." will be printed
/* let age:number = 20;

if(age >= 18){
    console.log("You are eligible to vote.");
} 
*/


/* 
if(condition){
    statements;
}
else
{
    statements;
}
*/
//Example 2: if num is divisible by 2, it is even; otherwise, it is odd.
/* 
let num: number = 10;

if (num % 2 == 0) {
    console.log(num + " is even number");
} else {
    console.log(num+ " is odd number")
}
*/


//Nested if else

/*
if(condition 1)
{
    statements;
}else if(condition 2)
{
    statements;
}else if(condition 3)
{
    statements;  
}
else
{
    statements;    
}

*/
//Example 3: Depending on the marks, display appropriate grade
/* 
marks >=90 Grade A
marks >=75 Grade B
marks >=60 Grade C
Grade D
*/
/* 
let marks: number = 67;
if (marks >= 90 && marks <= 100) {
    console.log("Grade A");     //condition 1
} else if (marks >= 75 && marks < 90) {
    console.log("Grade B");     //condition 2
} else if (marks >= 60 && marks < 75) {
    console.log("Grade C");     //condition 3
} else {
    console.log("Grade D"); 
}
*/

//Example 4: Browser selection
/* 
let browser: string = 'chrome';
if (browser === "chrome") {
    console.log("Browser is chrome");
} else if (browser === "firefox") {
    console.log("Browser is firefox");
} else if (browser === "safaru") {
    console.log("Browser is safari");
} else {
    console.log("Other browser");
}
*/

//switch case statement
/*
switch(expression){
case value 1:   statements;
                break;

case value 2:   statements;
                break;

case value 3:   statements;
                break;
default: statements;

}

*/
//Example 5: Depending on the value of day, print the corresponding day of the week.
/* let day:number = 10;

switch(day){
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid weekday.")
}
*/



//Example 6: The switch statement can also include an expression
let x:number =5, y:number =5;

switch(x-y) //expression
{
    case 0: console.log("Result zero"); break;
    case 5: console.log("Result is Five"); break;
    case 10: console.log("Result is Ten"); break;
    default: console.log("Result is something else");  break;
}