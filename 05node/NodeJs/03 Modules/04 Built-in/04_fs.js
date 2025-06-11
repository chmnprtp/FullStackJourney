//! fs ==> fs stands for file system. this module provide utilities for working with files and folders.
// working means ==> CRUD (create,read,update,delete)

//! import the built-in module
// let variableName = require("module-name")
// let variableName = require("node:module-name") // this is not mandatory
//  let fs = require("fs");
// let fsNode = require("node:fs");

// console.log(fs) //Output: some methods

/* CODE - 
SYNCHRONOUS         ASYNCHRONOUS
                    CALLBACK
                    THEN/CATCH
                    ASYNC-AWAIT
*/

//! ========================  using fs synchronously    =======================

//? 1) creating file
// method ==> writeFileSync()
// syntax ==> writeFileSync("filename/path.ext","data");
// passing all arguments is mandatory


// ---------------------------------------

// console.log("Start");
// fs.writeFileSync("./data.py","Hello"); //Output: new data.py file with Hello in it
// console.log("Middle");
// console.log("end");

// ---------------------------------------

// console.log("Start");
// fs.writeFileSync("./data.py"); // Output: TypeError [ERR_INVALID_ARG_TYPE]: The "data" argument must be of type string
// console.log("Middle");
// console.log("end");

// ---------------------------------------

//* if the file is already pesent then it will be overwritten otherwise a new file will be created
//* . => current folder
//* / => to access current folder


//? 2) reading a file
// method name - readFIleSync()
// syntax - readFileSync("path",encoding);
// passing all arguments is mandatory
// path - path of the file
// encoding - encoding type ("utf-8","utf-16","binary",etc...)

// ---------------------------------------

// console.log("start")
// let result = fs.readFileSync("./data.py");
// console.log(result); //Output: <Buffer 48 65 6c 6c 6f> => hexadecimal // this buffer is an array. [0011010101100101]
//TODO buffer and stream
// console.log("middle")
// console.log("end");

// ---------------------------------------
//* to read content of the file, use toString()
// console.log("start")
// let result = fs.readFileSync("./data.py");
// console.log(result.toString());  //Output: Data from data.py file
// console.log("middle")
// console.log("end");

// ---------------------------------------

// encoding  => represents the type of data you want to display
// "utf-8" => human readable fomat (letters,numbers,symbols,special characters) (unicode transforation format)

// console.log("start")
// let result = fs.readFileSync("./data.py","utf-8"); 
// console.log(result);  //Output: Data from data.py file
// console.log("middle")
// console.log("end");

// ---------------------------------------


//? 3) updating a file (update ==> append(adding soething at last))
// method ==> appendFileSync()
// syntax ==> appendFileSync("path","new data");
// passing all arguments is mandatory

// ---------------------------------------

// console.log("start")
// fs.appendFileSync("./data.py","\nadded data") //Output: added data append in data.py
// // \t ==> multiple spaces
// // \n ==> new line
// console.log("middle")
// console.log("end")

// ---------------------------------------

// console.log("start")
// fs.appendFileSync("./msti.text","\nadded data") //Output: new file with masti.txt will be created with passed data
// // \t ==> multiple spaces
// // \n ==> new line
// console.log("middle")
// console.log("end")
// //* if the file is already pesent then it will be overwritten otherwise a new file will be created with given data

// ---------------------------------------

//? 4) deleting a file
// method name ==> unlinkSync()
// syntax ==> unlinkSync("path");

// ---------------------------------------

// console.log("start")
// fs.unlinkSync("data.py"); //Output: data.py file deleted from folder structure
// console.log("file Deleted");

// ---------------------------------------

//? 5) creating a folder/directory
// method name ==> mkdirSync()
// syntax ==> mkdirSync("path/foldername")
// ---------------------------------------
// fs.mkdirSync("./demo");
// console.log("folder created")
// ---------------------------------------

//? 6) deleting a folder/directory
// method name ==> rmdirSync()
// syntax ==> rmdirSync("path/foldername");
// fs.rmdirSync("./demo");

//? 7) rename a file or folder/directory
// method name ==> renameSync()
// syntax ==> renameSync("old filename/folder-name", "path new file-name/folder-name");
// ---------------------------------------
// fs.renameSync("../../avc","../../abc")
// ---------------------------------------
// to delte  ==> folder1/folder2/index.html
// fs.unlinkSync("./folder1/folder2/index.html");
// fs.rmdirSync("./folder1/folder2");
// fs.rmdirSync("./folder1");
// ---------------------------------------
// fs.rmdirSync("./demo",{recursive:trure}); // will it will be depriciated
//used for deleting a folder structure forcefully
// ---------------------------------------

