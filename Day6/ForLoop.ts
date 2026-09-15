// For Loop: A for loop is typically used when the number of iterations is known beforehand.

/*
Syntax:
for(initialization; condition; incrementation/decrementation)
{
    statements;
}
*/

//Example1: print 1 to 10

/* for (let i = 1; i <= 10; i++) {
    console.log(i);
} 
*/


//Example 2: print even numbers from 1 to 10
//method1
/* for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
*/

//method2
/* for (let index = 1; index <=10; index++) {
    if(index%2==0){
        console.log(index);
    }
}
*/


//Example 3: 10 to 1
/* for(let i = 10; i >=1; i--){
    console.log(i);
}
*/


//Example4:
/* let i: number;
for(i=1; i<=5; i++){
    console.log(i); // 1...5
}

console.log(i); //6
*/

let i: number;
for (i = 1; i <= 5; i++);

console.log(i); //6