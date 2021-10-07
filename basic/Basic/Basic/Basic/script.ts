// Basic Ex I - Start //
class Person {
    name: string;
    age: number;
    jobtitle: string;

    constructor(name: string, age: number, jobtitle: string){
        this.name = name;
        this.age = age;
        this.jobtitle = jobtitle;

    }

    printData(){
        return `allo ick heiße ${this.name} and ei am ${this.age} years olt. Ei am goin to becoma a real serious ${this.jobtitle}.`

    }
}

let person1 = new Person("Marco", 37, "klutz in development");
(document.getElementById("beschde") as HTMLElement).innerHTML = person1.printData();
// Basic Ex I - End //


// Basic Ex II - Start //
class workThings extends Person{
    salary: number;
    jobLocation: string;
    constructor(name: string, age: number, jobtitle: string, salary: number, jobLocation: string){
        
    super(name, age, jobtitle);
    this.salary = salary;
    this.jobLocation = jobLocation;
    }

    printData(){
        return `allo ick heiße ${this.name} and ei am ${this.age} years olt. Ei am goin to becom a real serious ${this.jobtitle}. Ick arbeite in ${jobLocation} and get paid ${this.salary} EUR every month (what is, of course, too little).`

    }
}

let me1 = new workThings("Vienna", 100.000);
(document.getElementById("beschde") as HTMLElement).innerHTML = me1.printData();
console.log(me1.printData())

    