var people = require ('./people.json');

var greet = function (){
    console.log(`Hello, my name is ${people.jack}`);//people.jack is a json format
}

module.exports = greet;