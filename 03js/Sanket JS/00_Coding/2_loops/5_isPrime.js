//? Given a number x, write a function to determine whether the number is prime number
//? or not?

/**
 * ? How to check if a no. is prime or not?
 * what are prime number?
 * primes are only divisible by 1 and number itself.
 * if there is one more number apart from 1 and x that divides x completely the non-prime
 * 
 * 2 is only even prime number
 * 
 */

function isPrime(x){
    if(x == 1)
        {
            return "Not Prime";
        }
    for(let i=2; i<=x-1; i++){
        if(x%i==0){
            return "Not Prime";
        }
    }
    return "Prime";
}
const result = isPrime(4)
console.log(result);

// todo
//? Now show all prime number till 100;
// function tillHundred(till){
//     for(let i=2; i<=till-1;i++){
//         if()
//     }
// }
// tillHundred(100);

//? Show first 100 prime number;