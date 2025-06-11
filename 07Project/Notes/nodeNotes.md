# Diving into API 

        JSON = "data format" for storage or transport
        JS Object = "live data" you interact with
****
    🔍 Difference Between JSON and Object?
        Feature 	    JSON (JavaScript Object Notation)	    JavaScript Object
        Data Type   	String (text format)	                Actual object in memory
        Used For	    Data exchange (APIs, files, storage)	Manipulating data in code (logic)
        Syntax Rules    Strict — keys/strings in double quotes	Flexible — keys without quotes allowed
        Methods	        Needs JSON.parse() / JSON.stringify()	Used directly in JS
        Example	        '{"name": "John", "age": 25}'	        { name: "John", age: 25 }

    💡 Why Both Are Used
        JSON	                                            JavaScript Object
        Used to send/receive data via APIs (e.g. fetch)	    Used to work with data in JS code
        Can be stored in files/databases	                Exists only in program’s memory
        Language-agnostic (used in Python, Java, etc.)	    Only valid in JavaScript

    🛠️ When to Use What?
        ✅ Use JavaScript Object:
        When you're working with data in code.

        ✅ Use JSON:
        When you're sending data to or receiving from a server.
        When you store data in localStorage or files.

    
    🔁 Common Conversion
        // JS Object → JSON
        const obj = { name: "John", age: 25 };
        const jsonString = JSON.stringify(obj); // '{"name":"John","age":25}'

        // JSON → JS Object
        const parsedObj = JSON.parse(jsonString); // { name: "John", age: 25 }

    How to see data which is send by client/
        in the body of the request
        console.log(req.body) // output - undefined

        why undefined? bcz the data send in json format and our server is not able to read that data.
        to read that data we need help of middleware that will check incoming request and read that json , convert it into the js object and put into body 
        There is only a middleware for it. express.json()

        how to use middleware? app.use(express.json());

        then what is app.use(express.urlencoded({extended:true})) ?

        if i write app.use() and don't give any route and pass a function in it - it will work for all the route automatically.
    
    how to get data from database?
        always use asyn await with mongo operation and use i trycatch

##     //Find single user
        Model.find:
            app.get("/user",async(req,res)=>{
                const userEmail = req.body.emailId;
                try {
                const user =  await User.find({emailId:userEmail})
                if(user.length === 0){
                    res.status(404).send("user not found");
                }else{
                    res.send(user);
                }
                
                } catch (error) {
                    res.status(400).send("Something went wrong")
                }
            
            })
        Input:
            {
            "emailId":"chmnprtp@gmail.com"
            }  
        Output:
            [
                {
                    "_id": "68444dc25cd510b41d71c6ce",
                    "lastName": "Saini",
                    "emailId": "chmnprtp@gmail.com",
                    "password": "myPass",
                    "__v": 0
                }
            ]

##       //Get All user 
         //Feed api - GET /feed - get all the users from the database
            app.get("/feed",async(req,res)=>{
                try {
                    const allUser = await User.find({}) // empty filter give you all collection
                    res.send(allUser);
                } catch (error) {
                    res.status(400),send("Something went wrong");
                }
            })   

        Difference betwwen findOne() and find()?
            - findOne - if you have two object with same email - it will show first object with same email
            - find() - if you have two object with same email - it will show both object

        Model.findById() ?


##       //delete a user
         // delete user
            app.delete("/user",async(req,res)=>{
                const userId = req.body.userId;
                try {
                    // const user = await User.findByIdAndDelete({_id:userId})
                    const user = await User.findByIdAndDelete(userId)
                    res.send("User deleted");
                } catch (error) {
                    res.status(404).send("something went wrong");
                }
            })


        Difference Between patch and put?

 ## update user       
    // update data of user
        app.patch("/user",async(req,res)=>{
            const userId = req.body.userId;
            const data = req.body;
            try {
                await User.findByIdAndUpdate(userId,data);
                res.send("User updated ");
            } catch (error) {
                res.status(404).send("something went wrong");
            }
        })

        connectDB().then(()=>{
            console.log("Database connection established....")

            app.listen(7777,()=>{
                console.log("Server is running on 7777");
            })
        }).catch((err)=>{
            console.error("Database cannot be connected");
        })

<!-- --------------------------------------------------------------------------- -->
<!-- 21 - Sanitization & Schema -->
# Sanitization & Schema
## NEVER Trust  req.body always keep validation
    - Even Before putting some checks in api(post,patch), We should add some checks inside the database itself(schema).
    - there should be some mandatory fields in our database, if those fields are not there will wil not create a user document.
    - what can be these field? name,email,password for signup
    
### we can add required Field 
Schema Types:
    required takes boolean or function that return boolean.
    example:
        firstname:{
        type:String,
        required:true,
        },

      if firstname is not there than mongoose will not allow insertion of document into the colection.
      - you will get ==> Error saving the userUser validation failed: emailId: Path `emailId` is required.
    
    supppose ther should be only one entry of one email id?
### use unique as field
    unique takes boolean    
        example:
             emailId:{
                type:String,
                required:true,
                unique:true
            },

    whenever user register it should take default value
