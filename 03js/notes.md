# What is JavaScript?
Javascript is a high-level , object based ,programming language. 
it is a interpreted, user friendly, client-side scripting language.

# History of javascript:
javascript developed by Brenden Eich-1995
First name of javascript --> MOCHA --> LIVESCRIPT --> JAVASCRIPT

# Features of JavaScript:
 1 -Lightweight
    JavaScript is a lightweight programming language, meaning it has a small file size and is quick to load, making it ideal for web development.
 2 -Interpreted Language
    JavaScript is an interpreted language, meaning that the code is executed line-by-line by the browser (or other environments like Node.js) without the need for a separate compilation step.
 3 -Dynamically Typed Language
    JavaScript is dynamically typed, meaning variables do not need to be explicitly declared with a type (like int, string, etc.). The type of a variable is determined at runtime.
 4 -Weakly Typed Language
    JavaScript is weakly typed, meaning it performs automatic type conversions (type coercion) when different data types are combined. For example, a string can be added to a number without throwing an error, and JavaScript will try to convert the types to make the operation work.
 5 -Client-Side Scripting Language
    JavaScript is primarily used as a client-side scripting language. This means that it runs in the user's browser to create dynamic, interactive features (like form validation, animations, etc.) without the need for server interaction.
 6 -Asynchronous Programming
    JavaScript supports asynchronous programming through mechanisms like callbacks, promises, and async/await. This allows JavaScript to handle long-running tasks (like API requests) without blocking the execution of other code. (Note: JavaScript itself is single-threaded, but it supports asynchronous behavior.)

# JavaScript Characteristics:
 1 -Client-side Scripting Language
    JavaScript primarily operates on the client-side, meaning it runs in the user's web browser. It helps in creating interactive and dynamic content on web pages (e.g., handling user events, form validation, animations) without needing to reload the page.
 2 -High-level Language (User-friendly)
    JavaScript is a high-level language, which means it's easier for developers to write and understand. It provides a more user-friendly syntax compared to lower-level languages like assembly or C.
 3 -Interpreted Language
    JavaScript is an interpreted language, meaning it is executed line-by-line by the browser (or other JavaScript engines like Node.js). There’s no need for compilation before execution, making it faster for development and testing.
 4 -Loosely Typed (Weakly Typed)
    JavaScript is loosely typed, meaning variables don’t require an explicit declaration of their data type. The type of the variable can change during runtime. This provides flexibility but can also lead to unexpected behavior due to automatic type coercion.
 5 -Dynamic Language 
    JavaScript is dynamic in nature. This means that the data type of a variable can be determined during runtime, and it can be changed as the program executes. For example, a variable can store a number at one point and a string at another.
 6 -Object-based Language
    JavaScript is an object-based language, meaning it supports objects, which can contain properties (data) and methods (functions). However, it's not purely object-oriented since it doesn’t require everything to be a class (though ES6 introduced class syntax). JavaScript uses prototypes for inheritance, rather than classes.

# Uses of Javascript
 1 -Web application
 2 -Web Develipment
 3 -Mobile Applications
 4 -Game Development
 5 -Presentation and Slideshows
 6 -Server applications
 7 -Web servers
 8 -Displat date and time
 9 -Client Side validation
 10 -Display popup windows and dialog boxex
 11 -Dynamic drop-down menu

# Note: The file extension for the javascript is .js

# ✅ Attaching JavaScript to an HTML File
JavaScript can be added to an HTML file in two main ways:
 1. Internal JavaScript
    You can write JavaScript directly inside the HTML file using the <script> tag.
    Syntax:
    <!DOCTYPE html>
    <html>
    <head>
        <title>JavaScript by Sarvesh</title>
    </head>
    <body>
        <h1>Hello, World!</h1>

        <script>
            // JavaScript code goes here
            console.log("This is internal JavaScript.");
        </script>
    </body>
    </html>
 2. External JavaScript
    Steps to Use External JavaScript:
    Create a JavaScript file (e.g., index.js)
    Write your JavaScript code inside the file
    Link the file to your HTML document using:
        <script src="path/to/file.js"></script>

    Important Notes:
    Correct file path: Ensure the src value points to the correct location of the .js file.
    Script placement: It's best practice to place the <script> tag just before the closing </body> tag, so the HTML content loads before the JavaScript runs.
    Use straight quotes: Always use straight double quotes (" ") instead of curly quotes (“ ”) in code, to avoid syntax errors.

