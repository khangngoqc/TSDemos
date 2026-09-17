console.log("=========== For loop ============");
/*
For loop
9. Print Multiples of 5 from 5 to 50
10. Print Prime Numbers between 1 and 50
11. Print Sum of Even Numbers between 1 and 20
12. Print Sum of Odd Numbers between 1 and 20
13. Print Table of 7
14. Print Numbers Divisible by 3 and 5 from 1 to 100
15. Count Number of Digits in a Number
16. Find Sum of Digits in a Number
17. Print Multiples of 7 between 1 and 100
18. Calculate the sum of all even numbers from 1 to N. */

for (let i = 5; i <= 50; i++) {
    if (i % 5 === 0) {
        console.log("9. " + i);
    }
}

let isPrime: boolean = true;

for (let i = 2; i <= 50; i++) {

    isPrime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
        console.log("10. " + i);
    }
}

let evenSum: number = 0;
let oddSum: number = 0;

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        evenSum = evenSum + i;
    } else {
        oddSum = oddSum + i;
    }
}
console.log("11.  Sum of Even Numbers between 1 and 20: " + evenSum);
console.log("12.  Sum of Odd Numbers between 1 and 20: " + oddSum);


for (let i = 1; i <= 10; i++) {
    console.log(`13. 7 * ${i}  = ${7 * i}`);
}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("14. " + i);
    }
}

let input15: number = 214125165;
let temp: number = input15;
let count: number = 0;
let digitSum: number = 0;
for (let i = 1; temp > 0; i++) {

    let digit = temp % 10;

    temp = Math.floor(temp / 10);

    digitSum = digitSum + digit;

    count++;
}

console.log("15. Number of digits in " + input15 + " is: " + count);
console.log("16. Sum of Digits in " + input15 + " is: " + digitSum);


for (let i = 1; i <= 100; i++) {

    if (i % 7 === 0) {
        console.log("17. " + i);
    }

}

let input18: number = 18;
let sum18 = 0;
for (let i = 0; i <= input18; i++) {
    if(i%2===0){
        sum18 += i;
    }
    
}
console.log("18. Sum of even numbers from 1 to " + input18 +" is: " +sum18);
