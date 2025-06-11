// // // // // // // // // // // // // //! Tokens =  smallest unit of every programming lang.
// // // // // // // // // // // // // // 1) keywords : predefined words which has some meaning
// // // // // // // // // // // // // // all keyword should in lowercase

// // // // // // // // // // // // // // 2) identifiers : name of a class, variable, or methods etc
// // // // // // // // // // // // // // Rules:-
// // // // // // // // // // // // // // cannot start with number
// // // // // // // // // // // // // // only _ and $ is allowed as special character
// // // // // // // // // // // // // // space in not applicable
// // // // // // // // // // // // // // keywords cannot be an itentifiers

// // // // // // // // // // // // // // 3) literals : values

// // // // // // // // // // // // // // 4) Operators : symbol used to perform operation btw oprands

// // // // // // // // // // // // // // ! DATATYPES
// // // // // // // // // // // // // //? PRIMITIVE - 7 types (IMMUTABLE)
// // // // // // // // // // // // // // number  10, 10.789 , 678.88655
// // // // // // // // // // // // // // string
// // // // // // // // // // // // // // boolean
// // // // // // // // // // // // // // undefined
// // // // // // // // // // // // // // null
// // // // // // // // // // // // // // bigInt
// // // // // // // // // // // // // // symbol

// // // // // // // // // // // // // //? NON-PRIMITIVE - 3 types (MUTABLE)
// // // // // // // // // // // // // // arrays
// // // // // // // // // // // // // // objects
// // // // // // // // // // // // // // functions

// // // // // // // // // // // // // // var n1 = 10;
// // // // // // // // // // // // // // console.log(n1); // 10
// // // // // // // // // // // // // // console.log(typeof n1); // number
// // // // // // // // // // // // // // console.log(typeof typeof n1); // string

// // // // // // // // // // // // // // var n2 = "Hello World";
// // // // // // // // // // // // // // console.log(n2); // Hello World
// // // // // // // // // // // // // // console.log(typeof n2); // string

// // // // // // // // // // // // // // var n3 = true;
// // // // // // // // // // // // // // console.log(n3); // true
// // // // // // // // // // // // // // console.log(typeof n3); // boolean

// // // // // // // // // // // // // // var n4 = undefined;
// // // // // // // // // // // // // // console.log(n4); // ud
// // // // // // // // // // // // // // console.log(typeof n4); // undefined

// // // // // // // // // // // // // // // console.log(m1);//! ERROR -> not defined

// // // // // // // // // // // // // // var n5 = null;
// // // // // // // // // // // // // // console.log(n5); // null
// // // // // // // // // // // // // // console.log(typeof n5); // object

// // // // // // // // // // // // // // var n6 = 1n;
// // // // // // // // // // // // // // console.log(n6); // 1n
// // // // // // // // // // // // // // console.log(typeof n6); //bigint

// // // // // // // // // // // // // // var s1 = Symbol("Hello");
// // // // // // // // // // // // // // console.log(s1); //Symbol(Hello)

// // // // // // // // // // // // // // var s2 = Symbol("Hello");
// // // // // // // // // // // // // // console.log(s2); // Symbol(Hello)

// // // // // // // // // // // // // // console.log(s1 == s2); //false

// // // // // // // // // // // // // // // ==  -> value not datatype (loosely comparision)
// // // // // // // // // // // // // // // === -> value and datatype (strongly comparision)
// // // // // // // // // // // // // // var a = 10;
// // // // // // // // // // // // // // var b = "10";
// // // // // // // // // // // // // // console.log(a == b); // true
// // // // // // // // // // // // // // console.log(a === b); // false

// // // // // // // // // // // // // // ! TYPES OF VARIABLES -> 2 types
// // // // // // // // // // // // // // GLOBAL VARAIBLE
// // // // // // // // // // // // // // LOCAL VARIABLE