### default 
    takes any type
    example:
         about:{
            type:String,
            default:"This is a default about of user"
        },

    if you donot pass about it will automatically set about

### lowercase
    example:
           emailId:{
                type:String,
                unique: true, // Ensures emails are unique using an index
                lowercase: true, // Optional: store emails in lowercase
            },

### lowercase
    example:   
           emailId:{
                type:String,
                unique: true, // Ensures emails are unique using an index
                lowercase: true, // Optional: store emails in lowercase
                trim: true       // Optional: remove extra spaces
            },

### minLength
    define minimum length of string
    example:
          firstname:{
                type:String,
                required:true,
                minLength:4
            },

    give you give less than minimum length it will show error
    error ==> Error saving the userUser validation failed: firstname: Path `firstname` (`Ch`) is shorter than the minimum allowed

### maxLength
    defined maximum length of string
        example:
             firstname:{
                type:String,
                required:true,
                minLength:4,
                maxLength:8
            },
        if you give more than maxLength it will give you error ==>
        Error saving the userUser validation failed: firstname: Path `firstname` (`Chsfdsgsggg`) is longer than the maximum
        allowed length (8).

### min max
    if type is number
        example:
                age:{
                    type:String,
                    min:18
                },

### validate()
    to add custom validation function
    its a function    
        example:
            gender:{
                type:String,
                validate(value){
                    if(!["male","female","others"].includes(value)){
                        throw new Error("Gender data not valid")
                    }
                }
            },
    
    this will only work when new document is created
    you have to enable it to run on updates.
    how to run validate() on updates?
        const user =  await User.findByIdAndUpdate(userId,data,{returnDocument:"after",runValidators:true});


### How to add timestamp
    add in Schema as second argument
        example:
            const userSchema = new mongoose.Schema({
                firstname:{
                    type:String,
                    required:true,
                    minLength:4,
                    maxLength:8
                },
                lastName:{
                    type:String
                }
            },{timestamps:true})

    it will automatically add timestamps at last of document
        createdAt:2025-06-09T17:14:12.204+00:00
        updatedAt:2025-06-09T17:14:12.204+00:00
    
## API level validation
    Suppose we don't want email id to change when you update a user 
    whatever you pass should allow like- adding another key value data 
     - we want if user is updatig its profile its should update certain fields only
        By validating req.body data 
    Example:
        // update data of user
        app.patch("/user",async(req,res)=>{
            const userId = req.body.userId;
            const data = req.body;

            const ALLOWED_UPDATES = ["userId","photoUrl","about","gender","age","skills"];
            const isUpdateAllowed = Object.keys(data).every(k => ALLOWED_UPDATES.includes(k));
                if(!isUpdateAllowed){
                    res.status(400).send("Updates not allowed");
                }
            try {
            const user =  await User.findByIdAndUpdate(userId,data,{returnDocument:"after",runValidators:true});
                res.send("User updated ");
                console.log(user);
                } catch (error) {
                    res.status(500).send("Update failed:"+error.message)
                }
                
        })
    
### Validator library
    What if have passed correct email id?
    validator.isEmail()
    for this validation taking help of external library - validator.js
        we can add either api level validation or db level(schema) validation
        example:
        const validator = require("validator");
             emailId:{
                    type:String,
                    unique: true, //todo  // Ensures emails are unique using an index
                    lowercase: true, // Optional: store emails in lowercase
                    trim: true,       // Optional: remove extra spaces
                    validate(value){
                        if(!validator.isEmail(value)){
                            throw new Error("Invalid email Address:" + value)
                        }
                    }
                },
    
    validator.isURL() - to check the value is url or not
        example:
             photoUrl:{
                    type:String,
                    default:"https://static.vecteezy.com/system/resources/previews/045/944/199/non_2x/male-default-placeholder-avatar-profile-gray-picture-isolated-on-background-man-silhouette-picture-for-user-profile-in-social-media-forum-chat-greyscale-illustration-vector.jpg",
                    validate(value){
                        if(!validator.isURL(value)){
                            throw new Error("Invalid email Address:" + value)
                        }
                    }
                },
    
    validator.isStrongPassword()
        example:
            password:{
                type:String,
                required:true,
                validate(value){
                    if(!validator.isStrongPassword(value)){
                        throw new Error("Password is not Strong:" + value)
                    }
                }
            },

