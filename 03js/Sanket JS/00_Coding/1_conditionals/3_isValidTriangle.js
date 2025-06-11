//? Given three number a,b,c check if we can form a triangle with the size of the triangle
//? having length a,b,c; (we are not only talking about right angled triangle)

//* For any three sides
// For any three sides
// a, b, and c

// The sum of any two sides must be greater than the third.

let a = 10;
let b = 12;
let c = 5;

if (a + b > c && b + c > a && a + c > b) {
  console.log("Yes");
} else {
  console.log("No");
}