# Printing Statements in JavaScript
    In JavaScript, there are two main types of printing statements:

    document.write();
    console.log();

    1. document.write()
    document.write() is used to display output directly in the web browser.
    It is mainly used for client-side output, visible to the user.
    It is generally used in simple examples or for testing purposes.
    Not recommended in modern web development because using it after the page has loaded can overwrite the entire HTML content.
    document.write("Hello, World!");

    2. console.log()
    console.log() is used to display output in the developer console of the browser.
    It is mostly used by developers for debugging and testing.
    The console does not affect the web page content, making it a safe way to inspect values.
    Explanation:
    console is an object.
    The dot (.) is the access operator.
    log is a method (function) of the console object.
    It accepts arguments as data and prints them to the console.
    console.log("Hello from the console!");

# TOKENS in JavaScript
    In JavaScript, a token is the smallest meaningful unit in a program that the JavaScript interpreter understands. The code written in JavaScript is made up of different types of tokens.

 1. Keywords
    These are reserved words that have special meaning in JavaScript.
    Keywords are used to perform specific operations defined by the language.
    Examples:
    var, if, else, for, while, function, return, const, let

    Note:
    All keywords must be written in lowercase.
    Keywords cannot be used as identifiers (like variable names or function names).

 2. Identifiers
    Identifiers are names used to identify variables, functions, arrays, objects, etc.
    These are user-defined names.
    Examples:
    myVariable, totalCount, calculateSum

    Rules for Identifiers:
    Cannot start with a number.
    Cannot use JavaScript keywords as identifiers.
    Only special characters allowed at the beginning are underscore (_) and dollar sign ($).
    Identifiers are case-sensitive (total and Total are different).

 3. Literals
    Literals are fixed values used directly in the code.
    They represent data.

    Types of literals:
    Numeric Literal: 10, 3.14
    String Literal: "Hello", 'World'
    Boolean Literal: true, false
    Null Literal: null

    EXAMPLE:
    let age = 25;          // 25 is a numeric literal
    let name = "Sarvesh";  // "Chaman" is a string literal

 4. Operators
    Operators are symbols that perform operations on operands (variables or values).

    Examples of operators:
    Arithmetic Operators: +, -, *, /, %
    Assignment Operators: =, +=, -=
    Comparison Operators: ==, !=, ===, <, >
    Logical Operators: &&, ||, !

# JavaScript Variables
    A JavaScript variable is a name given to a memory location used to store data. Variables allow you to hold values that can be changed and reused throughout your program.

    Types of Variables in JavaScript:
 1. Local Variable
    Declared inside a function.
    Accessible only within that function.
 2. Global Variable
    Declared outside of any function.
    Accessible throughout the entire script.

    Rules for Declaring JavaScript Variables (Identifiers):
    1. Variable names must begin with:
        A letter (a–z or A–Z)
        An underscore (_)
        A dollar sign ($)
    2. After the first character, you can use letters, digits (0–9), underscores, or dollar signs.
    3. Variable names are case-sensitive.

    Example: x and X are treated as different variables.
    var x = 10;
    var _value = "sonoo";
    var $amount = 250;
    var name1 = "John";

    Summary:
    | Feature                   | Rule / Example                |
    | ------------------------- | ----------------------------- |
    | Valid starting characters | a–z, A–Z, `_`, `$`            |
    | Digits allowed            | After the first character     |
    | Case sensitivity          | `x` ≠ `X`                     |
    | Invalid start examples    | `123name`, `*value`, `-total` |


# A primitive in JavaScript is a data type that is not an object and has no methods. These values are immutable, meaning they cannot be altered once created.
JavaScript has 7 primitive data types:

String
Number
Boolean
Undefined
Null
BigInt
Symbol
Each primitive represents a single value 

