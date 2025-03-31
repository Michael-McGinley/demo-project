//JS looks at a prototype chain when calling a property

const coursePrototype = {
    title: "Title",
    id: "123",
    author: "Unclear",
    mark: function () {
        someFunction(this);
    }
};

const newCourse = Object.create(coursePrototype);
newCourse.title = "Untitled";
newCourse["id"] = "456";
newCourse.colour = "#00aced";
const hasColour = Object.hasOwn(newCourse, "colour");

Object.defineProperty(newCourse, "author", {
    writable: false,
});

for (const [key, value] of Object.entries(newCourse)) {
    console.log(`${key}: ${value}`);
}

const course2 = newCourse;
//const course2 = {...newCourse};
const course3 = newCourse;
course2.title = "Retitled";
//console.log(newCourse.title);

Object.assign(course3, newCourse);

const someFunction = function (course){
    course.title = "Title changed";
}
newCourse.mark();