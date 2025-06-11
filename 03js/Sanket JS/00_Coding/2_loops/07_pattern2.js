//? Given a value n(positive integer) print the following pattern one the screen.

/**
 * Example:
 * n = 4
 * *
 * **
 * ***
 * ****
 * 
 * Example:
 * n = 3
 * *
 * **
 * ***
 * 
 * Example:
 * n = 6
 * *
 * **
 * ***
 * ****
 * *****
 * ******
 */
//------------------------
function pattern2(n){
    for(let row=1; row<=n; row++){
        let star = "";
        for(let col=1; col<=row; col++){
            star += "*";
        }
        console.log(star);
    }
}
pattern2(4);
//------------------------
function pattern2(n){
    for(let row=1; row<=n; row++){
        let star = "";
        for(let col=1; col<=row; col++){
            star += "*";
        }
        console.log(star);
    }
}
pattern2(3);
//------------------------
function pattern2(n){
    for(let row=1; row<=n; row++){
        let star = "";
        for(let col=1; col<=row; col++){
            star += "*";
        }
        console.log(star);
    }
}
pattern2(6);