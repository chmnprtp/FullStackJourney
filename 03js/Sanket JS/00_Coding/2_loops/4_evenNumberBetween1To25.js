//? Write a program to print all the even numbers greater than 1 and less than 25

for(let i=1; i<25; i++){
    if(i%2==0){
        console.log(i);
    }
}


// Other way
for(let i=2; i<25; i+=2){
    console.log(i);
}