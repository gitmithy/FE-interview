class People {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(`${this.name} eat something`)
    }
}
class Student extends People {
    constructor(name, number) {
        super(name)
        this.number = number;
    }
    sayHi() {
        console.log(`姓名${this.name}学号${this.number}`)
    }
}
class Teacher extends People {
    constructor(name, major) {
        super(name)
        this.major = major;
    }
    teach() {
        console.log(`姓名${this.name}教授${this.major}`)
    }
}
const Std1 = new Student('夏洛克', 100);
const Tec1 = new Teacher('福尔摩斯', '语文');
console.log(Std1.name);
console.log(Std1.number)
Std1.sayHi();
console.log(Tec1.name);
console.log(Tec1.major);
Tec1.teach();
Std1.eat();
Tec1.eat();