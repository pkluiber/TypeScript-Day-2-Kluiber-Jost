var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.printData = function () {
        return "My name is " + this.name + " and I work a " + this.jobTitle + ", I am " + this.age + " years old.";
    };
    return Person;
}());
var person1 = new Person("Peter", 34, "Student");
document.getElementById("card").innerHTML = person1.printData();
// EXTENDS
var Saljob = /** @class */ (function (_super) {
    __extends(Saljob, _super);
    function Saljob(name, age, jobTitle, salary, joblocation) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.salary = salary;
        _this.joblocation = joblocation;
        return _this;
    }
    Saljob.prototype.printData = function () {
        return "My name is " + this.name + " and I work a " + this.jobTitle + ", I am " + this.age + " years old, my salary is " + this.salary + " and my work is " + this.joblocation + ".";
    };
    return Saljob;
}(Person));
var saljob1 = new Saljob(1500, "Vienna");
// console.log(saljob1.printData())
document.getElementById("card").innerHTML = saljob1.printData();
