import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const r1 = readline.createInterface({ input, output });

async function main(): Promise<void> {

    let choice: number;
    do {
        console.log("==============8. arithmetic operations==============");
        console.log("1.addition ");
        console.log("2.subtraction ");
        console.log("3.multiplication ");
        console.log("4.division ");
        console.log("5.Exit ");

        choice = Number(await r1.question("Enter your choice(1-5): "));

        if (choice >= 1 && choice < 5) {
            const num1 = Number(await r1.question("Enter first number: "));
            const num2 = Number(await r1.question("Enter second number: "));

            if (Number.isNaN(num1) || Number.isNaN(num1)) {
                console.log("Invalid number input. Try again");
            } else if (choice === 1) {
                console.log(`Result: ${num1} + ${num2} = ${num1 + num2}`)
            } else if (choice === 2) {
                console.log(`Result: ${num1} - ${num2} = ${num1 - num2}`)
            } else if (choice === 3) {
                console.log(`Result: ${num1} * ${num2} = ${num1 * num2}`)
            } else if (choice === 4) {
                console.log(`Result: ${num1} / ${num2} = ${num1 / num2}`)
            }

        } else if (choice === 5) {
            console.log("Existing the program. Bye!");
        } else {
            console.log("Invalid choice. Please select a number between 1 to 5");
        }

    } while (choice !== 5);

    r1.close();
}

main();