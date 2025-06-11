const {Router} = require("express");
const { displayHomePage, displayFeedbackForm, getAllFeedbacks, handleFeedbackFormSubimmison } = require("./controller");
const router = Router();

router.get("/",displayHomePage);
router.get("/form",displayFeedbackForm);
router.get("/all-feedbacks",getAllFeedbacks);
router.post("/submit",handleFeedbackFormSubimmison);


module.exports  = router;