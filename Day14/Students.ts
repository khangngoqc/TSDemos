/*
1. Class
2. Read only Properties
3. Optional property
4. Static variables(properties) and methods
    1) static propeties/methods care common/shared across all objects
    2) static propeties/methods can be accessed through class name directly
    3) static properties/methods can be modified using class
    4) we cannot use this for static properties, instead we can use class name
*/

class Student {
    readonly studentId: number; //Read-only property (can only be assigned once, inside constructor)
    name: string; //Regular property
    email?: string; //Optional property (can be undefined)
    static schoolName: string = "My An Secondary School"; //Static variable shared among all object

    //Constructor
    constructor(id: number, name: string, email?: string) {
        this.studentId = id;
        this.name = name;
        this.email = email; //If you dont pass a email then it is undefined
    }

    //Method
    displayInfo(): void {

        console.log("\nStudent id: ", this.studentId);
        console.log("Student name: ", this.name);

        if (this.email !== undefined) {
            console.log("Student email: ", this.email);
        } else {
            console.log("Email is not provided!");
        }

        console.log("School: ", Student.schoolName); // access statis property using Student (class name)

    }

    static changeSchoolName(newName:string){
        Student.schoolName = newName;
    }

}

//Usage
let s1 = new Student(101, 'Khang');
let s2 = new Student(102, 'Hiển', "hien.nguyen@gmail.com");

//Display student info
s1.displayInfo();
s2.displayInfo();

//Try to modify the sid of s1 object
//s1.studentId = 111; //Cannot assign to 'studentId' because it is a read-only property

Student.changeSchoolName("Duong Van Hoa Primary School");

//Display student info
console.log("\nDisplay student info after changing school name...");
s1.displayInfo();
s2.displayInfo();