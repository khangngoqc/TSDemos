//Parent class
class Person {

    public name: string; //public property - access anywhere
    protected age: number; //protected property - accessible within the class and its subclasses
    private ssn: number; //private property - accessible only within this class

    constructor(name, age, ssn) {

        this.name = name;
        this.age = age;
        this.ssn = ssn;

    }

    displayInfo() {
        console.log("Name: ", this.name);
        console.log("Age: ", this.age);
        console.log("SSN: ", this.ssn);
    }
}

//Child class
class Employee extends Person {

    private employeeId: number;

    constructor(name: string, age: number, ssn: number, employeeId:number) {
        super(name, age, ssn);
        this.employeeId = employeeId;
    }

    showEmployeeDetail(){
        console.log("Name: ", this.name); //public - accessible
        console.log("Age: ", this.age); //protected - accessible
        //console.log("SSN: ", this.ssn); //Error:private property
        console.log("ID: ", this.employeeId); //private, still we can access it is declared inside the same class
    }

}

let emp = new Employee("Khang", 27, 123456, 18);
emp.displayInfo();
emp.showEmployeeDetail();

console.log(emp.name); //accessiible
//console.log(emp.age); //protected - not accessiible 
//console.log(emp.ssn); //private - not accessiible 