# JavaScript Data Types
    JavaScript provides various data types to store different kinds of values. These data types are categorized into two main types:

 1. Primitive Data Types
    Primitive data types represent single values and are immutable (they cannot be changed).

    JavaScript supports the following primitive data types:
    1. Number – Represents numeric values.
        Example: 10, 3.14
    2. String – Represents a sequence of characters.
        Example: "Hello", 'JavaScript'
    3. Boolean – Represents logical values: true or false
    4. Undefined – A variable that has been declared but not assigned a value.
       Example:
        let x;
        console.log(x); // undefined
    5. Null – Represents an intentionally empty or unknown value.
        Example: let x = null;
    6. BigInt – Used to represent large integers beyond the safe integer limit for Number.
        Example: let big = 1234567890123456789012345678901234567890n;


 2. Non-Primitive (Reference) Data Types
    Non-primitive data types can store multiple values and are mutable.

    JavaScript supports the following non-primitive data types:
    1. Object – Used to store collections of data in key-value pairs.
        Example:
        let person = { name: "John", age: 30 };
    2. Array – Special type of object used to store an ordered list of values.
        Example:
        let colors = ["red", "green", "blue"];
    3. Function – A block of code designed to perform a task, which is also treated as an object in   JavaScript.
        Example:
        function greet() {
            console.log("Hello");
        }


# JavaScript var, let, and const
    JavaScript provides three ways to declare variables:
    var – The traditional way (function-scoped)
    let – Introduced in ES6 (block-scoped)
    const – Also introduced in ES6 (block-scoped, constant)

    Feature Comparison Table
    | Feature                                  | `var` | `let` | `const` |
    | ---------------------------------------- | :---: | :---: | :-----: |
    | **Declaration (only)**                   |   ✓   |   ✓   |    ✕    |
    | **Initialization (only)**                |   ✓   |   ✓   |    ✕    |
    | **Declaration + Initialization**         |   ✓   |   ✓   |    ✓    |
    | **Re-declaration in same scope**         |   ✓   |   ✕   |    ✕    |
    | **Re-initialization (assign new value)** |   ✓   |   ✓   |    ✕    |
    | **Re-declaration + Re-initialization**   |   ✓   |   ✕   |    ✕    |

    Explanation:
    var
    Function-scoped.
    Allows re-declaration and re-assignment.
    Hoisted (but initialized as undefined).

    let
    Block-scoped.
    Allows re-assignment but not re-declaration in the same block.
    Not hoisted like var (in a safe way – cannot access before declaration).

    const
    Block-scoped.
    Must be declared and initialized at the same time.
    Cannot be re-declared or re-assigned.
    Used for variables whose values should not change.

    Examples:
    // var
    var x = 10;
    var x = 20;  // Re-declaration allowed
    x = 30;      // Re-initialization allowed

    // let
    let y = 10;
    // let y = 20; // Error: Re-declaration not allowed
    y = 30;       // Re-initialization allowed

    // const
    const z = 10;
    // const z = 20; // Error: Re-declaration not allowed
    // z = 30;       // Error: Re-initialization not allowed


# Global Execution Context (GEC)
    The Global Execution Context is a block of memory created when JavaScript code runs.
    It is the first context created by the JavaScript engine.
    It consists of two phases:
 1. Variable Phase (Creation Phase)
    Executed first.
    Memory is allocated for all variables and functions.
    Variables are initialized with undefined.
    Functions are fully stored with their definitions.
    This happens from top to bottom of the code.
 2. Execution Phase
    Executed after the variable phase.
    Actual code execution starts.
    Values are assigned, and statements are executed in top-to-bottom order.

# Window Object (Global Object in Browser)
    When JS runs in a browser, it automatically creates a global object called window.
    The global execution context is attached to the window object.
    Any variable or function declared with var at the global level becomes a property of the window object.
    Example:
    var a = 10;
    console.log(window.a);  // Output: 10
    The window object also contains built-in functions like alert(), setTimeout(), console, etc.

# Hoisting
    Definition:
    Utilizing the variable before declaration and initialization is called as Hoisting.

    Key Points:
    Hoisting can be achieved by var, because var is a global scope or global variable.
    Hoisting cannot be achieved by let and const, because let and const are script scope.
    Whenever we hoist var the result is undefined.
    Whenever we try to hoist let and const the result is Uncaught ReferrenceError.

    Example:
    console.log(x); // undefined
    var x = 10;

    console.log(y); // ReferenceError
    let y = 20;

