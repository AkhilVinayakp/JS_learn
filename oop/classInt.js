/**
 * @desc: Creating a sample class using JS  
 */
class Sample{
    constructor(opt){
        this.sampleName = opt.name;
        this.sampleAge = opt.age;

    }
    log(){
        console.log(`Hi ${this.sampleName} you are ${this.sampleAge}`);
    }
}

// const sample = new Sample({name:"rag", age:20});
// sample.log();


/**  
 * @desc : 
 * @topics: 
 *       - Static Methods
 *           @syntax: static <fn_name>{}
 *       - Getters and Setters
 */

class SampleStatic{
    constructor(name){
        this.name = name;
    }
    log(){
        console.log(`Hi ${this.name}`);
    }
    // Static method
    static greet(){
        console.log("hi from Sample");
    }
}

// let sample = new SampleStatic('Nolan');
// sample.log();

// SampleStatic.greet(); // will work
// sample.greet(); // will through error.


/**
 * @docs
 * - Defining setters and getter in a class  
 */

class Test{
    constructor(name){
        this.name=name;
        this.hobbies = []
    }
    // the follwing function will add a hobie to the array
    set hobbie(value){
        this.hobbies.push(value);
    }
    get hobbie(){
        return this.hobbies[this.hobbies.length-1];
    }
}

// const test = new Test("ragav");
// test.hobbie = "Reading";
// console.log("hobbie of the user : ", test.hobbie);
