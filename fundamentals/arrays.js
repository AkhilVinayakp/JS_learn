// let arr = ['ravi', 'raj', 'rani'];
// accessing the elements using index
// console.log(arr[0]);
// accesing the same using at
// console.log(arr.at(0))
// console.log(arr, `length of the array ${arr.length}`);


// accessing the last element in the list
// console.log(arr[-1]) // will be undefined.


/**
 * any value other than the interger will be treated
 * as literally in js.
 * since arrays are the object the following is possible in 
 * arrys but not a good practice
 */
// arr[-1] = 'delta';
// arr['df'] = 'alpha';

// console.log(arr, `length of the array ${arr.length}`);

let team = ['hitman', 'kohli', 'sky'];
console.log("core members", team)
let new_team_count = team.unshift('Dk', 'KL');
console.log(`team ${team} new team count ${new_team_count}`)

let tc = team.push('bumra', 'natarajan', 'chahal');
console.log(`team after adding bowlers ${team}, with count ${tc}`)

let out = team.pop()
console.log(`member avoided ${out}`);

function removePlayer(array, name){
    if (array.indexOf(name) != -1) {
        
    }
}