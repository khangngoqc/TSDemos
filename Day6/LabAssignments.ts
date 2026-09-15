//While loop
/*
1. Write a program to calculate the sum of the first 10 natural numbers using a while loop.
2. Write a program to calculate the factorial of a given number using a while loop.
3. Write a program to reverse a given number using a while loop.
4. Write a program to check if a given number is a prime number using a while loop.
5. Write a program to find the largest digit in a given number using a while loop.
6. Write a program to check if a given number is a palindrome using a while loop. 
*/

let i = 1;
let sum = 0

while (i <= 10) {
    sum = sum + i;
    if (i === 10) {
        console.log("1. the sum of the first 10 natural numbers: " + sum);

    }
    i++
}

let num: number = 5;
let fac = 1;
let a = 1;
while (a <= num) {
    fac = fac * a;

    if (a === num) {
        console.log(`2. the factorial of number ${num}:  ` + fac);
    }

    a++;
}


let input: number = 334325;
let reversed: number = 0;
let remaining: number = Math.abs(input);

while (remaining > 0) {
    // 1. Get the last digit
    const lastDigit: number = remaining % 10;
    //console.log("last digit " + lastDigit);

    // 2. Append it to the reversed number
    reversed = (reversed * 10) + lastDigit;

    // 3. Remove the last digit from the remaining number
    remaining = Math.floor(remaining / 10);

    if (input < 0 && remaining === 0) {
        console.log("3. Reversed: " + -reversed);
    }

    if (input > 0 && remaining === 0) {
        console.log("3. Reversed: " + reversed);
    }
}

let input2: number = 67;
if (input2 < 2) {
    console.log("4. " + input2 + " is not a prime number");
} else {

    let isPrime = true;
    let temp = 2;

    while (temp <= Math.sqrt(input2)) {
        if (input2 % temp === 0) {
            isPrime = false;
            console.log(`4. ${input2} is not a prime number.`);
            break;
        }
        temp++;
    }

    if (isPrime = true) {
        console.log("4. " + input2 + " is a prime number")
    } else {
        console.log(`4. ${input2} is not a prime number.`);
    }
}


let input3 = 3252523;
let largest = 0
let remain = input3;
while (remain > 0) {

    const lastDigit = remain % 10;

    if (lastDigit > largest) {
        largest = lastDigit;
    }
    //console.log("5. largest digit: " + largest);

    remain = Math.floor(remain / 10);

    if (remain === 0) {
        console.log("5. largest digit: " + largest);
    }
}


let input4: number = 131313;
let reversedInput4: number = 0;
let remaining4: number = Math.abs(input4);

while (remaining4 > 0) {
    // 1. Get the last digit
    const lastDigit: number = remaining4 % 10;
    //console.log("last digit " + lastDigit);

    // 2. Append it to the reversed number
    reversedInput4 = (reversedInput4 * 10) + lastDigit;

    // 3. Remove the last digit from the remaining number
    remaining4 = Math.floor(remaining4 / 10);

    if (remaining4 === 0 && reversedInput4 === input4) {
        console.log("6. " + reversedInput4 + " is a palindrome.");
    } else if (remaining4 === 0 && reversedInput4 !== input4) {
        console.log("6. " + reversedInput4 + " is not a palindrome.");
    }
}