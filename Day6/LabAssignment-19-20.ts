/*
Continue
19. Write a program to print the odd numbers from 1 to 20 using a for loop. Use the
continue statement to skip even numbers.
20. Write a program to print numbers from 1 to 30, but skip numbers that are multiples of 5.
Use the continue statement within a while loop.
*/
console.log("=========== Continue ============");

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log("19. " + i);
}

let x = 1;
while (x <= 30) {

    if (x % 5 === 0) {
        x++;
        continue;
    }

    console.log("20. " + x);
    x++;
}

/*
Break
21. Write a program to find and print the first even number between 1 and 10 using a for
loop. Use the break statement to exit the loop as soon as you find the first even number.
22. Write a program to print numbers from 1 to 30. Stop printing and exit the loop when you
find a number greater than 15. Use the break statement within a for loop.
*/

console.log("=========== Break ============");

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("21. Even number found: " + i);
        break;
    }

}

for (let i = 1; i <= 30; i++) {
    if (i > 15) {
        console.log("22. Number greater than 15 found: " + i);
        break;
    }

}