# Temporal Dead Zone(TDZ)
    Definition:
    TDZ is the period between entering the scope and the actual declaration where let and const exist but cannot be accessed.

    Key Points:
    TDZ is achieved only in let and const.
    Because, whenever we try to hoist let and const the result is Uncaught ReferrenceError.
    TDZ cannot be achieved in var.
    Because, whenever we hoist var the result is undefined.

    Example:
    console.log(a); // ReferenceError: Cannot access 'a' before initialization
    let a = 10;

# JavaScript Functions

    A JavaScript function is a block of code designed to perform a specific task. It allows you to group code into reusable blocks that can be called multiple times during the execution of your program.

    Function Syntax:
    A JavaScript function is defined with the function keyword, followed by the name of the function and parentheses.
    Inside the parentheses, you can define parameters (optional), which act as placeholders for values passed to the function.
    The actual code to be executed by the function is enclosed inside curly braces {}.

    Function Naming Rules:
    Function names can include letters, digits, underscores (_), and dollar signs ($).
    Function names must start with a letter, underscore, or dollar sign (just like variable names).

    Function Invocation (Calling a Function):
    A function is invoked (or called) by using its name, followed by parentheses.
    Functions can be invoked in several ways:
    When an event occurs (e.g., when a user clicks a button).
    From another function (a function can call another).
    Automatically (using self-invoking functions).

    Function Return:
    A return statement inside a function ends its execution and returns a value to the caller.
    If no return statement is specified, the function implicitly returns undefined.

    Why Use Functions?
    Code Reusability: Functions allow you to reuse the same block of code multiple times without needing to rewrite it. You can call a function as many times as needed, with different inputs.
    Modularity: Functions help in breaking down complex problems into smaller, more manageable pieces, making it easier to understand, maintain, and debug.
    Flexibility: Functions can accept parameters and return values, which makes them versatile. You can use the same function with different inputs to perform various tasks.
    Maintainability: By organizing code into functions, the program becomes easier to maintain and update. Functions also allow you to isolate problems and fix them without affecting the entire codebase.

    Types of Functions in JS:
    1. Anonymous function
    2. Named function
    3. Function with expression
    4. Nested function
    5. Immediate invoking function
    6. Arrow function
    7. Higher order function
    8. Callback function

    1. Anonymous Function
        A function without name is known as Anonymous function
        Syntax:
            function(parameters) {
            // function body
            }

    2. Named Function
        A function with name is called as named function
        Syntax:
            function functionName(parameters) {
            // function body
            }
        
    3. Function with Expression
        It is the way to execute the anonymous function.
        Passing whole anonymous function as a value to a variable is known as function with expression.
        The function which is passed as a value is known as first class function
        Example:
            let x = function() {
            // block of code
            }
            x();

    4. Nested Function
        A function which is declared inside another function is known as nested function.
        Nested functions are unidirectional i.e., We can access parent function properties in child function but vice-versa is not possible.

        The ability of js engine to search a variable in the outer scope when it is not available in the local scope is known as lexical scoping or scope chaining.

        Whenever the child function needs a property from parent function the closure will be formed and it consists of only required data.

        A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function. Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created.

        A block is also treated as a scope since ES6. Since JavaScript is event-driven, closures are useful as they help to maintain the state between events.

        Example:
            function parent() {
            let a = 10;
            function child() {
                let b = 20;
                console.log(a + b);
                child();
            }
            }
            parent();

       JavaScript Currying
            Calling a child function along with parent by using one more parenthesis is known as JavaScript currying
        Example:
                function parent() {
                let a = 10;
                function child() {
                    let b = 20;
                    console.log(a + b);
                }
                return child;
                }
                parent()();  // JavaScript currying

       Immediate Invoking Function (IIF)
        A function which is called immediately as soon as the function declaration is known as IIF
        We can invoke anonymous function by using IIF
        Example:
            (function() {
            console.log("Hello");
            })();

      Arrow Function
        It was introduced in ES6 version of JS.
        The main purpose of using arrow function is to reduce the syntax.
        Example:
            let x = (a, b) => console.log(a + b);
            let y = (a, b) => {
            return a + b;
            };
        Rules to write arrow function:
        In arrow function, no need of writing 'function' keyword
        In arrow function, no need of writing function name
        We can neglect {} whenever we have only 1 printing statement
        We can neglect () whenever we have only 1 parameter
        We can also neglect () whenever we don’t have any parameter but it has to be replaced with _
        We can write return-type function even without return keyword using arrow function
        If we are using {}, it is mandatory to use return keyword

      Higher Order Function (HOF)
        A function which accepts a function as a parameter is known as HOF
        It is used to perform multiple operations with different values.
        Example:
            function hof(a, b, task) {
            let res = task(a, b);
            return res;
            }

            let add = hof(10, 20, function(x, y) {
            return x + y;
            });

            let mul = hof(10, 20, function(x, y) {
            return x * y;
            });

            console.log(add);
            console.log(mul);

      Callback Function
        A function which is passed as an argument to another function is known as callback function.
        The function is invoked in the outer function to complete an action.
        Example:
            function first() {
            console.log("first");
            }

            function second() {
            console.log("third");
            }

            function third(callback) {
            console.log("second");
            callback();
            }

            first();
            third(second);

