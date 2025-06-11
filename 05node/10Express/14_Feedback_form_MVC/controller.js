const {createReadStream} = require("fs");
const { connectDB } = require("./database");
const path = require("path");

//! get Home page
const displayHomePage = (req,res)=>{
    // console.log(path.join(__dirname, "Pages","index.html"));
    let filePath = path.join(__dirname, "Pages","index.html")
    createReadStream(filePath,"utf-8").pipe(res);
}
//! get Home page
const displayFeedbackForm = (req,res)=>{
    let displayFeedbackFormPath = path.join(__dirname, "Pages","form.html")
    createReadStream(displayFeedbackFormPath,"utf-8").pipe(res);
}
//! post feedback
const handleFeedbackFormSubimmison = async(req,res)=>{
    //? get the data
    let{name,phonenumber,feedback} = req.body
    let myCollection = await connectDB();
    let newFeedBack = await myCollection.insertOne({name,phonenumber,feedback})
    console.log(newFeedBack)
    res.send("feedback submitted",)
}
//! get all feedback
const getAllFeedbacks = async (req,res)=>{
    let myCollection = await connectDB();
    let feedbacks = await myCollection.find().toArray();
    res.send(feedbacks);

}

module.exports = {
    displayHomePage,
    displayFeedbackForm,
    handleFeedbackFormSubimmison,
    getAllFeedbacks
}