/*
If condition:
1. Check if a character is uppercase.
2. Check if a number is a multiple of 10.
*/
console.log("=========== If condition ============");
let a: string = 'B';
if (a.toUpperCase() === a) {
    console.log("1. " + a + " is capped");
}

let num: number = 110;
if (num % 10 == 0) {
    console.log("2. " + num + " is a multiple of 10.");
}


/*
If else condition:
3. Check if a person is a teenager (age between 13 and 19).
4. Compare two numbers and print the larger one.
5. Check if a number is positive, negative, or zero.
6. Check if a person is eligible for a senior citizen discount (age >= 60).
*/
console.log("=========== If else condition ============");
let age: number = 25;
if (age >= 13 && age <= 19) {
    console.log("3. you are a teenager");
} else {
    console.log("3. you are not a teenager");
}

let x: number = 4, y: number = 6;
if (x - y > 0) {
    console.log(`4. x: ${x} is a larger number.`);
} else if (x - y < 0) {
    console.log(`4. y: ${y} is a larger number.`);
} else {
    console.log("4. both numbers are equal.")
}

let num2: number = 14;
if (num > 0) {
    console.log("5. Positive");
} else if (num < 0) {
    console.log("5. Negative");
} else {
    console.log("5. Zero");
}

let age2: number = 63;
if (age2 >= 60) {
    console.log(`6. You are eligible for a senior citizen discount (age: ${age2}`);
} else {
    console.log(`6. You are not eligible for a senior citizen discount (age: ${age2}`)
}



/*
Nested if else:
7. Check if a number is positive and even.
8. Check if a character is an uppercase vowel.
9. Find the largest of three numbers.
10. Check if a number is a multiple of both 5 and 10.
11. Check if a character is a vowel or consonant.
12. Check if a number is divisible by both 2 and 3.
*/
console.log("=========== Nested If else condition ============");
let num3: number = 5;
if (num3 > 0) {
    console.log("7. " + num3 + " is positive number.");
    if (num3 % 2 == 0) {
        console.log("7. " + num3 + " is an even number");
    } else {
        console.log("7. " + num3 + " is not an even number");
    }
} else {
    console.log("7. " + num3 + " is not positive number.");
}

let str: string = "A";
if (str === str.toUpperCase()) {
    if (str === 'A' || str === 'I' || str === 'E' || str === 'O' || str === 'U') {
        console.log("8. This is a uppercase vowel character");
    } else {
        console.log("8. This is a uppercase consonant character");
    }
} else {
     if (str === 'a' || str === 'i' || str === 'e' || str === 'o' || str === 'u') {
        console.log("8. This is a lowercase vowel character");
    } else {
        console.log("8. This is a lowercase consonant character");
    }
}


let num4 = 10, num5 = 17, num6 = 444, temp;
temp = num4;

if (num5 > temp) {
    temp = num5;
    if (temp > num6) {
        console.log("9. " + num5 + " is the largest number");
    } else {
        console.log("9. " + num6 + " is the largest number")
    }

}
else {
    console.log("9. " + num4 + " is the largest number");
}

let num7: number = 110;
if (num7 % 5 == 0) {
    if (num7 % 10 == 0) {
        console.log("10. " + num7 + " is a multiple of both 5 and 10");
    } else {
        console.log("10. " + num7 + " is not a multiple of 10");
    }
} else {
    console.log("10. " + num7 + " is not a multiple of 10");
}

let char: string = "23";
let lowerChar = char.toLowerCase();
if (lowerChar >= 'a' && lowerChar <= 'z') {
    if (lowerChar === 'a' || lowerChar === 'i' || lowerChar === 'e' || lowerChar === 'o' || lowerChar === 'u') {
        console.log("11. This is a vowel character");
    } else {
        console.log("11. This is a consonant character");
    }
} else {
    console.log("11. This is not a valid alphabetic letter.");
}

let num8: number = 17;
if (num8 % 2 === 0) {
    if (num8 % 3 === 0) {
        console.log("12. " + num8 + " is a multiple of both 2 and 3");
    } else {
        console.log("12. " + num8 + " is not a multiple of 3");
    }
} else {
    if (num8 % 3 === 0) {
        console.log("12. " + num8 + " is a multiple of 3, but NOT 2.");
    } else {
        console.log("12. " + num8 + " is neither a multiple of 2 nor 3.");
    }
}

/*
Switch case:
13. Print the corresponding month name for a given month number.
14. Perform basic arithmetic operations based on user input.
15. Print the season based on the month number.
*/
console.log("=========== Switch case ============");
let month:number = 6;
switch(month){
    case 1: console.log("13. January"); break;
    case 2: console.log("13. Febuary"); break;
    case 3: console.log("13. March"); break;
    case 4: console.log("13. April"); break;
    case 5: console.log("13. May"); break;
    case 6: console.log("13. June"); break;
    case 7: console.log("13. July"); break;
    case 8: console.log("13. August"); break;
    case 9: console.log("13. September"); break;
    case 10: console.log("13. October"); break;
    case 11: console.log("13. November"); break;
    case 12: console.log("13. December"); break;
    default: console.log("13. Invalid month.");
}

let n1 = 24, n2 = 63, op = "division";
switch(op){
    case "addition": console.log(`14. ${n1} + ${n2} =  ${n1+n2}`); break;
    case "subtraction": console.log(`14. ${n1} - ${n2} =  ${n1-n2}`); break;
    case "multiplication": console.log(`14. ${n1} * ${n2} =  ${n1*n2}`); break;
    case "division": console.log(`14. ${n1} / ${n2} =  ${n1/n2}`); break;
    default: console.log("14. invalid operation.");
}

let season = 4;
switch(season){
    case 1: console.log(`15. ${season} - Spring`); break;
    case 2: console.log(`15. ${season} - Summer`); break;
    case 3: console.log(`15. ${season} - Autumn`); break;
    case 4: console.log(`15. ${season} - Winter`); break;
    default: console.log("15. invalid season.");
}