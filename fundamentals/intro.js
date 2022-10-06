const readline = require("readline-sync");
let answer = readline.question("who are you >");
let age = readline.question("age >");
console.log(`hi ${answer} you are ${age} `);



// if else conditions
if(answer == "student"){
    console.log(" learn and explore");
}
else if(answer=="teacher"){
    console.log(" empower the students to build a better nation");
}
else{
    console.log("We have no idea who you are feel free to learn and explore");
}


// using the conditional operations
/*
syntax:
    let value = <condition> ? <true block> : <false block>

*/

let hostal_allocation = age > 18 ? (answer == 'teacher' || answer == "student") ? true :false : false
console.log( hostal_allocation ? "you are welcome to hostal" : "stay where you are")



