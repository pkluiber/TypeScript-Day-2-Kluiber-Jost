"use strict";
class Person {
    constructor(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    printData() {
        return `My name is ${this.name} and I work a ${this.jobTitle}, I am ${this.age} years old.`;
    }
}
let person1 = new Person("Peter", 34, "Student");
document.getElementById("card").innerHTML = person1.printData();
// EXTENDS
class Saljob extends Person {
    constructor(name, age, jobTitle, salary, joblocation) {
        super(name, age, jobTitle);
        this.salary = salary;
        this.joblocation = joblocation;
    }
    printData() {
        return `My name is ${this.name} and I work a ${this.jobTitle}, I am ${this.age} years old, my salary is ${this.salary} and my work is ${this.joblocation}.`;
    }
}
let saljob1 = new Saljob(1500, "Vienna");
// console.log(saljob1.printData())
document.getElementById("card").innerHTML = saljob1.printData();