<!-- -------------------------------------------------------------------------- -->
# Encrypting Password
    how to store password in encrpted format?
        package - bcrypt - return promise
        Example:
               const {password} = req.body;
               const passwordHash = bcrypt.hash(password,10);
               const user = new User({firstName,lastName,emailId,password:passwordHash}); 

        To hash password we need some encryption algorithm
        when we do bcrypt.hash its create a hash using a salt and a plain password
        and then how many number of rounds that salt should be applied to create the passwrod.
        - the more the number of salt rounds the tougher the password to decrypt.
        - basic number is 10
    
    How to login ?
        bcrypt.compare() - return boolean promise

        first we check user is present in the database or not.
        Example:
            app.post("/login",async (req,res)=>{
                try {
                    const {emailId,password} = req.body;

                    // check user is present or not?
                    const user = await User.findOne({emailId:emailId});
                    if(!user){
                        throw new Error("Email id is not present in db");
                    }
                    
                    // check password is valid or not
                    const isPasswordValid = await bcrypt.compare(password,user.password);
                    if(isPasswordValid){
                        res.send("User login successFUl");
                    }else{
                        console.log("Password from request:", password);
                        console.log("Hashed Password from DB:", user.password);
                        return res.status(401).send("Password is not correct");
                    }
                } catch (error) {
                    throw new Error("No Login:"+error.message)
                }
            })

        Steps for Password Hashing:
            - create hash password when user signup/register
                const passwordHash = await bcrypt.hash(password,10);
                const user = new User({firstName,lastName,emailId,password:passwordHash});
            - when user login compare password
                const isPasswordValid = await bcrypt.compare(password,user.password);
        Information leaking? never tell user that email id is present or not.

<!-- -------------------------------------------------------------------------- -->
# Authentication,JWT & cookies
    What happens when you login?
        scenerio: i cannot access my profile without loggin in.
                  cannot perform any task without logged in.

        In website first user should logged in - then only should perfom any action on the webstie.

        When user comes to website login - server check and validate if its correct. it will create a JWT Token, wrap than token in cookie.
        And give you a authentication token (JWT) JSON WEB TOKEN.

        when cookie comes brower stores it.

        Now whenever user will make an API call, JWT TOKEN will be send with all the request
        Every api call cookie will be validated

        When user first vists website, user don't have JWT Token.

        When you perform any task like - any api call Token also send to server.

    When Server Sends Token , how will the user Stores it?
        Web came up will solution known as Cookies

        What is Cookie?
            when you login to application, server will sends a successful response and along with it, it sends the taken inside the cookie.
            cookie is unique for user.
    
    When cookie will not work?
        User get cookie
        made another request , cookie send along with it, server validates cookie
        server can also send expiry date of JWT Token(ex- cookie will expire in a day)
        if you send expired cookie,server validates, it failed and get res login again.

    Express gives a good way to attach a cookie
        res.cookie(name,value[,options])
    
    To read a cookie we need middleware
        npm i cookie-parser
        const cookieParser = require("cookie-parser");
        app.use(cookieParser())
    
    what is JWT TOKEN?
        JSON WEB TOKEN
        its a industry standard for representing claims securely between two parties.

        its consist of three thing: 
            header
            payload - secret data
            signature - jwt uses to check the token is validated or not
    
    How to create JWT Token? how to put in key and send back?
        npm i  jsonwebtoken 

        its gives a way to signing a token or verifying a token

        const cookieParser = require("cookie-parser");
        const jwt = require("jsonwebtoken");

        /LOGIN
        if(isPasswordValid){
            // Create a JWT Token
                const token = jwt.sign({_id: user._id},"DEV@tinder@123");
                console.log(token);
            // Add the token to cookie and send the response back to the user
            res.cookie("token",token);
            res.send("User login successFUl");
        }

        /Profile
        app.get("/profile",async(req,res)=>{
            const cookies = req.cookies;
            console.log(cookies);

            //validate my token
            const {token} = cookies;
            const decodedMessages = await jwt.verify(token,"DEV@tinder@123");
            // console.log(decodedMessages);
            const {_id} = decodedMessages;
            console.log("Logged In User is: "+_id);
            const user = await User.findOne({_id});
            res.send(user);

        })

###     STEPS :
        - instal and include cookie-parser
            npm i cookie-parser
            const cookieParser = require("cookie-parser");
            app.use(cookieParser())
        - create token while login 
             const token = jwt.sign({_id: user._id},"DEV@tinder@123");
        - add token to cookie
             res.cookie("token",token);
        - when user make api ex-  /profile
        - validate token 
             const cookies = req.cookies;
             const {token} = cookies;
             jwt.verify(token,"DEV@tinder@123");

        Note: never hardcoded token key - DEV@tinder@123

    To validate all api? create middleware and use in Every api request

    How to send expiry time for token? 
        jwt.sign({data:"daf"},'secret',{expiresIn:'1h'});
    
    How to expire cookie? 
        res.cookie("token",token, {expires:new Date(Date.now() + 8 * 3600000).})
            //expires cookie in 8h
    
### Mongoose Schema Methods
      - function make resuable
      -Jwt.sign methods write in schema file
           userSchema.methods.getJWT = function (){}
      - not use arrow function - instead use function keyword
      - when you create a instance of model - this refers to that particular user
              userSchema.methods.getJWT = async function (){
                  const user = this; //THIS REFER TO CURRENT USER
                  const token = await jwt.sign({_id:user._id},"secret",{expiresIn:"7d,})
                  return token;
              };
      - in login api
          const token = await user.getJWT();
    
    Put bcryt function also in user Schema.
        in userSchema file:
            import jsonwebtoken;
            userSchema.methods.validatePassword = async function (passwordInput){
                    const user = this;
                    const passwordHash = user.password;
                    const isPasswordValid = await bcrypt.compare(passwordInput,passwordHash);
                    return isPassword;
                };
        in login api:
            const isPassword = await user.validatePassword(password);