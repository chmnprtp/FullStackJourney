const {Router} = require("express");
const { getHomePage, myInfo, myInfoSubmit } = require("./controller");
const router = Router();

router.get("/",getHomePage);
router.get("/myInfo",myInfo);
router.post("/submit",myInfoSubmit)

module.exports = router;