// // // // // // // // // // // // // //! WAYS OF CREATING VARAIBLES -> 3 WAYS
// // // // // // // // // // // // // // VAR
// // // // // // // // // // // // // // LET
// // // // // // // // // // // // // // CONST

// // // // // // // // // // // // // //! SCOPES OF VARIABLES -> 5 TYPES
// // // // // // // // // // // // // // GLOBAL SCOPE
// // // // // // // // // // // // // // SCRIPT SCOPE
// // // // // // // // // // // // // // BLOCK SCOPE
// // // // // // // // // // // // // // LOCAL SCOPE -> FUNCTION SCOPE

// // // // // // // // // // // // // //! GLOBAL VARAIBLES a,b,c
// // // // // // // // // // // // // // var a = 10;
// // // // // // // // // // // // // // let b = 20;
// // // // // // // // // // // // // // const c = 30;

// // // // // // // // // // // // // // console.log(a,b,c);

// // // // // // // // // // // // // // for (let i = 0; i < 5; i++) {
// // // // // // // // // // // // // //     console.log(a,b,c);
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // // if(100<500){
// // // // // // // // // // // // // //     console.log(a,b,c);
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // // function greet(){
// // // // // // // // // // // // // //     console.log(a,b,c);
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // greet()

// // // // // // // // // // // // // //! LOCAL VARAIBLES

// // // // // // // // // // // // // // if (10 > 2) {
// // // // // // // // // // // // // //   var x = 10; // global scope & global variable
// // // // // // // // // // // // // //   let y = 20; // block scope & block-scoped variable
// // // // // // // // // // // // // //   const z = 30; // block scope & block-scoped variable
// // // // // // // // // // // // // //   console.log(x, y, z);
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // console.log(x);
// // // // // // // // // // // // // // // console.log(y); //! ERROR -> y is not defined

// // // // // // // // // // // // // function hello() {
// // // // // // // // // // // // //   var m = 10; // local variable & local scope/function scope
// // // // // // // // // // // // //   let n = 20; // local variable & local scope/function scope
// // // // // // // // // // // // //   const o = 30; // local variable & local scope/function scope
// // // // // // // // // // // // //   console.log(m, n, o);
// // // // // // // // // // // // // }
// // // // // // // // // // // // // hello();

// // // // // // // // // // // // // // console.log(m);//! ERROR -> m is not defined

// // // // // // // // // // // // //! var , let and const

// // // // // // // // // // // // var a; // declare
// // // // // // // // // // // // a = 10; // initialise

// // // // // // // // // // // // console.log(a); //10

// // // // // // // // // // // // var a; // re-declare
// // // // // // // // // // // // a = 20; // re-initialize

// // // // // // // // // // // // console.log(a); //20

// // // // // // // // // // // // var b = 30; // declare and initialise
// // // // // // // // // // // // console.log(b);

// // // // // // // // // // // // var b = 40; // re-declare and re-initialise
// // // // // // // // // // // // console.log(b); //40

// // // // // // // // // // // // //! LET
// // // // // // // // // // // // let n1; // declare
// // // // // // // // // // // // n1 = 600; // initilise

// // // // // // // // // // // // console.log(n1); // 600

// // // // // // // // // // // // // let n1//! cannot re-declare

// // // // // // // // // // // // n1 = "Hello"; // re-initialise
// // // // // // // // // // // // console.log(n1); // Hello

// // // // // // // // // // // // let n2 = 500; // declare and initialise
// // // // // // // // // // // // console.log(n2); // 500

// // // // // // // // // // // // // let n2  = 800 //!cannot re-declare and re-initialise

// // // // // // // // // // // // //! CONST
// // // // // // // // // // // // const c = "Hello World"; // declare and initialise
// // // // // // // // // // // // console.log(c); //"Hello World"
// // // // // // // // // // // //! HOISTING : declaration part is moved to the top of the original code

// // // // // // // // // // // // var m --> Hoisted
// // // // // // // // // // // console.log(m);// ud --> due to hoisting
// // // // // // // // // // // var m = 100
// // // // // // // // // // // console.log(m);

