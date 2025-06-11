//?

/**
 * Example:
 * n = 3 (always odd)
 *   *
 *  ***
 * *****
 *  ***
 *   *
 * 
 *  upper
 *  n       row     space   star
 *  3        1        2      1
 *  3        2        1      3
 *  3        3        0      5
 *  

 * 
 * 
 * Example:
 * n = 5
 *     *
 *    ***
 *   *****
 *  *******
 * *********
 *  *******
 *   *****
 *    ***
 *     *
 */

function pattern6(n){
    for(let row=1; row<=n; row++){
        let str="";
        for(let space=1; space<=n-row; space++){
            str+=" "
        }
        for(let star=1; star<=2*row-1; star++){
            str+="*";
        }
        console.log(str);
    }
    for(let row=1; row<=n-1; row++){
        let str="";
        for(let space=1; space<=row; space++){
            str+=" "
        }
        for(let star=1; star<=2*(n-row)-1; star++){
            str+="*"
        }
        console.log(str);
    }
}
pattern6(3)
pattern6(5);



/*
n = 5
  *******
   *****
    ***
     *
    
lower
n       row      space  star
3        1        1      7
3        2        2      5
3        3        3      3
3        4        4      1

*/
function lowerPattern(n){
    for(let row=1; row<=n-1; row++){
        let str="";
        for(let space=1; space<=row; space++){
            str+=" "
        }
        for(let star=1; star<=2*(n-row)-1; star++){
            str+="*"
        }
        console.log(str);
    }
}
// lowerPattern(3)