var person = {
    firstname: 'Jack',
    lastname:'Hsu',
    getfullname : function (){
        var fullname = `${this.firstname} ${this.lastname}`;
        return fullname;
    }
}

var showname = function(){
    console.log(`Hello, my name is ${this.getfullname()}, nice to meet you!`);
}

var showpersonname = showname.bind(person);//this of showname is pointing to global, so we need to bind it to person
showpersonname();