//? create a function that create a folder structure like this
// ==> backend/src/routes/user.js
// ---------------------------------------
// function createStructure(){
// fs.mkdirSync("./backend");
// fs.mkdirSync("./backend/src");
// fs.mkdirSync("./backend/src/routes");
// fs.writeFileSync("./backend/src/routes/user.js","Testing");
// }
// createStructure();
// ---------------------------------------
// try{

//     fs.mkdirSync("./backend");
//     fs.mkdirSync("./backend/src");
//     fs.mkdirSync("./backend/src/routes");
//     fs.writeFileSync("./backend/src/routes/user.js","Testing");
// }catch(err){console.log(err)}
// ---------------------------------------
//? create a function that delete a folder structure like this
// ==> backend/src/routes/user.js


//? copy the contents of "fs.js" to new file named "fs_copy.js"
// ---------------------------------------
// const result = fs.readFileSync("./testing.txt","utf-8");
// fs.writeFileSync("./newFile","result");
// ---------------------------------------

//? copying a file
// method ==> copyFileSync()
// syntax ==> copyFileSync("path of the file to be copied","path of new file")
// ---------------------------------------
// fs.copyFileSync("./testing.txt","./newFile")
// ---------------------------------------




//! ========================  using fs asynchronously    =======================
//? usign callback , then/catch and using async/await

//! ========================  using callback asynchronously    =======================
//! callback is not always async

//? 1) creating a file
// method name ==> writeFile()
// syntax ==> writeFile("path/file-name","data",callback)

//* libUV ==> async operation --> 
// ---------------------------------------
// console.log("start")
// fs.writeFile("./data.txt","this is my data",(err)=>{
//     if(err) console.log(err);
//     console.log("file created")
// })
// console.log("middle")
// console.log("end")
// ---------------------------------------

//* if the file is already pesent then it will be overwritten otherwise a new file will be created
//* error first callback ==> pass the error as first parameter to handle any error occurred

//? 2) read a file
// method name ==> readFile()
// syntax ==> readFile("path of the file","encoding",callback) // it doesnot return anything
// ---------------------------------------
// console.log("start")
//  fs.readFile("./data.txt","utf-8",(err,data)=>{
//     if(err)  console.log(err);
//     console.log("file data:",data);
// })
// console.log("middle")
// console.log("end")
// ---------------------------------------

//? 3) updating a file
// method name ==> appendFile()
// syntax ==> appendFile("pathh of the file","new data",callback)
// ---------------------------------------
// console.log("start")
// fs.appendFile("./data.txt","\nThis is new data",(err)=>{
//     if(err) console.log(err);
//     console.log("file updated")
// })
// console.log("middle")
// console.log("middle")
// ---------------------------------------

//? 4) delete a file
// method name ==> unlink()
// syntax ==> unlink("path of the file",callback)
// ---------------------------------------
    // fs.unlink("./testing.txt",(err)=>{
    //     if(err) console.log(err);
    //     console.log("file deleted")
    // })
// ---------------------------------------

//? 5) create a folder
// method ==> mkdir()
// syntax ==> mkdir("path and name of folder", callback)

// ---------------------------------------
// fs.mkdir("./folderName",(err)=>{
//     if(err) console.log(err)
//     console.log("folder created")
// })
// ---------------------------------------

//? 6) removeing a folder/directory
// method name ==> rmdir()
// syntax ==> mkdir("path of the folder",callback)

// ---------------------------------------
// fs.rmdir("./folderName",(error)=>{
//     if(error) console.log(error)
//         console.log("folder deleted")
// })
// ---------------------------------------

//? 7) renaming a file/directory
// method name ==> rename()
// syntax ==> rename("path of the file","new name of file",callback)

// ---------------------------------------
// fs.rename("./data.txt","newName.js",(error)=>{
//     if(error) console.log(error)
//         console.log("file renamed");
// })
// ---------------------------------------


//! ========================  using asynchronously ==> then/catch   =======================
// let fsPromises = require("fs").promises;
let fsPromises = require("fs/promises");

//? 1) create a file
// method name ==> writeFile()
// syntax ==> writeFile("path of file","data").then().catch()


// ---------------------------------------
// console.log("start")
// let result = fsPromises.writeFile("./data.txt","this is my file");
// console.log(result)
// result.then(()=>{ // then is used to resolve a promise
//     console.log("file created");
// }).catch((err)=>{ // catch is used to rejet a promise or handle any errors
//     console.log("file created");
// })
// console.log("middle")
// console.log("end")
// ---------------------------------------

//? 2) read a file
// method name ==> readFile()
// syntax ==> readFile("path of the file","utf-8").then().catch()

