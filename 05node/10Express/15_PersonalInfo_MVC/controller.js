const fs = require("fs")
const path = require("path")
const { connectDB } = require("./database");


 function getHomePage(){
    console.log("This is home page")
}

function myInfo(req,res){
    let displayInfoPath = path.join(__dirname, "Pages","form.html")
    fs.createReadStream(displayInfoPath,"utf-8").pipe(res);
}

const myInfoSubmit = async (req,res) =>{
    console.log(req.body)
     let{name,mobilenumber} = req.body
     let myCollection = await connectDB();
     let mydata = await myCollection.insertOne({name,mobilenumber})
     console.log(mydata)
     res.send("myInfo Submitted",)

    
}

module.exports = {getHomePage,
    myInfo,
    myInfoSubmit
};