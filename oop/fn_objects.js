/**
 * creating the objects in functional way  
 */

let Student = function(id, class_name){
    this.id = id;
    this.class_name = class_name;
    // creating a function for the object
    this.getStudentid = function(){
        return this.id
    }
    this.sayHaito = function(st_name){
        console.log(`hey ${st_name}, ${this.id} says go to your class`);
    }
}

// creating the user using the new keyword.
// new keywork mandatory for creating the object implemened using the functional way
// responsible for setting up the context of the object
let raju = new Student("pcs08124", 5);
raju.sayHaito("ragu");