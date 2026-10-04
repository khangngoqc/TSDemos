/*
Inheritance:  A class can reuse the properties and methods of another class.
    Inheritance is a mechanism where one class (child) can inherit the properties and methods of another class(parent)
    Inheritance allows you to reuse the functionality of an existing class without rewriting it.
*/

/*
Method Overriding:
A subclass/child class can provide a specific implementation of a method that is already defined in its superlass


*/


// A --- properties + methods  (Parent class/BaseClass/Super class)
// B extends A --- properties + methods (Child class/derived class/sub class)

//Parent class
class Car {
    name: string;
    color: string;
    model: string;

    constructor(name: string, color: string, model: string) {
        this.name = name;
        this.color = color;
        this.model = model;
    }

    start() {
        console.log("Car started...");
    }

    stop() {
        console.log("Car stopped...");
    }

    displayInfor() {
        console.log(`Name: ${this.name} | Color: ${this.color} | Model: ${this.model}`);
    }
}

//Child class - Honda
class Honda extends Car {
    year: number;

    constructor(year: number, name: string, color: string, model: string) {
        super(name, color, model);
        this.year = year;
    }

    //Method overriding
    start() {
        console.log("Honda started...");
    }

    yom() {
        console.log(`Name: ${this.name} | Color: ${this.color} | Model: ${this.model}`);
        console.log("Year of Manufactured: ", this.year);
    }

}


//Child class - Maruthi
class Maruthi extends Car{

    year: number;

    constructor(year: number, name: string, color: string, model: string) {
        super(name, color, model);
        this.year = year;
    }

    //Method overriding
    start() {
        console.log("Maruthi started...");
    }

    yom() {
        console.log(`Name: ${this.name} | Color: ${this.color} | Model: ${this.model}`);
        console.log("Year of Manufactured: ", this.year);
    }


}


//Usage
//Create Honda object
let honda = new Honda(2001, "Future 125", "Red", "Honda city");

console.log(honda.name);
console.log(honda.color);
console.log(honda.model);
console.log(honda.year);

honda.start();//Honda started...  //called child class method(overried)
honda.displayInfor(); //called parent class method
honda.stop(); //parent class
honda.yom(); //child class

console.log("======================================================================")

//Create Maruthi object
let maru = new Maruthi(2026, "super M", "White", "Maruthi Premium");
maru.start(); //child class
maru.displayInfor(); //parent class
maru.stop(); //parent class
maru.yom();

console.log("======================================================================")

//Parent class variable is holding child class object
let car:Car = new Honda(2001, "Future 125", "Red", "Honda city");
car.displayInfor();
car.start(); //Honda started... //overrided method fromt the Honda(child) class

car.yom(); //Not accessible, yom() defined inside the child class but not there in the parent