# STRING CONCEPT IN JAVASCRIPT
    STRING:-Collection of characters (or) bunch of characters we called it as string
        String methods:-
        String.length
        String.slice()
        String.substring()
        String.substr()
        String.replace()
        String.replaceAll()
        String.toUpperCase()
        String. toLowerCase
        String.concat()
        String.trim()
        String.trimStart()
        trimEnd()
        padStart()
        padEnd()
        String charAt()
        String charCodeAt()
        String split()

# JavaScript Arrays
    Definition:
        An Array is a collection of different elements.
        JavaScript arrays are heterogeneous, meaning they can store elements of different types (e.g., numbers, strings, objects, etc.).

    Ways to Create an Array in JavaScript:
    1. By Array Literal
        This is the most common and simplest way to create an array.
        Syntax:
            var arrayName = [value1, value2, ..., valueN];

        Elements are enclosed in square brackets [] and separated by commas ,.
        The .length property returns the number of elements in the array.
        Example:    
            <script>
            var emp = ["Sonoo", "Vimal", "Ratan"];
            for (var i = 0; i < emp.length; i++) {
                document.write(emp[i] + "<br/>");
            }
            </script>
    2. By Array Constructor (Using new Keyword)
        Creates an array instance by calling the Array constructor and passing values as arguments.
        Example:

        <script>
        var emp = new Array("Jai", "Vijay", "Smith");
        for (var i = 0; i < emp.length; i++) {
            document.write(emp[i] + "<br>");
        }
        </script>

        Output:
            Jai
            Vijay
            Smith
        
        JAVASCRIPT ARRAY METHODS:
        | **Method**   | **Description**                                                                 |
        | ------------ | ------------------------------------------------------------------------------- |
        | `push()`     | Inserts an element at the **end** of the array.                                 |
        | `unshift()`  | Inserts an element at the **beginning** of the array.                           |
        | `pop()`      | Removes the **last** element from the array.                                    |
        | `shift()`    | Removes the **first** element from the array.                                   |
        | `indexOf()`  | Returns the **index** of a specified element.                                   |
        | `includes()` | Checks if a specified element is **present** in the array (returns true/false). |
        | `at()`       | Returns the element at a **specified index**.                                   |
        | `slice()`    | Returns a portion of the array. **Does not** modify the original array.         |
        | `splice()`   | Adds/removes elements in an array. **Modifies** the original array.             |
        | `join()`     | Joins all array elements into a **single string**.                              |
        | `concat()`   | Joins/concatenates **two or more arrays**.                                      |
        | `toString()` | Converts array elements into a **comma-separated string**.                      |
        | `reverse()`  | Reverses the **order** of elements in the array.                                |


