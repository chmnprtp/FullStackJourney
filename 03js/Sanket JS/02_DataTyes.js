/*
Primitive - singke value

1) number - integer and float

2) string - "" '' ``

3) boolean - true /false

4) null      - null represents no value or nothing i.e. variable is declared & defined also
               but with an empty value i.e. null

5) undefined - it shows a variable which has been declared but never defined.

6) BigInt    - In js a normal number can store maximum (2^53 -1) and minimum (-2^ 53-1)
                for numbers beyond this range , we use bigInt.
                To make a no. Bigint, we write the number & append a 'n' at last.

7) symbol    - Symbol("___");

Non- Primitive
8) objects   -  key value pair,
                key will be unique,
                 we can store diff. type of dataytpe
*/

let obj = {
    year:`1997`,
    model:'maxPro',
    name:"apple",   // '' "" `` - these three can be used
    price:1500,
    "discount":15, // This is also possible
    isAvailable:false,
    price:1000     // This value will be printed
}
console.log(obj)