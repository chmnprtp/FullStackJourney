//! Operators:
// Operators are symbols that can do some computation or calculation.

// + plus operator if used with 2 number adds them up

//! 1) Arithmetic Operators - used with numbers
/**
 *  +
 *  -
 *  *
 *  /  - gives quotient
 *  %  - gives remainder - modulo
 *  ** - gives power
 */

// let x = 2;
// let y = 3;
// console.log(x+y); // 5
// console.log(x-y); // -1
// console.log(x*y); // 6
// console.log(x/y); // 0.6666666666
// console.log(x%y); // 2
// console.log(x**y);// 8



//! 2) Assignment Operators - helps us to assign values to a variable
/**
 * =    - equals -> let x = 10; --> x = y; --> x = x + 5;
 * +=   - x += 5;
 * -=
 * *=
 * /=
 * %=
 * **=
 */

// let x1 = 10;
// x1 += 2;
// console.log(x1);  // 2

// x1 -= 3;
// console.log(x1)  // 9

// x1 *= 3
// console.log(x1); // 27

// x1 /= 3
// console.log(x1)  // 9

// x1 %=  4
// console.log(x1)  // 1

// x1 **= 3
// console.log(x1)  // 1

// console.log(Math.floor(10/3)); // only integer value


//! 3) Logical Operator - 
/** operand of a logical operator are always boolean. if we donot paas boolean 
 *  then js automatically convert them to boolean
 * 
 * &&
 * ||
 *  !
 */

/**
 *?  && - if both are true then only true
 *      x        y  
 *    false    false -> false
 *    false    true  -> false
 *    true     false -> false
 *    true     true  -> true
 */
// console.log(false && false) // false
// console.log(false && true)  // false
// console.log(true && false)  // false
// console.log(true && true)   // true

 /**
 *?  || - if any one is true then its true
 *      x        y  
 *    false    false -> false
 *    false    true  -> true
 *    true     false -> true
 *    true     true  -> true
 */
//  console.log(false || false) // false
//  console.log(false || true)  // true
//  console.log(true || false)  // true
//  console.log(true || true)   // true
/** 
 *?  ! -  works on one operand - 
 *      x       
 *    false -> true   
 *    true  -> false
 */
// console.log(!false) // true
// console.log(!true)  // false




/** ToBoolean Conversion 
Argument Type       Result

Undefined           Return false
Null                Return false
Boolen              Return argument
Number              +0, -0, NaN --> return false otherwise true
String              empty string(length is zero) return false otherwise true
Symbol              Return true
Object              Return true
*/

//! truthy and falsy value

// -> those values which convert to true in the ToBoolean operation are truthy value
//    rest are falsy value.

//* Falsy values
/*
    null
    undefined
    +0
    -0
    NaN
    ""
    false
*/

//! Short Circuiting - applied to logical operator
// console.log(10 && 30);   // 30
// console.log(10 && 0);    // 0
// console.log(40 && null)  // null
// console.log("" && -0)    // ""

// console.log(10 || 30);   // 10
// console.log(10 && 0 );   // 0
// console.log(40 || null); // 40
// console.log("" || -0);   // -0
// console.log(undefined || 30) // 30


//! 4) Comparison Operator - always give boolean result
/**
 *  < 
 *  >
 *  <=
 *  >=
 *  ==  --> abstract equality - checks if a and b are equal or if we can convert a and b
 *          into some other type & make them equal
 *  === --> strict equality - it check if a and b are equal and do not convert
 *  !=  --> abstract not equal
 *  !== --> strict not equal
 */ 

// console.log(10 < 20);   // true
// console.log(10 > 20);   // false
// console.log(10 >= 20);  // false
// console.log(10 <= 20);  // true

// console.log(10 == "10"); // true
// console.log(10 === "10");// false

// console.log("abstract not equal",10 != 10);  // false
// console.log("abstract not equal",10 != "10");// false

// console.log("strict not equal",10 !== 10);   // false
// console.log("strict not equal",10 !== "10"); // true

//! 5) Bitwise operator - are applied on binary representaion of number bit by bit
/** 
 * & AND            - 
 * | OR             -   
 * ^ XOR            -
 * ~ NOT            -
 * << LEFT SHIFT    -
 * >> RIGhT SHIFT   -
 */
/*

? Bistwise AND &
        101 - 5
        110 - 6
  ANS-  100 - 4
*/

const a = 5;
const b = 6;
// console.log(a & b); // 4


/*
? Bistwise OR |
        101 - 5
        110 - 6
  ANS-  10 - 4      
*/
console.log(a | b); // 7

/*
? Bistwise XOR ^
 XOR Table
 a  b  result
 0  0   0
 0  1   1
 1  0   1
 1  1   0


        101 - 5
        110 - 4
  ANS-  011 - 3      
*/
console.log(a ^ b) // 3

/*
? Bistwise LEFT SHIFT <<
 
1 << 3
firstly binary of 1 and add three zero to right side of the binary

        011 000 - 5
     
// */
// console.log(1 << 3) // 8
// console.log(1 << 4) // 16



/*
? Bistwise RIGHT SHIFT >>
x >> 1
x/2

27 >> 2
firstly binary of 27 and add two zero to left side of the binary

         27 -  11011 
after shift    00110 - 6
        
*/
console.log(27 >> 2) // 6

// Clean Code book


//! Unary Operator - one operand
/*
*  ++ - increment
*  -- - decrement
*/

let x = 2;
console.log(x++)  // 2
console.log(x)    // 3
console.log(++x)  // 4 prefix
console.log(x--)  // 4 postfix
console.log(x)    // 3
console.log(--x)  // 2 prefix