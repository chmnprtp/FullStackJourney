//! import your collection
const userCollection = require("../models/user.model");

//! creating api
const createUser = async(req,res)=>{
    //? data store in req.body
    let {name,email,contactNo,password} = req.body;
    let newUser = await userCollection.create({name,email,contactNo,password});
    res.status(200).json({success:true,message:"User created successfully", data:newUser})
};


const fetchAllUser = async(req,res)=>{
    let users = await userCollection.find();
    res.json({success:true,message:"User created successfully", data:users})
};

// fetching one user
const fetchOneUser = async(req,res)=>{
    console.log(req.params);
    let id = req.params;
    let user = await userCollection.findOne({_id:req.params.id});
    res.json({success:true, message:"user fetched successfully", user});
};

// update one user
const updateOneUser = async(req,res)=>{ //todo
    let {id} = req.params;
    // id = {id:}
    let {name, email, contactNo, password} = req.body;

    let updatedUser = await userCollection.updateOne({_id:id},{
        $set:{
            name,
            email,
            contactNo,
            password,
        },
    })
    res.json({success:true,message:"User updated",data:updatedUser});

};

//detele on user
const deleteOneUser = async(req,res)=>{
    let {id} = req.params;
    await userCollection.deleteOne({_id:id});
    res.json({success:true, message:"User deleted"});
};

const deleteMultipleUsers = async(req,res)=>{};

module.exports = {
    createUser,
    fetchAllUser,
    fetchOneUser,
    updateOneUser,
    deleteOneUser,
    deleteMultipleUsers
}