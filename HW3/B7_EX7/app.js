car = "Honda Civic";

var marksGarage = {
  car: "Aston Martin",
  getCar: function(){
    return this.car;
  }
};

var jacksgarage ={
  car : "No Car",
  getCar : function(){
    return this.car;
  }
};

console.log(marksGarage.getCar());

var storeGetCarForLater = marksGarage.getCar; //this under function is pointing to global
console.log(storeGetCarForLater());

var theRealGetCarFunction = marksGarage.getCar.bind(marksGarage);
console.log(theRealGetCarFunction());

console.log(jacksgarage.getCar());

var correctgetcarfunc = jacksgarage.getCar.bind(jacksgarage);//this of correctgetcarfunc is pointing to global, so we need to bind to jacksgarage
console.log(correctgetcarfunc());