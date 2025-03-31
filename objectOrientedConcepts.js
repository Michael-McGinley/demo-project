//Encapsulation
//Composition
//Inheritance
//Polymorphism

function Person(firstName, lastName, age){
    const privateVar = "Private";
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.personFunction = function (){
        return privateVar;
    };
}
Person.staticProperty = "Static"
Person.staticFunction = function (text){
    return text;
}
//Define methods on the prototype
Person.prototype = {
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(fullName){
        let nameParts = fullName.split(" ");
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
    }
};
//Person.prototype.someFunction = function() {}
let jim = new Person("Jim", "Cooper", 29);
jim.fullName = "John Doe";
console.log(jim.fullName);
console.log(jim.staticProperty);
console.log(Person.staticFunction(Person.staticProperty));

function Student(firstName, lastName, age) {
    Person.call(this, firstName, lastName, age);
    this.courses = [];
    this.enroll = function (course){
        this.courses.push(course);
    }
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
//Object.setPrototypeOf(Student, Person);
let chris = new Student("Chris", "Chrisson", 29);
console.log(chris.firstName);
console.log(chris instanceof Student);