# JavaScript Objects
   JavaScript object is a non-primitive data type that allows you to store multiple collections of data.
       
        Syntax to Declare an Object:
        const object_name = {
        key1: value1,
        key2: value2
        };
        Each member of an object is a key: value pair, separated by commas and enclosed in curly braces {}.

        Example:
        // object creation
        const person = {
        name: 'John',
        age: 20
        };
        console.log(typeof person); // object

        Accessing Object Properties
   1. Using Dot Notation   
        Syntax:
        objectName.key

        Example:
        const person = {
        name: 'John',
        age: 20
        };
        console.log(person.name); // John

   2. Using Bracket Notation
        Syntax:
        objectName["key"]

        Example:
        const person = {
        name: 'John',
        age: 20
        };
        console.log(person["name"]); // John

        JavaScript Nested Objects
        An object can also contain another object as a value.
        Example:
        // nested object
        const student = {
        name: 'John',
        age: 20,
        marks: {
            science: 70,
            math: 75
        }
        };
        // accessing property of student object
        console.log(student.marks);           // { science: 70, math: 75 }
        // accessing property of marks object
        console.log(student.marks.science);   // 70


# Destructuring in JavaScript
    Destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays or properties from objects into distinct variables.

    🔹 Array Destructuring
       Example 1: Basic
        let arr = [10, 20, 30, 40, 50];
        let [a, b, c, d, e] = arr; // Destructuring
        console.log(a); // 10

        Example 2: Nested Array
        let arr = [10, 20, [1000, "hello", ["hii", 2000]]];
        let [a, b, [c, d, [e, f]]] = arr; // Destructuring
        console.log(e); // "hii"

    🔹 Object Destructuring
        Example 1: Basic
        let obj = {
        ename: "Raj",
        company: "Google",
        sal: 60000
        };
        let { ename, company, sal } = obj; // Destructuring
        console.log(ename); // Raj

        Example 2: Nested Object
        let obj = {
        ename: "Raj",
        company: "Google",
        sal: 60000,
        games: {
            outdoor: ["cricket", "volleyball", "football"],
            indoor: ["ludo", "chess"]
        }
        };
        // Destructuring
        let { ename, company, sal, games: { outdoor: [a, b, c], indoor: [x, y] } } = obj;
        console.log(ename); // Raj
        console.log(a);     // cricket
        console.log(x);     // ludo


# Advanced Array Methods in JavaScript
    🔹 1. filter()
        filter() is a Higher Order Function (HOF) that checks a condition for each element in the original array.
        If the condition is satisfied, that element is pushed into a new array.
        It does not modify the original array.
        Syntax:

        arr.filter((element, index, array) => {
        return condition;
        });
        Example:

        let numbers = [1, 2, 3, 4, 5];
        let evenNo = numbers.filter((x) => x % 2 === 0);
        console.log(evenNo); // [2, 4]
        Parameters:

        element: The current element being processed.
        index (optional): The index of the current element.
        array (optional): The original array.

    🔹 2. map()
        The map() method creates a new array by applying a function to each element of an existing array.
        It does not change the original array.
        Syntax:

        arr.map((element, index, array) => {
        return newValue;
        });
        Example:

        const numbers = [1, 2, 3, 4, 5];
        const doubledNumbers = numbers.map(number => number * 2);
        console.log(doubledNumbers); // [2, 4, 6, 8, 10]

    🔹 3. reduce()
        The reduce() method applies a function against an accumulator and each element in the array to reduce it to a single value.
        If no initial value is provided, the first element becomes the initial accumulator.
        Syntax:

        arr.reduce((accumulator, currentValue, index, array) => {
        // logic
        }, initialValue);
        Example:

        let arr = [1, 2, 3, 4, 5];
        let sum = arr.reduce((accumulator, currentValue, index, array) => {
        console.log(accumulator, currentValue, index);
        return accumulator + currentValue;
        }, 100);
        console.log(sum); // 115

