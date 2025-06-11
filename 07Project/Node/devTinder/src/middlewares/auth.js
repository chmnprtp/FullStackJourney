const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req,res,next) =>{
   try {

     //Read the token from the req cookies
     const  cookies = req.cookies;
     const {token} = cookies;
    //  console.log(token);
     if (!token) {
        return res.status(401).json({ message: "Authentication token missing" });
    }

     // Validate the token
     const decodedMsg = await jwt.verify(token,"DEV@tinder@123")
 
     // Find the user
     const {_id} = decodedMsg;
    //  console.log(decodedMsg);
    //  console.log(id);
     const user = await User.findById({_id})
     if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    
     // Attach user to request object
    req.user = user;
     next();
   } catch (error) {
    res.status(400).json({message:error.message});
   }
}   
module.exports = {
    userAuth,
};