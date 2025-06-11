//! 1) import
let {Router} = require("express");
let {displayHomePage, displayFormPage,displayAllUser, handleFormSubmit} = require("./controller")

//! 2)
let myRoutes = Router();

//! home page
myRoutes.get("/",displayHomePage)

//! form page
myRoutes.get("/form",displayFormPage)

//! fetching data from database
myRoutes.get("/users",displayAllUser)
//* we can not update using html form

//! handling from server
myRoutes.post("/abc",handleFormSubmit)

//! 3)
module.exports = myRoutes;

// export default myRoutes;