# JavaScript Objects
    What is an Object?
    A JavaScript object is an entity having state (properties) and behavior (methods).
    Object is a collection of key value pair.
    Examples: car, pen, bike, keyboard, etc.
    JavaScript is an object-based language, where everything is an object.
    Creating Objects in JavaScript
    JavaScript objects can be created in two main ways:

 1. Using Object Literal
    Syntax:
    let objectName = {
    property1: value1,
    property2: value2,
    ...
    };

    Example:
    let emp = {
    id: 102,
    name: "Kumar",
    salary: 40000
    };
    document.write(emp.id + " " + emp.name + " " + emp.salary);

 2. Using Object Constructor (new keyword)
    Syntax:
    let objectName = new Object();
    
    Example:
    let emp = new Object();
    emp.id = 101;
    emp.name = "Ravi";
    emp.salary = 50000;
    document.write(emp.id + " " + emp.name + " " + emp.salary);
    
    Accessing Object Properties
        Dot Notation
        Most common method to access object properties.
        Uses a . (dot) between the object and property name.
    
        Example:
        const person = {
        name: 'John',
        age: 30,
        address: {
            street: '123 Main St',
            city: 'New York'
        }
        };
        console.log(person.name);         // John
        console.log(person.address.city); // New York

    Object Methods
        You can use built-in methods to interact with object properties:
        Method	            Description
        Object.keys(obj)	Returns an array of keys.
        Object.values(obj)	Returns an array of values.
        Object.entries(obj)	Returns an array of [key, value] pairs.
        
        Example:
        let obj4 = {
        ename: "lavanya",
        id: 123,
        sal: 20000
        };
        console.log(Object.keys(obj4));    // ["ename", "id", "sal"]
        console.log(Object.values(obj4));  // ["lavanya", 123, 20000]
        console.log(Object.entries(obj4)); // [["ename", "lavanya"], ["id", 123]],


# Loops in JavaScript
    JavaScript provides several looping mechanisms that allow us to iterate through data structures such as arrays and objects. The most commonly used loops are:

 1. forEach() Loop
    The forEach() method calls a function for each element in an array.
    It is not executed for empty elements.

    Example:
    const array1 = ['a', 'b', 'c'];
    array1.forEach((element) => console.log(element));
    Output:
    a
    b
    c

 2. for...of Loop
    The for...of loop is used to loop over iterable objects such as arrays, strings, etc.
    This loop iterates over the values of an iterable object.

    Example:
    const name = "W3Schools";
    let text = "";
    for (const x of name) {
    text += x + "<br>";
    }
    document.write(text);
    Output:
    W
    3
    S
    c
    h
    o
    o
    l
    s

3. for...in Loop
    The for...in loop is used to iterate over the keys (properties) of an object.
    Example:

    const object = { a: 1, b: 2, c: 3 };
    for (const property in object) {
    console.log(`${property}: ${object[property]}`);
    }
    Expected Output:

    a: 1
    b: 2
    c: 3

# DOM (Document Object Model) in JavaScript
    The DOM is a programming interface for web documents in JavaScript. It represents the structure of a document as a tree-like model, where each node is an object representing a part of the document, such as elements, attributes, and text.

    When a web page is loaded, the browser constructs a Document Object Model (DOM) for the page.

    The HTML DOM is represented as a tree of objects, where each element, attribute, and piece of text is a node in the tree.

    DOM Methods:
    These methods are used to target and manipulate HTML elements from a JavaScript file.

  1. getElementById(id)
    Retrieves an element by its unique id.
    Returns the first element with the specified id.
    Example:
    let element = document.getElementById("myElement");

 2. getElementsByClassName(className)
    Returns a collection (HTMLCollection) of all elements with the specified class name.
    It’s important to note that this returns a live collection (the collection is automatically updated when the DOM changes).

    Example:
    let elements = document.getElementsByClassName("myClass");
 3. getElementsByTagName(tagName)
    Returns a collection (HTMLCollection) of elements with the specified tag name.
    Example:
    let divs = document.getElementsByTagName("div");

 4. document.querySelector(selector)
    Returns the first element that matches the specified CSS selector.
    Example:
    let firstDiv = document.querySelector(".myClass");

 5. document.querySelectorAll(selector)
    Returns a NodeList of all elements that match the specified CSS selector.
    Unlike getElementsByClassName() and getElementsByTagName(), this method returns a static NodeList (it does not automatically update when the DOM changes).
    Example:
    let allDivs = document.querySelectorAll("div.myClass");



## feature of js

client side rendering - agr html client side bn rha h to
server side rendeering - html server se aara to server side rendering

