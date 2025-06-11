const {Router} = require("express");
const { createUser, fetchAllUser, fetchOneUser,updateOneUser, deleteOneUser } = require("../controllers/user.controller");
const router = Router();

router.post("/create-user",createUser);
router.get("/all-users",fetchAllUser);
router.get("/user/:id",fetchOneUser); // /:id => params(parameter)
router.patch("/user/:id",updateOneUser);
router.delete("/user/:id",deleteOneUser)

module.exports = router;