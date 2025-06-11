const express = require("express");
const app = express();
const myRoutes = require("./routes")



app.use(express.urlencoded({extended:true}))
app.use("/api",myRoutes);

app.listen(9000,(err)=>{
    if(err) console.log(err)
        console.log("Server is running on 9000")
})