# JavaScript features, methods, and concepts, categorized for easy reference.

1. Basic Syntax & Data Types
- `var`, `let`, `const` – Variable declarations 
- `typeof` – Checks the type of a variable 
- Primitive Data Types: 
- `string` – Text (`"Hello"`) 
- `number` – Numbers (`42`, `3.14`) 
- `boolean` – `true` or `false` 
- `undefined` – Variable declared but not assigned 
- `null` – Intentional absence of value 
- `bigint` – Large integers (`123n`) 
- `symbol` – Unique identifiers 

2. Operators
- Arithmetic: `+`, `-`, `*`, `/`, `%`, `**` (exponentiation) 
- Assignment: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=` 
- Comparison: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=` 
- Logical:`&&`, `||`, `!` 
- Bitwise: `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>` 
- Ternary: `condition ? value1 : value2` 

3. Control Flow (Loops & Conditionals)
- `if...else` – Conditional statements 
- `switch...case` – Multi-condition branching 
- `for` – Traditional loop 
- `while` – Loop with condition check before execution 
- `do...while` – Executes at least once 
- `for...in` – Iterates over object properties 
- `for...of` – Iterates over iterable objects 

4. Functions
- Function Declaration: `function name() {}` 
- Function Expression: `const func = function() {}` 
- Arrow Function: `const func = () => {}` 
- Default Parameters: `function test(x = 10) {}` 
- Rest Parameters: `function test(...args) {}` 
- Callback Functions – Functions passed as arguments 

5. Objects & Arrays
- Object Creation: `{ key: value }` 
- Access Properties: `obj.key`, `obj["key"]` 
- Object Methods: `Object.keys()`, `Object.values()`, `Object.entries()` 
- Array Creation: `[1, 2, 3]` 
- Array Methods: 
- `push()`, `pop()` – Add/remove from end 
- `shift()`, `unshift()` – Add/remove from start 
- `map()`, `filter()`, `reduce()` – Transform data 
- `forEach()` – Iterate over array 
- `find()`, `findIndex()` – Find elements 

6. Strings & Numbers
- String Methods: 
- `.length` – String length 
- `.charAt(index)` – Character at position 
- `.substring(start, end)`, `.slice(start, end)` – Extract substring 
- `.toUpperCase()`, `.toLowerCase()` – Case conversion 
- `.trim()` – Remove whitespace 
- `.split(separator)`, `.join(separator)` – Convert between array and string 

- Number Methods: 
- `Math.round()`, `Math.floor()`, `Math.ceil()` 
- `Math.random()` – Random number between 0 and 1 
- `Math.max()`, `Math.min()` – Get max/min value 

7. Date & Time
- `new Date()` – Creates a date object 
- `.getFullYear()`, `.getMonth()`, `.getDate()` – Extract parts of a date 
- `.setFullYear()`, `.setMonth()`, `.setDate()` – Modify date values 

8. Error Handling
- `try...catch` – Handle runtime errors 
- `throw` – Manually throw errors 
-`finally` – Code that runs regardless of errors 

9. DOM (Document Object Model)

- Select Elements: 
- `document.getElementById("id")` 
- `document.querySelector(".class")` 
- `document.querySelectorAll("div")` 

- Modify Elements: 
- `.textContent`, `.innerHTML` – Change content 
- `.setAttribute("attr", "value")` – Modify attributes 
- `.classList.add()`, `.classList.remove()` – Modify classes 

- Event Handling: 
- `.addEventListener("click", function)` 
- `.removeEventListener("click", function)` 

10. Asynchronous JavaScript
- `setTimeout(function, delay)` – Delayed execution 
- `setInterval(function, interval)` – Repeated execution 
- `Promise` – Handles async operations 
- `async/await` – Simpler async handling 
- `fetch(url)` – API calls 

11. ES6+ Features
- Destructuring: `const {x, y} = obj` 
- Spread Operator: `const newArr = [...arr]` 
- Template Literals: `` `Hello, ${name}!` `` 
- Modules: `import` / `export` 

FREE JavaScript Course: https://youtu.be/4YH3Hf3s9U0?si=aGdA_2uZI18CX1MW
