/*
1. An interface in TypeScript is a way to dine the structure of an object
2. It tells the compiler what properties and types an object should have
3. It's like a blueprint for objects

Abstract method: we only signature of the method(there is no implementation)

interface InterfaceName{

    properties
    abstract methods

}

1 Regular properties
2 Optional properties
3 Readonly propertoes & function types
4 Extending interface
5 Class implements interface

*/

//Example 1: Basic interface


interface Person {
    name: string;
    age: number;
}

let student: Person = {
    name: "Khang",
    age: 25
};

console.log(student.name); //Khang
console.log(student.age); //25

console.log(student);  //{ name: 'Khang', age: 25 }


//Example 2: Optional Properties (?)
interface Employee {
    id: number;
    name: string;
    department?: string; //optional property
}

let emp: Employee = {
    id: 101,
    name: "Hiển",
}

let emp1: Employee = {
    id: 102,
    name: "Quý",
    department: "Account"
}

console.log(emp.id, emp.name, emp.department); //101 Hiển undefined
console.log(emp1.id, emp1.name, emp1.department); //102 Quý Account


//Example 3: Readonly properties (readonly to prevent modification) & Function type
interface book {
    title: string;
    readonly isbn: string;

    display(): void; //abstract method
}

let b1: book = {
    title: "Tà Dương",
    isbn: "123-abc",

    display() {
        console.log(b1.title, b1.isbn);
    }
}

b1.display();
console.log(b1.title); //Tà Dương
console.log(b1.isbn); //123-abc
console.log("After changing values...");
b1.title = "Nhân giang thất cách";
console.log("After chaning title: ", b1.title);
//b1.isbn = "123-xyz"; //Error: cannot assign to 'isbn' because it is a read-only property


//Example 4: Extending Interface(Inheritance is applicable)
//Parent Interface
interface Animal {
    name: string;
}

//Child Interface
interface Dog extends Animal {
    color: string;
}

let myDog: Dog = {
    name: "Snoppy",
    color: "White",
}

console.log(myDog.name, myDog.color); //Snoppy White


//Example 5:
// class can extends another class
// interface can extends another interface

// class can implement interface

interface Animal2 {
    name: string;
    sound(): void;

}

class Cat implements Animal2 {
    name: string; //inherited from interface Animal
    color: string = "Red"; // property belongs to Dog

    constructor(name: string, color:string) {
        this.name = name;
        this.color = color;
    }

    sound(): void {
        console.log("bark...");
    }
}

let pet = new Cat("Snoppy","Red");
console.log(pet.name);
console.log(pet.color);
pet.sound();