// // // // // // // // // // // //! Temporal Dead Zone (TDZ): time period btw accessing of variable before declaration

// // // // // // // // // // // // console.log(x);//! cannot access x before initailization
// // // // // // // // // // // let x = 200
// // // // // // // // // // // console.log(x);//200

// // // // // // // // // // // ! FUNCTIONS

// // // // // // // // // // //! -->1) NAMED FUNCTION
// // // // // // // // // // // --> function hoisting is possible only in named function

// // // // // // // // // // greet(); // can be called due to function hoisting

// // // // // // // // // // // function declaration
// // // // // // // // // // function greet() {
// // // // // // // // // //   console.log("I am Greet Function");
// // // // // // // // // // }

// // // // // // // // // // greet(); // function calling / invokation

// // // // // // // // // // //! --> 2) ANONYMOUS FUNCTION : without name
// // // // // // // // // // // function (){
// // // // // // // // // // //   console.log("I am Anonymous");
// // // // // // // // // // // }

// // // // // // // // // // //! --> 3) FUNCTION EXPRESSION: storing function in variable and calling that function using that variable.it is used to call Anonymous functions

// // // // // // // // // // var a = function () {
// // // // // // // // // //   console.log("I am Anonymous, i am getting called using Function Expression");
// // // // // // // // // // };
// // // // // // // // // // console.log(a);
// // // // // // // // // // a();

// // // // // // // // // // abc()
// // // // // // // // // // function abc(){
// // // // // // // // // //   console.log("hii");
// // // // // // // // // // }
// // // // // // // // // // abc()

// // // // // // // // // console.log(x);

// // // // // // // // // let x = function (){
// // // // // // // // //   console.log("Byee");
// // // // // // // // // }

// // // // // // // // // x()

// // // // // // // // //! GLOBAL EXECUTION CONTEXT (GEC)
// // // // // // // // // 1 PHASE -> DECLARATION PHASE
// // // // // // // // // 2 PHASE -> EXECUTION PHASE
// // // // // // // // // debugger;
// // // // // // // // // console.log("Hello");
// // // // // // // // // var a;
// // // // // // // // // console.log("Hii");
// // // // // // // // // console.log(b);
// // // // // // // // // a = 10;
// // // // // // // // // var b = 30;
// // // // // // // // // console.log(a, b);
// // // // // // // // // console.log("Byee");

// // // // // // // // // debugger
// // // // // // // // // console.log("Start");
// // // // // // // // // console.log(a);
// // // // // // // // // var a = 50;
// // // // // // // // // console.log(b);
// // // // // // // // // greet();
// // // // // // // // // var b;
// // // // // // // // // console.log(b);
// // // // // // // // // b = 70;
// // // // // // // // // console.log(a, b);
// // // // // // // // // function greet() {
// // // // // // // // //   console.log("I am Greet");
// // // // // // // // // }
// // // // // // // // // console.log("End");

// // // // // // // // // console.log("Hello");
// // // // // // // // // function getData() {
// // // // // // // // //   console.log("Fetching Data From Backend");
// // // // // // // // // }
// // // // // // // // // console.log(n1);
// // // // // // // // // var n2 = 60;
// // // // // // // // // console.log(n1);
// // // // // // // // // var n1;
// // // // // // // // // console.log(n2);
// // // // // // // // // n2 = 70;
// // // // // // // // // console.log(getData);
// // // // // // // // // n1 = 800;
// // // // // // // // // getData();
// // // // // // // // // console.log("Bye Bye");

// // // // // // // // // console.log("Hii");
// // // // // // // // // console.log(a);
// // // // // // // // // var a = function () {
// // // // // // // // //   console.log("I am Func Expression");
// // // // // // // // //   var x = 30
// // // // // // // // //   console.log(x);

// // // // // // // // // };
// // // // // // // // // console.log(a);
// // // // // // // // // var b = 30
// // // // // // // // // console.log(a,b);
// // // // // // // // // a()
// // // // // // // // // console.log("bye");

