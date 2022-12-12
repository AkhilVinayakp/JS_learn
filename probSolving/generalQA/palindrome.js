/************************************  
 * @description: checking a number is palidrome or not using js
 * @param: Int 
 * @returns : Boolean
 ***********************************/

function isPalindrome1(number){
    /************************************  
     * 
     * @description: match the current string with the reversed string
     * - conver the number to array 
     * - reverse the array
     * - convert to string and compare.
     * 
     ************************************/
    let nString = String(number);
    let nArray = nString.split("");
    let revArray = nArray.reverse();
    nArray = nArray.join("");
    revArray = revArray.join("");
    console.log(`comparing ${nArray} and ${revArray}`)
    if(revArray === nArray){
        console.log("True");
    }
    else console.log("False");


}

isPalindrome1(122122);