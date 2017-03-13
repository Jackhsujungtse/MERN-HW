// Your Javascript Code Goes Here
// function statement
function greethi() {
	console.log('hi');
}
greethi();

// functions are first-class
function greetfn(fn) {
	fn();
}
greetfn(greethi);

// function expression
var greetbye = function() {
	console.log('bye');
}
greetbye();

// it's first-class
greetfn(greetbye);

// use a function expression to create a function on the fly
greetfn(function() {
	console.log('I comes first');
});