// // // // // // // // // debugger;
// // // // // // // // // console.log("hi");
// // // // // // // // // function abc() {
// // // // // // // // //   var x = 10;
// // // // // // // // //   let y = 20;
// // // // // // // // //   const z = 30;
// // // // // // // // //   console.log(x, y, z);
// // // // // // // // // }
// // // // // // // // // abc()

// // // // // // // // // PARAMETERIZED FUNCTION
// // // // // // // // function greet(name1) {
// // // // // // // //   console.log("Welcome", name1);
// // // // // // // // }
// // // // // // // // greet("Sam");

// // // // // // // // function abc(n1 = 0, n2 = 0) {
// // // // // // // //   console.log(n1, n2);
// // // // // // // // }
// // // // // // // // abc();

// // // // // // // // function xyz(a, b, c, d) {
// // // // // // // //   console.log(a, b, c, d);
// // // // // // // //   console.log(arguments);
// // // // // // // // }
// // // // // // // // xyz(10, 20, 30, 40, 50, 60);

// // // // // // // // //! REST PARAMETERIZED FUNCTION
// // // // // // // // // it is used to store the rest of the arguements for which parameters are not present.
// // // // // // // // // SYNTAX ==>  ...identifier
// // // // // // // // function qwe(q1, ...q2) {
// // // // // // // //   console.log(q1);
// // // // // // // //   console.log(q2);
// // // // // // // // }
// // // // // // // // qwe(100, 200, 300, 400, 500);
// // // // // // // //! RETURN TYPE FUNCTION
// // // // // // // // debugger;
// // // // // // // // function sum(n1, n2) {
// // // // // // // //   let result = n1 + n2;

// // // // // // // //   console.log(result);//30

// // // // // // // //   return result
// // // // // // // // }
// // // // // // // // let output = sum(10, 20);
// // // // // // // // console.log(output);

// // // // // // // //! NESTED FUNCTION
// // // // // // // // function Parent() {
// // // // // // // //   var money = 50000;
// // // // // // // //   console.log(money);

// // // // // // // //   function Child() {
// // // // // // // //     var savings = 1000;
// // // // // // // //     console.log(savings);
// // // // // // // //   }
// // // // // // // //   return Child
// // // // // // // // }
// // // // // // // // // let val = Parent()
// // // // // // // // // console.log(val);
// // // // // // // // // val()

// // // // // // // // Parent()()// js curring

// // // // // // // function Parent() {
// // // // // // //   var money = 50000;
// // // // // // //   console.log(money);

// // // // // // //   function Child() {
// // // // // // //     var savings = 1000;
// // // // // // //     console.log(savings,money);// closures and lexical scoping
// // // // // // //   }
// // // // // // //   Child();
// // // // // // // }
// // // // // // // Parent();

// // // // // // //! CLOSURE : its a memory which is created whenever we try to access parent function's property inside child function

// // // // // // //! LEXICAL SCOPING : the ablitiy of js-engine to search a variable outside of its current scope
// // // // // // // debugger;
// // // // // // // function Parent() {
// // // // // // //   var a = 10;
// // // // // // //   var b = 20;
// // // // // // //   console.log(a, b);

// // // // // // //   function Child() {
// // // // // // //     var x = 100;
// // // // // // //     var y = 200;
// // // // // // //     console.log(x, y, a);
// // // // // // //   }
// // // // // // //   Child();
// // // // // // // }
// // // // // // // Parent();

// // // // // // // debugger;
// // // // // // // function Parent() {
// // // // // // //   var a = 10;
// // // // // // //   var b = 20;
// // // // // // //   console.log(a, b);

// // // // // // //   function Child() {
// // // // // // //     var x = 100;
// // // // // // //     var y = 200;
// // // // // // //     console.log(x, y, a);
// // // // // // //   }
// // // // // // //   return Child;
// // // // // // // }
// // // // // // // Parent()();