// ---------------------------------------
// let result = fsPromises.readFile("./data.txt","utf-8");
// result.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err);
// })
// ---------------------------------------

//? 3) update a file
// method name ==> appendFile()
// syntax ==> appendFile("file path","new data").then().catch()

// ---------------------------------------
// fsPromises.appendFile("./data.txt","Hello").then(()=>{
//     console.log("file appended")
// }).catch((error)=>{
//     console.log(error)
// })
// ---------------------------------------

//? 4) delete a file
//? 5) creating a folder
//? 6) renaming a folder/file
//? 7) copying a file


//! ========================  using asynchronously ==> async await  =======================

//? 1) create a file
// method name ==> writeFile()
// syntax ==> wwriteFile("path of file")

// ---------------------------------------
// try {
//     async function createFile(){
//         let result = await fsPromises.writeFile("./data.txt","my promise data");
//         // console.log()
//     }
//     createFile();
// } catch (error) {
//     console.log(error)
// }
// ---------------------------------------

//? 2) read a file
// method name ==> writeFile()
// syntax ==> wwriteFile("path of file","encoding")

// ---------------------------------------
// try {
//     async function myreadFile(){
//         let result = await fsPromises.readFile("./data.txt","utf-8");
//         console.log(result)
//     }
//     myreadFile();
// } catch (error) {
//     console.log(error)
// }
// ---------------------------------------

//? 3) update a file
// method name ==> appendFile()
// syntax ==> appendFile("path of file","new data")
// ---------------------------------------
// try {
//     async function updateFile(){ //! why without asyn also it works
//         await fsPromises.appendFile("./data.txt","this is new data")
//     }
//     updateFile()
// } catch (error) {
//     console.log(error)
// }
// ---------------------------------------

//? 4) delete a file
// method name ==> unlink()
// syntax ==> unlink("path of the file")

// ---------------------------------------
try {
     function deleteFile(){ //! why without asyn and await also it works
     fsPromises.unlink("./data.txt")
    }
    deleteFile()
} catch (error) {
    console.log(error)
}
// ---------------------------------------

//? 5) creating a folder
// method name ==> mkdir()
// syntax ==> mkdir("path with folder name")
// ---------------------------------------
// try {
//     async function createFolder() {
//         await fsPromises.mkdir("./folderName")
//     }
//     createFolder()
// } catch (error) {
//     console.log(error)
// }
// ---------------------------------------

//? 6) renaming a folder/file
//? 7) copying a file



//! sync execution, async(callback,then/catch,and async await)
//? Buffer - Buffer is an temporary array which is fixed in size and it holds binary data.
//TODO -     and it is used to manipulate the data.            
//          Source --> Buffer Memory(RAM) --> destination
//         read whole file then go to buffer memory then desitantion 
//         array 
//         fixed in size
//         it is allocated outside the v8 engine
//         after operation it will get deleted

// disadvantage - time taking
 
//? Stream - streaming is a process of transferring data from source to destination in continous chunks.
//?           it is also an asynchronous operation.
//         - overcome the problem of buffer

// In nodeJs we have 4 different types of streaming
//* 1) writable stream ==> we can perform writing operations in chunks
//* 2) readable stream ==> we can perform reading operation in chunks
//* 3) duplex stream ==> we can perform both readable and writable simulteously(parallel operations)
//* 4) transform stream ==> it is similar to duplex but data can be modified

const fs = require("fs");
//? 1) writable streams ==> 
// method name ==> createWriteStream()
// ---------------------------------------
// console.log("start")
// const result = fs.createWriteStream("./demo.txt");
// // console.log(result); // WriteStream Object
// result.write("THis is data",(error)=>{
//     if(error) console.log(error)
//     console.log("file created in writable stram");
// });
// console.log("middle")
// console.log("end")
// ---------------------------------------

//? 2) readable streams ==> 
// method name ==> createReadStream()
// ---------------------------------------
// console.log("start")
// const result = fs.createReadStream("./demo.txt","utf-8");
// // console.log(result) // ReadStream Object
// result.on("data",(chun)=>{ // data is predefined event  //on method to catch event
//     console.log(chun)
// })
// console.log("middle");
// console.log("end");
// ---------------------------------------

//? 3) duplex streams ==> 
// copy contents of "fs.js" to new file named "fs_copy.js"
// ---------------------------------------
// let readFile = fs.createReadStream("./04_fs.js","utf-8"); // source
// let writeFile = fs.createWriteStream("./fs_copy.js");  // destination
// //* pipe() ==>  it connects source to destination
// //* source.pipe(destination)
// readFile.pipe(writeFile);
// ---------------------------------------


// console.log(fs.statSync("./fs.js"))
// fs.open("./fs.js")