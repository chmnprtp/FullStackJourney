//? Given a value n(positive integer) print the following pattern on the screen

/**
 * Example:
 * n = 4
 *     *
 *    **
 *   ***
 *  ****
 *
 * Example:
 * n = 3
 *     *
 *    **
 *   ***
 * 
  * Example:
 * n = 4
 *     *
 *    **
 *   ***
 *  ****
 * *****
 *******
 */

 function pattern3(n){
   
    for(let row=1; row<=n; row++){
        let star = "";
        for(let col=1; col<=n-row; col++){
            star += " ";
        }
        for(let str=1; str<=row; str++){
            star += "*"
        }
        console.log(star);
    }
 }
 pattern3(4);
 pattern3(3);
 pattern3(6);