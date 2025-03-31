class Person {
    firstName = "";
    lastName = "";
    age = 0;
    static staticProperty = "Static";
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age =age;
    }
    exampleFunction(){
        return "This person's age is " + this.age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        let nameParts = fullName.split(" ");
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
    }
    getStaticValue(){
        return Person.staticProperty;
    }
    static getStaticValue(text){
        return text + Person.staticProperty;
    }
}

class Student extends Person{
    courses = [];
    constructor(firstName, lastName, age, courses) {
        super(firstName, lastName, age);
        this.courses = courses;
    }
    enroll(course){
        this.courses.push(course);
    }
}
let jim = new Student("Jim", "Cooper", 29);
console.log(jim.exampleFunction());