//?

/**
 * Example:
 * n = 5
 * *****
 * ****
 * ***
 * **
 * *
 *
 *  n    row     star    
 *  5     1        5     n - row + 1
 *  5     2        4
 *  5     3        3
 *  5     4        2 
 *  5     5        1
 */

function pattern5(n) {
  
  for (let row = 1; row <= n; row++) {
    star = "";
    for(let col=1; col<=n-row+1; col++){
        star+="*"
    }
    console.log(star)
  }
}
pattern5(5);
pattern5(4);
