// context 
console.log(delta); // will be undefined. 
var delta = "delta"; 
// console.log(retina); // will generate the reference error . since no reference 
// to the variable is been generated in the memory

sayHello('raj'); // will work properly since the in function is defined inside

function sayHello(name){
    console.log(`hai ${name}`);
}

sayHai('raj'); // type error
/**
 * since the function created as 
 *  the referece stored to the variable 
 *  during the scanning face the sayHai will get space in the memory but will be 
 *  undefined. and it canot be called hence Type error.  
 */

var sayHai = function(name){
    console.log(`hai ${name}`);
}