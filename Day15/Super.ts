//super() - used to invoke immediate parent class constructor
//super - used to invoke immediate parent class method
//super - can no be used to invoke the parent class property. (In Java, it is possible)

class Parent {

    num: number = 10;
    constructor() {
        console.log("This is Parent class constructor");
    }

    display() {
        console.log("This is display() from Parent class");
    }
}

class Child extends Parent {
    
    num: number = 20; //overriden

    constructor() {
        super(); //this will call parent class constructor (MUST be called)
        console.log("This is child class constructor");
    }

    show(){
        console.log(this.num); //20 //parent's num //TS does not super.num to access parent class properties like in Java
        console.log("This is show() method from Child class.");
    }

    //overriden method
    display(): void {
        super.display(); // this  will invoke parent class method
        console.log("This is display() method from Child class");
    }
}


let c1 = new Child();

c1.show(); //child class
c1.display(); //child class