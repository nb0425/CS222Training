// console.log('Hello World');
// console.error('errorrrrrr');
// console.warn('whops');


// let age = 30;
// console.log(age);
//let variables can be changed --> let score

//const can't be changed --> always use const when you don't want to reassign
//you have to have a value initialized if you use const


//data types:
//String, Numbers, Boolean, null, undefined

const name = "Niharika";
const age = 19;
const rating = 4.5;
//no float or decimal dating type
const isAwesome = true;
const y = null;
let z;
const x = undefined;
console.log(typeof age);


//Concacetation:
//use (+) or $
console.log("My name is " + name);
const hello = `my name is ${name} and I am ${age} old`
console.log(hello);

//String
//use console.log(name.length) to find length of string
console.log(name.length);

console.log(name.substring(0,2).toUpperCase());

const spreadsheet = "homepage, sign in page, buyer page, seller page";

console.log(spreadsheet.split(", "));


//Arrays 
const arrayval = new Array(1, 2, 4, 5);
console.log(arrayval);

//Method2:
const fruit = ["pears", "oranges", "apples", age, isAwesome];
console.log(fruit);
console.log(fruit[0]);
//adding at end
fruit.push("watermelon");
//adding at front
fruit.unshift("grapes");

//take the last one off
fruit.pop();
console.log(fruit);
//Checking 
console.log(Array.isArray(fruit));
console.log(fruit.indexOf('grapes'));



//Making object

const person = {
    firstName: "Niha",
    lastName: "Bhattacharjee",
    age: 19,
    hobbies: ["painting", "drawing", "taekwondo"],
    address: {
        street: 'somewhereroad',
        city: 'somewherecity',
        state: 'somewherestate'
    }
}

console.log(person.hobbies[1]);
console.log(person.address.city);

//pulling it out

const {firstName, lastName, address: {state}} = person;
console.log(state);

//you can add properties too

person.email = "@email";
console.log(person);


const todos  = [
{
    id: 1,
    text: "Take out trash",
    isComplete: false
},

{
    id: 2,
    text: "Make food",
    isComplete: true
},

{
    id: 3,
    text: "Finish hw",
    isComplete: true
}
];

console.log(todos[1].text);
//converttoJson

const todosJson = JSON.stringify(todos);
console.log(todosJson);



//for (let i = 0; i < 10; i++)


//While
// let i = 0;
// while (i < 10) {
//     i++
// }


//enhanced for loop
for(let elements of todos) {
    console.log(elements.id);
    
}

//foreach, map,filter

const todoCompletd = todos.filter(function(element) {
    return element.isComplete == false;
});




const todoCompleted2 = todos.filter(function(element) {
    return element.isComplete == false;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted2)


//if statements

//if (x == 10)

const variable = "10";

if (variable === 10) {
    console.log("hi");
}
//=== matches the value and the datatype, "10" and 10 are not the same, string vs int


function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.birthYear = function() {
        return this.dob.getFullYear();
    }
}

const person1 = new Person("Aditi", "T", "3-4-2005");

console.log(person1.birthYear());

//you can add methods outside of Person function constructor too


Person.prototype.college = function() {
    return "UIUC";
}

console.log(person1.college());

class Student {
    constructor(graduation, major, currentyear, dob) {
        this.graduation = graduation;
        this.major = major;
        this.currentyear = currentyear;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear;
    }
}




























