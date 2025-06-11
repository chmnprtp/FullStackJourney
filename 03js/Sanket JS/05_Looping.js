/**
 * In programming we might have to do a task again & again
 * By Loops
 */

//* Entry Control Loop
//? Print number from i to 10
//! while loop
/*
let i =1;
while(i<=10){
    console.log(i);
    i++;
}
*/

// it is required for the looping variable to change, if it will not change , the condition
// will always stay true.

// A loop which has the condition always true is infinite loop

//! for loop
// for(let i=1; i<=10; i++){
//     console.log(i);
// }

//! do while loop
// exit controll loop
// let y = 1;
// do {
//     console.log(y)
//     y++;
// } while (y<=10)


//! break - terminates the nearest loop immediatly
// let i = 1;
// while(i<=10){
//     if(i%7 ==0){
//         break;
//     }
//     console.log(i)
//     i++;
// }


//! continue - brings you back to the nearest loop
let i=1;
while(i<=10){
    if(i%7 == 0){
        i++ // todo
        continue;
    }
    console.log(i)
    i++;
}