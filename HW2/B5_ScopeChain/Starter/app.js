// scope and scope chain
function b1(){
	// var myVar;
	console.log(myVar); // search for global myvar = 2
}

function a1(){
	var myVar = 1;
	b1(); // myvar = 2
	console.log(myVar); // myvar is 1 (in a1)
}

var myVar = 2;
console.log(myVar); // myvar in global is 2
a1(); //in a1, myvar is 1, in global myvar is 2

function a2(){
	var myVar = 1;
	function b2(){
		// var myVar;
		console.log(myVar);
	}
	b2(); // b2 search for a2 first (myvar = 1), then global (myvar = 2)
	console.log(myVar); // myvar for a2 = 1
}

var myVar = 2;
console.log(myVar); //global myvar = 2
a2(); //a2 console b2 then myvar in a2

// variables lifting
var firstname = 'Simon';
var addSurname = () => {
	var surname = 'Holmes';
	var fullname = firstname + ' ' + surname; // undefined holmes
	var firstname = 'David';
    console.log(fullname);
}
addSurname();