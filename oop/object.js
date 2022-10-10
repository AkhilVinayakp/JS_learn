function create_User(id, contry_code){
    let obj = {
        name: 'ravi',
        for: 'raju', // keyword can be key,
        id, // shorthand for id:id,
        [contry_code]: "IN", // computed/dynamic key value
        'delta': 'p'

    }
    console.table(obj);
    console.log(`name : ${obj.name}`)
    console.log(`looking for ${obj['for']}`); // accessing through []
    console.log(`delta value ${obj.delta} ...... ${obj['delta']}`)
}
// looping trough the object properties
function looping(pre){
    let lp_obj = {
        id : '1452',
        name: 'ravi',
        [pre]: 'md'
    }
    for(let key in lp_obj){
        console.log(`keys ${key}`);
        console.log(`property values ${lp_obj[key]}`);
        console.log(`property values ${lp_obj.key}`); // will be undefined
    }
}

function property_checker(obj, p_name){
    if(p_name in obj){
        return true;
    }
}

// object with methods

let User = {
    name : "Rdj",
    age: 54,
    isLoggedIn: false,
    loggin : function(password){
        if(password === "i love you 3000"){
            this.isLoggedIn = true;
        }
    },
    loginStatus: function(){
        if(this.isLoggedIn){
            return `user ${this.name} is logged in`
        }
        return false;
    }
}

// console.log(User.loginStatus())
// User.loggin("i love you 3000");
// console.log(User.isLoggedIn)







/**
 * testers  
 */

// looping('test')



// create_User(12, 'www')

// checking property
// let test_ob = {name: 'alpha'}
// console.log(property_checker(test_ob, 'name'));



/**
 * object cloning
 * creating a copy of an object will not creat additional memory location. the 
 * variables will be referencing the same memory location,
 * use Object.assign()  
 */

function createClone(obj, addFlag=false){
    let temp = {}
    if(addFlag){
        temp = {clonned:true}
    }
    let new_obj = Object.assign({}, obj, temp)
    return new_obj
}

sampleObj = {test_core: 'DTS'}
testObj = createClone(sampleObj, addFlag=true);
console.table(testObj)
console.table(sampleObj)
console.log(`compairing ${testObj === sampleObj}`)