//?
/**
 * Example:
 * n = 5
 *     *
 *    ***
 *   *****
 *  *******
 * *********
 * 
 *      row         space       star
 *       1             4         1
 *       2             3         3
 *       3             2         5
 *       4             1         7
 *       5             0         9
 */


// todo
function pattern4(n){
    for(let row=1; row<=n; row++){
        let str=""
        space = n-row;
        for(let col=1; col<=space; col++ ){
            str+=" ";
        }
        for(let star=1; star<=2*row-1; star++){
            str+="*"
        }
        console.log(str);
    }
}
pattern4(5);