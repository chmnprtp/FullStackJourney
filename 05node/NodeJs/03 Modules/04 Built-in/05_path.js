// path ==> it is an example of built-in modules
//* global variable , methods ==> these are the methods or variable that does not need to be imported
//* Example(methods) ==> console.log( ), Promise, setTImeout,
//* examples(variables) ==> __filename, __dirname

// console.log("filename"+__filename)
//Output: filename/Users/chmn/Desktop/JSpider/node/NodeJs/03 Modules/04 Built-in/path.js
// __filename returns the absolute path of the current working file
// absolute path - which shows from base root directory
//-------------------------------
// console.log("dirname"+__dirname)
//Output: dirname/Users/chmn/Desktop/JSpider/node/NodeJs/03 Modules/04 Built-in
// __dirname returns the absolute path of the current directory/folder file
//-------------------------------

// console.log(global);
//! path import
const path = require("path");
// console.log(path);

//! 1) basename() ==> it returns the base part(last part) of the path(it can accept both relative and absolute path)
//-------------------------------
    // console.log(path.basename(__dirname));  //Output: 04 Built-in
    // console.log(path.basename(__filename)); //Output: path.js
    // console.log(path.basename("D:/Something/Node/indexedDB.txt")) //Output:indexedDB.txt
    // console.log(path.basename("dirname/Users/chmn/Desktop/JSpider/node/NodeJs/03 Modules/04 Built-in")) //Output:04 Built-in
    // console.log(path.basename("../User-Defined/app.js")) //Output: app.js
    // console.log(path.basename("user/hi/FolderName")) //Output: FolderName
//-------------------------------

//! 2) extname() ==> it return extension of the file and in case of folder/directory it return ""
//-------------------------------
    // console.log(path.extname(__filename)); //Output: .js
    // console.log(path.extname("folder/index.html")) //Output: .html
    // console.log(path.extname("foldername"));//Output ""
    // console.log(path.extname(__dirname))//Output: ""
//-------------------------------

//! 3) parse() ==> it returns an object of the path of the path provided
/*
    root : "it represents the root of the path"
    dir :  "it represents the directory/folder of the path"
    ext : "it return the extension of the path"
    base : "it return the basename of the path"
? in case we are not passing absolute path, then rooot will be empty
    */
//-------------------------------
    // console.log(path.parse(__filename));
    // console.log(path.parse("./App/Index/demo.py"))
    // console.log(path.parse(__dirname))
    // console.log(path.parse("./App/index"));
//-------------------------------

//! 4) format() ==>
//-------------------------------
    // let pathObject = path.parse("./App/Index/demo.py");
    // console.log(path.format(pathObject));

    // let pathObject1 = path.parse("./App/Index/demo");
    // console.log(path.format(pathObject1))
//-------------------------------

//! 5) join() ==>
    const fs = require("fs");
    console.log(path.join("folder1","folder2","index.html")) //Output: folder1/folder2/index.html
    // fs.mkdirSync(path.join(__dirname,"..","02 Starter","Demo")); //TODO