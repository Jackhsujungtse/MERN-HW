var greet = function(callback){
    console.log(`Hello!`);
    var data ={
        name : 'NTUE DTD'
    };
    callback(data);
}

greet(data=>{
    console.log(`callback was invoked!`);
    console.log(data);
})

greet(data=>{
    console.log(`a different callback was invoked!`);
    console.log(data.name);
})
