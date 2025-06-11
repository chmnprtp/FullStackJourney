let fs = require("fs");
const connectDB = require("./databse");


let displayHomePage = (req,res) => {
    res.end("home page");
}

let displayFormPage = (req,res) =>{
        // res.send("Form page show")
        fs.createReadStream("./form.html","utf-8").pipe(res);
}

let displayAllUser = async (req,res)=>{
    let myCollection = await connectDB();
    let users = await myCollection.find().toArray(); // cursor ot pointer
    res.send(users);
}
// {
//     userName:"abc",
//     useEmail:"chm@gmail.com",
//     userPassword:"123",
// }



let handleFormSubmit = async(req,res)=>{
    //* use the same endpoint in the form action
    //* set method attribute to post
    //* use name attribute to store the data

    //? data is always stored in req.body
    console.log(req.body);

//* 1st way to destructure
let {username, useremail, userpassword} = req.body;

//* 2nd way to destructure
    // let n = req.body.username; // same as name attribute value
    // let e = req.body.useremail;
    // let p = req.body.userpassword;

    let myCollection = await connectDB();
    // console.log(myCollection);

    // myCollection.insetMany(req.body);
    myCollection.insertOne({username,useremail,userpassword})

    res.send(`user with ${useremail} has registered successfully
    other details ==> ${username} and ${userpassword}`)
}

module.exports = {
    displayHomePage,
    displayFormPage,
    displayAllUser,
    handleFormSubmit
}