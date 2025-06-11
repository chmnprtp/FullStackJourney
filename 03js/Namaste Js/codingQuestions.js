//! 1. Reverve an Array
// function reversedArray(arr){
//     let reversed = [];
//     for(let i= arr.length-1; i>=0; i--){
//         reversed[reversed.length] = arr[i];
//     }
//     return reversed;
// }
// const result = reversedArray(['a','b','c']);
// console.log(result);

//!  2. Find Max and Min Element in Array
// function findMinMax(arr) { 
//     let min = arr[0], max = arr[0]; 
//     for (let i = 1; i < arr.length; i++) { 
//         if (arr[i] < min) min = arr[i]; 
//         if (arr[i] > max) max = arr[i]; 
//     } 
//     return { min, max }; 
// }
// const result2 = findMinMax([47,2,7,47,4]);
// console.log(result2);

//! / 3. Find Second Largest 
// function secondLargest(arr) { 
//     let max = -Infinity, secondMax = -Infinity; 
//     for (let i = 0; i < arr.length; i++) { 
//         if (arr[i] > max) { 
//             secondMax = max; 
//             max = arr[i]; 
//         } else if (arr[i] > secondMax && arr[i] !== max) { 
//             secondMax = arr[i]; 
//         } 
//     } 
//     return secondMax === -Infinity ? -1 : secondMax; 
// }
// const result3 = secondLargest([4,373,6,752,4,56]);
// console.log(result3);


//! 4. Check if Array is Sorted 
// function isSorted(arr) { 
 
//     for (let i = 1; i < arr.length; i++) { 
//         if (arr[i] < arr[i - 1]) return false; 
//     } 
//     return true; 
// }
// const result4 = isSorted([1,2,3,4]);
// console.log(result4);


//! 5. Remove Duplicates 
// function removeDuplicates(arr) { 
//     let unique = []; 
//     for (let i = 0; i < arr.length; i++) { 
//         let found = false; 
//         for (let j = 0; j < unique.length; j++) { 
//             if (arr[i] === unique[j]) { 
//                 found = true; 
//                 break; 
//             } 
//         } 
//         if (!found) unique[unique.length] = arr[i]; 
//     } 
//     return unique; 
// }
// const result5 = removeDuplicates([1,5,3,6,4,6,3]);
// console.log(result5);