// Your Javascript Code Goes Here
var person = {
    firstname : 'Jack',
    lastname : 'Hsu',
    greet : function (){
        console.log(this.firstname);
        (()=>{
            console.log(this.lastname);//this of arrow = this of function = this to object
        })();
    }
};
person.greet();