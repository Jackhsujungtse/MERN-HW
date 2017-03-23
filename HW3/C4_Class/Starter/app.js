'use strict'
class Person {
    constructor (name){
        this.name = name;
    }   
    printgreeting(){
        console.log(`Hi, I am ${this.name}`);
    }
}

var person1 = new Person ('Jack');
var person2 = new Person ('Andrew');
person1.printgreeting();
person2.printgreeting();
