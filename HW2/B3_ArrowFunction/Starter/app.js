// function statement
function greet() {
	console.log('hi');
}
greet();

// function expression
var greetMe = function() {
	console.log('Hi Tony!');
}
greetMe();

var greetJack = ()=> console.log("Hi Jack~~");
greetJack();

var greetName = name => console.log(`Hi, i believe your name is ${name}`);
greetName("ASDF");