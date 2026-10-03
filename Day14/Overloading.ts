// Method Overloading and Constructor Overloading in TypeScript

class Calculator {

    //Contructor Overloading
    constructor(); //default constructor
    constructor(a: number, b: number); //parameterize constructor

    constructor(a?: number, b?: number) {
        if (a !== undefined && b !== undefined) {
            console.log("Sum of a & b: ", a + b);
        } else {
            console.log("Default constructor called...");
        }
    }

    //Method Overloading
    add(a: number, b: number): number;
    add(a: number, b: number, c: number): number;

    add(a: number, b: number, c?: number): number {
        if (c !== undefined) {
            return a + b + c;
        }

        return a + b;
    }


}

//Usage

//Constructor overloading
let cal1 = new Calculator();
let cal2 = new Calculator(20, 32);

//Method overloading
console.log("\nAdding 2 numbers from cal1 object: ", cal1.add(21,41));
console.log("Adding 3 numbers from cal1 object: ", cal1.add(21,41,123));

console.log("\nAdding 2 numbers from cal2 object: ", cal2.add(32,41));
console.log("Adding 3 numbers from cal2 object: ", cal2.add(10,234,123));
