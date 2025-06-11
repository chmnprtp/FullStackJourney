# 1 What is Node.js and what Javascript runtime does it use?
Node js is a runtime environment. it is a library of js.
it uses v8 engines outside the browser.

#  2What is the difference between user-defined modules and built-in modules in NOde.js give an example?
User defined module are created by user to use that module/funtion outside the file
ex - 
    function abc(){
        clg('hi')'
    }
    module.exports = {
        abc
    }

    -->there are two way by which we can export 
        - use export in front of function/object or anything
        - or we can export multiple thing using module.exports

     -->those things which are exported we can import using require methods
example -const abc = require(""path of the module)
         const {multiple module from same file} = require("path of the file)

         abc() // it will print hi


Built-in module - are predife code available in nodejs which we can use as our requirement
    ex - fs, os etc..

    syntax - const file = require("fs")
    fs.writeFileSync("demi","dsafd");

# 3 Write a simple script using the fs module synchronous mehtod readFileSync to read a file and log its contents.
    const fs = require("fs");
    result = fs.readFileSync("./index.txt")
    console.log(result.toString());

# 4 create a function that use readFileSync to read two file
const fs = require("fs");
result = fs.readFileSync("./index.txt")
// console.log(result.toString());

result2 = fs.readFileSync("./hello.txt")
newSData = result + result2
fs.writeFileSync("./newFile.txt",newSData)

# how would you handle error in synchronous fs operation
using try catch

try{
    result2 = fs.readFileSync("./hello.txt")
    console.log(result2.toString())
}
catch(err)
{
    console.log(err)

}