// // // // // // //! HIGHER ORDER FUNCTION AND CALLBACK FUNCTION

// // // // // // // function sum(n1, n2) {
// // // // // // //   return n1 + n2;
// // // // // // // }

// // // // // // // function calculate(a, b, callback) {
// // // // // // //   // console.log(a, b, callback);

// // // // // // //   let result = callback(a, b);
// // // // // // //   console.log(result); // 30
// // // // // // // }
// // // // // // // calculate(10, 20, sum);

// // // // // // // ! ARROW FUNCTION : ES-6  --> consice way of writing function

// // // // // // let a1 = () => {
// // // // // //   console.log("I am Arrow Function");
// // // // // // };
// // // // // // a1();

// // // // // // // single line code ignore {}
// // // // // // let a2 = () => console.log("I am Arrow Function");
// // // // // // a2();

// // // // // // // no parameter we can ignore () but we have to use _
// // // // // // let a3 = (_) => console.log("I am Arrow Function");
// // // // // // a3();

// // // // // // // single parameter ignore ()
// // // // // // let a4 = (name) => console.log("I am Arrow Function", name);
// // // // // // a4("Rohit");

// // // // // // // multiple parameter () is mandatory
// // // // // // let a5 = (name, age) => console.log("I am Arrow Function", name, age);
// // // // // // a5("John", 34);

// // // // // // // explit return
// // // // // // let a6 = (n1, n2) => {
// // // // // //   return n1 + n2;
// // // // // // };
// // // // // // console.log(a6(200, 80)); //280

// // // // // // // implicit return
// // // // // // let a7 = (n1, n2) => n1 + n2;
// // // // // // console.log(a7(100, 50)); //150

// // // // // //! STRINGS
// // // // // // single quote ' '
// // // // // // double quote " "
// // // // // // backticks ` ` --> multiline string & string interpolation ${}
// // // // // // let str1 = "Hello World";
// // // // // // let str2 = 'Hello Universe';
// // // // // // let str3 = `Hello Galaxy`;

// // // // // // let fname = "John"
// // // // // // let lname = "Doe"
// // // // // // let fullname = `${fname} ${lname}
// // // // // // i am a developer
// // // // // // `
// // // // // // console.log(fullname);

// // // // // // ! STRING METHODS
// // // // // let str1 = "HelloWorld";
// // // // // //          0123456789
// // // // // console.log(str1[1]);

// // // // // //! slice(start_Index,end_Index)
// // // // // // end_Index always gets ignored
// // // // // console.log(str1.slice(0, 5)); // Hello
// // // // // console.log(str1.slice(-10, -5)); // Hello
// // // // // console.log(str1.slice(-10, 5)); // Hello
// // // // // console.log(str1.slice(5)); // World

// // // // // //! substring(start_Index,end_Index)
// // // // // // end_Index always gets ignored
// // // // // console.log(str1.substring(0, 5)); // Hello
// // // // // console.log(str1.substring(-10, -5)); // ! no output
// // // // // console.log(str1.substring(-5, 6)); //HelloW ==>(0,6)
// // // // // console.log(str1.substring(5)); // World

// // // // // //! substr(startIndex, length)
// // // // // console.log(str1.substr(0, 5));

// // // // // let str2 = "           Javascript             ";
// // // // // //! trimEnd()
// // // // // console.log(str2.trimEnd());

// // // // // //! trimStart()
// // // // // console.log(str2.trimStart());

// // // // // //! trim()
// // // // // console.log(str2.trim());

// // // // // let str3 = "HeLlOReAcT";
// // // // // //! toUpperCase()
// // // // // console.log(str3.toUpperCase());

// // // // // //! toLowerCase()
// // // // // console.log(str3.toLowerCase());

// // // // // let cardNo = 987654329875;

// // // // // let strCardNo = cardNo.toString();

// // // // // let slicedCardNo = strCardNo.slice(0, 5);

