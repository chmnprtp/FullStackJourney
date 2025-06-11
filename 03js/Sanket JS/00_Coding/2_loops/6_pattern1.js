//! Given a value n(positive integer), print the following pattern on the screen

/*
 Ex- n = 4
****
****
****
****

Ex- n = 3
***
***
***

Ex- n = 6
******
******
******
******
******
******


left + right
*if any one operand is string then it convert the other operand to string and joins(concat) them
* if both operand is string then it join both string - does not update old string - bcz in js string are immutable.
* + and += both do string concatination

? how can we build a sting having n ****


*/


function pattern4x4(x){
    // loop to print the n rows
    for(let row=1; row<=x; row++){
        let star = ""
        // loop to print n star
        for(let col=1; col<=x; col++){  
            star += "*";
        }
        console.log(star);
    }
}
pattern4x4(4);
pattern4x4(2);
pattern4x4(6);