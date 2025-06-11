//! modules ==> a module is a piece of resuable code that can be imported into another file.
//!a module contains classes, functions, variables, etc.

//? export ==> exporting means making code available to other files
//? imoort ==> using the exported code in defferent file

//! Three types of modules:
//* 1) user-defined - these types of modules are created by the user and are imported and exported whenever required.
// require("path")

//* 2) buit-in - these modules are also known as core modules, they are part of nodeJs installation. examples => fs,http,path,os,queryString,etc..
// require("module-name")

//* 3) third-party - third pary modules are modules that can be installed from npm(third party source) examples => express,mongodb,mongoose,multer, etc..
// require(module-name)

//require("path") // commonJs syntax -> nodeJs uses this syntax by default
// react syntax => ES6 (import export )