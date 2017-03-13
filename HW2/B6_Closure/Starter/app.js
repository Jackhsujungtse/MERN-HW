var add = (() =>{
    var counter = 0;
    return () => {
        counter++;
        console.log(counter);
    }
})();
add();
add();
add();