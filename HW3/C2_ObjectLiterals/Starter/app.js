// Your Javascript Code Goes Here
var school = {
    school : 'NTUE',
    city : 'Taipei',
    country : 'Taiwan'
};

var person = {
    firstname : 'Jack',
    lastname : 'Hsu',
    greet : function (){
        console.log(`Hello, my name is ${this.firstname} ${this.lastname}!`);
    }
};
var greeting = person.greet.bind(person);
person.greet();
console.log(`Hello, nice to meet you, ${person.firstname}`);