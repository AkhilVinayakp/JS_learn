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

// let team = ['hitman', 'kohli', 'sky'];
// console.log("core members", team)
// let new_team_count = team.unshift('Dk', 'KL');
// console.log(`team ${team} new team count ${new_team_count}`)

// let tc = team.push('bumra', 'natarajan', 'chahal');
// console.log(`team after adding bowlers ${team}, with count ${tc}`)

// let out = team.pop()
// console.log(`member avoided ${out}`);

// function removePlayer(array, name){
//     if (array.indexOf(name) != -1) {
        
//     }
// }



/**
 * Every  
 */

// let ar = [12,34,5,45];
// let rs = ar.every((element)=> element > 20)
// console.log(rs);


/**
 * fill
 *   
 */

// let ar = [12,34,5,45];
// let f = ar.fill('3')
// console.log(f);
// console.log(ar);


/**  
 * Reduce
 */
// -> finding the sum of the array
// let sum = [23,34,123,44].reduce((acc, current)=> acc + current, 0);
// console.log(sum)

// // -> find min and max
// let min = [12,-34, 10,4].reduce((acc, current)=> acc <= current ? acc : current, Infinity)
// console.log(min);

// let max = [12,-34, 10,4].reduce((acc, current)=> acc > current ? acc : current, -Infinity);
// console.log(`max ${max}`)

// // finding the unique value
// // we use accumualator as a array
// let unique_values = [23,34,23,54,34,5,23].reduce(
//     (acc, current)=>{
//         if (acc.indexOf(current) === -1){
//             acc.push(current)
//         }
//         return acc
//     }, []
// )
// console.log(`unique values in the array ${[23,34,23,54,34,5,23]} is ${unique_values}`);


/**
 * filter  
 * Apply a function over an array and filter it out
 */
// let valid_ = [12,34,23,54,10, 5].filter( element=> element > 18)
// console.log(`valid array : ${valid_}`)


/**
 * splice  
 */