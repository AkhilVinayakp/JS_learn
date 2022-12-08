// getting the prototype chaining in JS
function chainlog(obj){
    do{
        console.log("object >", obj)
        obj = Object.getPrototypeOf(obj)
        console.log("chain  >", obj)

    } while(obj)
}

// let str = new String("hey");
// chainlog(str)

// creating a student class with prototype

const Student = function(name, class_, email){
    this.name = name;
    this.email = email;
    this.class_ = class_
}
//creating a prototype for it
const StudentFns = {
    intro(){
        console.log(`Hi I am   ${this.name} studing at ${this.class_} class`);
    },
    updateMail(new_mail) {
        this.email = new_mail;
    },
}

//assigning the prototype

Student.prototype = StudentFns;

const tessa = new Student("tessa", "9", "tess@gsa.com");
tessa.intro();

// creating an object from a prototype
let Teacher = Object.create({
    name:"Roopa",
    age: 43,
})