// // // // // //! padEnd() and padStart()
// // // // // let val = slicedCardNo.padEnd(12, "X");

// // // // // console.log(val); // 98765XXXXXXX

// // // // // function isPallindrome(word) {
// // // // //   let val = word.split("").reverse().join("");

// // // // //   if (val == word) {
// // // // //     return true;
// // // // //   }
// // // // //   return false;
// // // // // }
// // // // // console.log(isPallindrome("abc"));
// // // // // console.log(isPallindrome("racecar"));

// // // // // let str4 = "Welcome Everyone, Welcome to Qspiders"
// // // // // //! replace()
// // // // // console.log(str4.replace("Welcome","hi"));

// // // // // //! replaceAll()
// // // // // console.log(str4.replaceAll("Welcome","hi"));

// // // // // ! ARRAYS
// // // // //? ARRAY LITERAL
// // // // // let arr1 = [5];
// // // // // console.log(arr1); // [ 5 ]
// // // // // console.log(arr1.length); // 1

// // // // // //? ARRAY CONSTRUCTOR
// // // // // let arr2 = new Array(5);
// // // // // console.log(arr2); // [empty * 5]
// // // // // console.log(arr2.length); // 5

// // // // let arr1 = [10, 20, 30, 40, 50];

// // // // // console.log(arr1[2]); //30
// // // // // console.log(arr1[10]); //ud
// // // // // console.log(arr1.length); //5

// // // // //! ARRAY METHODS
// // // // // pop() :removes last element and returns it
// // // // console.log(arr1.pop()); //50
// // // // console.log(arr1); // [10,20,30,40]

// // // // // push() : adds element at last and returns new length
// // // // console.log(arr1.push("Hello")); // 5
// // // // console.log(arr1); //[10,20,30,40,"Hello"]

// // // // // unshift() :  adds element at 0th index and returns new length
// // // // console.log(arr1.unshift(true)); //6
// // // // console.log(arr1); //[true, 10, 20, 30, 40, 'Hello']

// // // // // shift() : removes element from 0th index and returns it
// // // // console.log(arr1.shift()); // true
// // // // console.log(arr1); //[10, 20, 30, 40, 'Hello']

// // // // // splice(start_Index, delete_Count, add Elements)
// // // // let arr2 = [100, 200, 300, 400, 500];

// // // // arr2.splice(1, 3);
// // // // console.log(arr2); // [100,500]

// // // // let arr3 = [12, 40, 29, 60, 40, 36];
// // // // //           0  1  2  3  4  5

// // // // arr3.splice(3, 0, "Java");

// // // // console.log(arr3);
// // // // // [12,40,29,"Java",60,40,36]
// // // // //   0  1  2    3    4  5  6

// // // // let arr4 = [20, 50, 70, 10, 4, 68, 26, 49];

// // // // arr4.splice(2, 5, () => console.log("Hiii"));
// // // // console.log(arr4); //[20,50,()=>{},49]
// // // // console.log(arr4[2]); //()=> console.log("Hiii")
// // // // arr4[2](); // Hii

// // // // let arr5 = [10, 20, 30, 40, 50];
// // // // // slice(start_Index,end_Index)
// // // // let x = arr5.slice(1, 4);
// // // // console.log(x);
// // // // console.log(arr5);

// // // // let arr6 = [90, 80, 70, 60];
// // // // // includes(element) : return boolean
// // // // console.log(arr6.includes(80)); // true
// // // // console.log(arr6.includes(800)); // false

// // // // // indexOf()
// // // // console.log(arr6.indexOf(70)); //2
// // // // console.log(arr6.indexOf(700)); //-1

// // // // let arr7 = [8, 1, 9, 2, 5, 3, 7];
// // // // console.log(arr7);

// // // // // sort()
// // // // console.log(arr7.sort());

// // // // let arr8 = [90, 100, 87, 36, 50, 22];
// // // // // lexographical sorting
// // // // console.log(arr8.sort()); //[100, 22, 36, 50, 87, 90]

