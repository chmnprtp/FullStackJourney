//? Given the side length of a triangle in the form of 3 integers. Check if the 
//? given triangle is equilateral or scalene or isosceles.

/*
a = 7; b = 7; c = 7; // all side same
ans -> equilateral

a = 8; b = 12; c = 5 // three side different
and -> Scalene

a = 8; b = 14; c = 8; // two side same
ans -> isosceles

Note : given input will always form a triangle
*/


let a = 8;
let b = 14;
let c = 5;

if(a == b && b == c && a == c){
    console.log("Equilateral")
}
else if(a==b || a==c || b==c ){
    console.log("Isosceles")
} 
else{
    console.log("Scalene")
}