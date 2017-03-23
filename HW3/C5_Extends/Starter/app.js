'use strict'
class Person {
    constructor (name){
        this.name = name;
    }
    showname (){
        console.log(`My name is ${this.name}`);
    }
}

class Employee extends Person{
    constructor(name, job){
        super(name);
        this.job = job;
    }
    shownamejob(){
        super.showname();
        console.log(`My job is ${this.job}`);
    }
}
var Person1 = new Employee ('Jack', 'student');
Person1.shownamejob();