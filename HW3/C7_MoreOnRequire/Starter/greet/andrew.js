var people = require ('./people.json');

var greet = function (){
    console.log(`Hello, my name is ${people.andrew}`);//people.andrew is a json format
}
module.exports = greet;