// // // // console.log(arr8.sort((a, b) => a - b));

// // // // let arr9 = [10, 20];
// // // // let arr10 = [100, 200];
// // // // // concat()
// // // // console.log(arr9.concat(arr10, [50, 60], arr9));
// // // // //[10,20,100,200,50,60,10,20]

// // // // let arr11 = [10, 20, 30];
// // // // // reverse()
// // // // console.log(arr11.reverse());

// // // // // join()
// // // // console.log(arr11.join(""));

// // // // //! loops
// // // // let arr = [10, 20, 30, 40];
// // // // for (let i = 0; i < arr.length; i++) {
// // // //   console.log(i);
// // // // }

// // // // let i = 0;
// // // // while (i < arr.length) {
// // // //   console.log(arr[i]);
// // // //   i++;
// // // // }

// // // // do {
// // // //   console.log("Hii");
// // // // } while (false);

// // // // // forin
// // // // for(let i in arr){
// // // //   console.log(i);
// // // // }

// // // // // forof
// // // // for(let i of arr){
// // // //   console.log(i);
// // // // }

// // // //! ARRAY ADVANCE METHODS :- all methods are HOF

// // // // forEach( callback function ) : it returns UD
// // // let arr1 = [10, 20, 30, 40, 50];

// // // let val1 = arr1.forEach((element, index, array) => {
// // //   console.log(element, index, array);
// // //   return "Hello";
// // // });
// // // console.log(val1); // UD

// // // console.log("------------------------------------");

// // // // map( callback function ) : returns new array
// // // let val2 = arr1.map((element, index, array) => {
// // //   console.log(element, index, array);
// // //   return element + 5;
// // // });
// // // console.log(val2); // [15, 25, 35, 45, 55]

// // // // filter( callback function )
// // // let val3 = arr1.filter((element) => {
// // //   return element > 25;
// // // });
// // // console.log(val3); // [30, 40, 50]

// // // // find( callback function )
// // // let val4 = arr1.find((element) => {
// // //   return element > 25;
// // // });
// // // console.log(val4); // 30

// // // // findIndex( callback function )
// // // let val5 = arr1.findIndex((element) => {
// // //   return element > 25;
// // // });
// // // console.log(val5); // 2

// // // // reduce( callback function , accumulator value )
// // // let arr2 = [10, 20, 30, 40, 50, 60];

// // // let val6 = arr2.reduce((acc, ele, idx, arr) => {
// // //   console.log(acc, ele);
// // //   return acc + ele;
// // // }, 0);
// // // console.log(val6); //210

// // //! OBJECTS
// // // CREATE
// // let obj1 = {
// //   id: 1,
// //   fname: "Rohit",
// //   lname: "Sharma",
// //   iplTeam: "RCB",
// //   battingOrder: 4,
// //   company: "TCS",
// // };

// // // READ
// // // using dot operator
// // console.log(obj1.fname);
// // console.log(obj1.lname);

// // // using square braces ["key"]
// // console.log(obj1["id"]);

// // // UPDATE
// // obj1.iplTeam = "MI";
// // obj1.battingOrder = 1;

// // // ADD NEW PROPERTY
// // obj1.jerseyNo = 45;

// // // DELETE
// // delete obj1.company;

// // console.log(obj1);

// // let obj2 = {
// //   id: 2,
// //   fname: "Virat",
// //   lname: "Kohli",
// //   iplTeam: "RCB",
// // };
// // console.log(obj2);

// // // only way to iterate an object
// // for (let i in obj2) {
// //   console.log(obj2[i]);
// // }

// // let x = "iplTeam";

// // let obj3 = {
// //   id: 3,
// //   fullname: "MS Dhoni",
// //   [x]: "CSK",
// // };
// // console.log(obj3);

// // let fname = "Vaibhav";
// // let lname = "Suryavanshi";

// // let obj4 = {
// //   fname,
// //   lname,
// // };
// // console.log(obj4);

