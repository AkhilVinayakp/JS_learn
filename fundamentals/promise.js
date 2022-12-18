/************************************  
 * @description: Async Await promise
 *
 ************************************/

// Normal case

function sample(){
    setTimeout(()=>{
        return "Happy Js"
    }, 1000);
}

// let s = sample(); // Since the function sample require 1 sec to return the value the main function will not wait for it and the value 
// of the s will be undefined
// console.log(s);

// inorder to to awoid it we need to use async await
async function Test(){
    return "test";
}
// const t = Test(); // this will return a promise Object
// console.log(t);
// t.then((ob)=>{console.log("fulfilled", ob)});
// t.catch((err)=>{console.log(err)}); // will not fire since no error in the Test function.




/************************************  
 * @description: The following code to show the failed Promise case
 ************************************/

const compute = new Promise((resolve,reject)=>{
    let t1 = "RRR"
    let t2 = "RRR2"
    if(t1===t2){
        resolve("Match found")
    }
    else{
        reject("Match not found");
    }
});
console.log(compute)
compute.finally(()=>{
        console.log("Ha ha promise")
    }).then((val)=>{
            console.log("What we got inside the promise", val)
        }).catch((err)=>{
            console.log("Can not complete the promise. Promise rejected");
    });
/************************************  
 * @Note: For above code
 * Finally will always run
 * when reject() executed or finally throws an error the catch block will handle the result. The promise will be rejected.
 ************************************/