//! Library ==> it is a collection of pre-defined code. and the control of the execution 
//! of the code is given to the developer.
//* example - axios,reactJs, loadash etc...

//! Framework ==> it is a collection of libraries. 
//? it provides structure for developing any application
//? the control of the execution of the code is give to the framework.
//? it also allows developers to follow a particular architecture. ==> MVC (model,view controller)
//* example - NODE(expressJs, meteorJs, derbyJs, koaJS), 
//*           frontent (angular,vue, nest, etc..
//? nextJS ==> it is a framework for ReactJS but can be used to implement backend also.


//* Steps:
//! 1) Before installing any third-party modules, the project folder must contain a "package.josn" file
//! there can be only one package.json file in the project folder.
//? to generate this file type command ==> 
//  "npm init -y" ==> this will generate a "package.json" fiel with default values
// "npm init" ==> this will generate "package.json" file with user-defined values.
//* package.json file is heart of the project, it contain the meta data like name,
//* description, version,author etc... along with dependencies.(third party modules 
//* or packages that we are installing)

//! 2) now install the required modules by typing command ==> "npm install/imodule-name"
//! in the terminal
//? syntax ==> npm i/install module-name
// example ==> npm i express
//? syntax ==> npm i/install module-name1 module-name2 module-name3...
// example ==> npm i express mongoose multer
//* by default this command will store the modules under production dependency
//* to install module under development dependency ==> npm i module-name -D
// example => npm i nodemon -D

//? npm ==> it is a package a manager, it is a platform which manages the packages
//? /modules.
//? managing ==> install, unistall, update, create, share.

//* a) node_modules ==> it is a folder which contains all the installed packages/modules
//* b) inside package.json ==> dependencies will be added, this tells us that project is dependent or using the modules
//* package-lock.json ==> this will be created automatically whenver we run npm i.
//*                 in this file every module version and integrity is stored.


//! 3) import the installed modules/packages an use it.
///* for importing third-party modules and built-in modules
// require("module-name")
//* for importing user-defined modules
// require("path")



//! express ==> framework of nodeJs. which only supports the routing part

//? express ==> express is a minimal routing framework which supports only routing part,
//? any other features are added with the help of middleware


//! ODM and ORM 