// // ! OBJECT METHODS
// let obj = { id: 1, ename: "John" };

// // Object.keys() : it returns an array of keys
// console.log(Object.keys(obj)); //['id', 'ename']

// // Object.values(): it returns an array of values
// console.log(Object.values(obj)); //[1, 'John']

// // Object.entries() : it returns nested array with both key and value
// let nestedArr = Object.entries(obj);
// console.log(nestedArr); // [['id',1], ['ename','John']]

// // Object.fromEntries() : it converts nested array to js object
// let value = Object.fromEntries(nestedArr);
// console.log(value); //{ id: 1, ename: "John" }

// //! JSON
// let user = {
//   id:1,
//   ename:"John",
//   email:"john@gmail.com",
//   password:"john@123"
// }
// console.log(user);

// // js object convert to JSON --> JSON.stringify(jsObject)
// let jsonData = JSON.stringify(user)
// console.log(jsonData);
// console.log(typeof jsonData);// string

// // converts json Data to JS Object --> JSON.parse(json Data)
// let jsData = JSON.parse(jsonData)
// console.log(jsData);

//API---> https://dummyjson.com/users

// let p1 = fetch("https://dummyjson.com/users");
// console.log(p1);
// // Promise{
// //   Prototype : Promise <-- then,catch,finally,
// //   PromiseState : "Fullfilled/Rejected/Pending",
// //   PromiseResult : Response <-- server se
// // }

// p1.then((resp) => {
//   console.log("GOT DATA");
//   let p2 = resp.json();

//   p2.then((data) => console.log(data));

//   p2.catch((err) => console.log(err));
// });

// p1.catch((error) => {
//   console.log("SOMETHING WENT WRONG", error);
// });

// p1.finally(() => {
//   console.log("REQUESTED DATA");
// });

// let p1  = fetch("https://dummyjson.com/users")
// p1.then(resp => {
//  let p2 = resp.json()
//  p2.then(data => console.log(data))
//  p2.catch(err => console.log(err))
// })
// p1.catch(err => document.writeln("<h1>Something went wrong</h1>"))

// async function getUsers() {
//   try {
//     let response = await fetch("https://dummyjson.com/users");
//     let data = await response.json();
//     console.log(data); //{users :Array}
//     displayUsers(data.users);
//   } catch (error) {
//     console.log("Something went wrong", error);
//     document.writeln("<h1>Something went wrong</h1>");
//   }
// }
// getUsers();

// function displayUsers(allusers) {
//   console.log(allusers);//[{},{},.....]

//   allusers.map((user)=>{
//     console.log(user.firstName,user.lastName);
//     document.writeln(`
//         <div>
//         <h1>${user.firstName} ${user.lastName}</h1>
//         <img src='${user.image}'>
//         </div>
//         `);
//   })
// }

//! DESTRUCTURING
let arr = [10, 20, 30, 40, 50];
let [a1, a2, a3, a4, a5] = arr;
console.log(a2);

let arr2 = [100, 200, [300, 400], 500];
let [b1, b2, [b3, b4], b5] = arr2;
console.log(b3, b5);

let arr3 = ["hello", 10, "world", 20, 30, "hi"];
let [str1, , str2, , , str3] = arr3;
console.log(str1, str2, str3); // hello world hi

let arr4 = [1000, ["Javacript", "React"], 2000, 3000];
let [c1, [, c2], , c3] = arr4;
console.log(c1, c2, c3);

let user = {
  id: 1,
  ename: "John Doe",
  email: "john@gmail.com",
  //   salary: 90000,
};
let { email, ename: fullName, salary: sal = 0 } = user;
console.log(email, fullName, sal);

let employee = {
  empID: 5678,
  empName: "John Wick",
  skills: {
    frontend: ["html", "css", "js", "react", "tailwind", "bootstrap"],
    backend: ["java", "python", "node", "express"],
    database: ["mongodb", "sql", "postgre sql"],
  },
};
// empName,js,node,mongodb