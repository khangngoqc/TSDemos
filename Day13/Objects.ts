//objects -  object contains properties and behaviour.
// object contains variables & methods
// object is collection of key and value pairs.

//Ex:
//  employee --name, design, sal, dep
//          bonus(), getempdetail(), setdetail()

//student - name, sid, grade
//          getdetails(), setdetails()    

// Different ways to create an object in JS/TS //
// 1. using 'object' type - Directly define the values for variable(JS/TS)
// 2. Inline Type Object - we also define the datatype of the keys (TS)
// 3. Using type aliases (JS/TS)
// 4. Using the classes (JS ES16/TS)


// 1.  using 'object' type - Directly deifne the values for variable
// The TypeScript 'object' type represent all values that are not in primitive types.

/* 
let employee:object = {
    name:"John", 
    age:30, salary: 
    50000, 
    job: "Engineer"
};
*/

let employee = {
    name: "John",
    age: 30,
    salary: 50000,
    job: "Engineer",
    getDetails: function () {
        //console.log(this.name, this.age, this.salary, this.job);
        return `${this.name} is a ${this.job} earning ${this.salary}`;
    }
};

console.log(typeof employee); //object

//accessing object - approach 1 (using. notation)
console.log(employee.name, employee.salary, employee.job);
console.log(employee.getDetails());

//accessing object - approach 2(using braket notation)
console.log(employee["name"], employee["salary"], employee["job"]);
console.log(employee["getDetails"]());

//Modify the value
//employee.job = "Manager";
employee["job"] = "Manager";
console.log("Modified job is: ", employee.job);

//======================================================================

// 2. Inline Type Object - we also define the datatype of the keys (TS)
let student: {
    name: string,
    age: number,
    grade: string,
    getSummary: () => string;
} =
{
    name: "Khang",
    age: 25,
    grade: "A",
    getSummary: function () {
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
    }
}

console.log(student.getSummary()); //Khang is 25 years old and scored grade A

let student1: {
    name: string,
    age: number,
    grade: string,
    getSummary: () => string;
} =
{
    name: "Nguyên",
    age: 31,
    grade: "A",
    getSummary: function () {
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
    }
}

console.log(student1.getSummary());

//======================================================================

// 3. Using 'type' aliases (TS): allows creating a new name for an existing type
//Example 1:
type Product = {
    name: string,
    price: number,
    getInfo: () => string
}

let book1: Product =
{
    name: "TypeScript for Dummies",
    price: 300,
    getInfo: function () {
        return `${this.name} costs ${this.price}`
    }
}

let book2: Product =
{
    name: "Playwright for Dummies",
    price: 500,
    getInfo: function () {
        return `${this.name} costs ${this.price}`
    }
}

let book3: Product =
{
    name: "Automation for Dummies",
    price: 600,
    getInfo: function () {
        return `${this.name} costs ${this.price}`
    }
}

console.log(book1.getInfo()) //TypeScript for Dummies costs 300
console.log(book2.getInfo()) //Playwright for Dummies costs 500
console.log(book3.getInfo()) //Automation for Dummies costs 600

//Ex 2: Intersection Types
type Personal = {
    name: string,
    age: number
};
type Contact = {
    email: string,
    phone: number
}

type Candidate = Personal & Contact & {
    getContactInfo: () => string;
}

let cand: Candidate = {
    name: "Dũng",
    age: 31,
    email: "dung@gmail.com",
    phone: 123456789,
    getContactInfo: function () {
        return `${this.name} can be contacted at ${this.email} or ${this.phone}`
    }
}
console.log(cand.getContactInfo()); //Dũng can be contacted at dung@gmail.com or 123456789

//======================================================================
// 4. using the classes (JS ES16/TS)
class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }

    getDetail(): string {
        return `SSN: ${this.ssn}, Name: ${this.getFullName()}`
    }
}
//object creation
let person1 = new Person('1256', "John", "Doe");

console.log("\nPerson 1 detail  :", person1.getDetail());
console.log("Person 1 full name: ", person1.getFullName());

let person2 = new Person('515', "Jane", "Doe");

console.log("\nPerson 2 detail  :", person2.getDetail());
console.log("Person 2 full name: ", person2.getFullName());

let person3 = new Person('312123', "David", "Scott");

console.log("\nPerson 3 detail  :", person3.getDetail());
console.log("Person 3 full name: ", person3.getFullName());