//create mini express app
const exp = require('express')
const userApi = exp.Router();
const expressErrorHandler = require("express-async-handler")

const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

//body parsing middleware
userApi.use(exp.json())


//create user
userApi.post("/createuser",  expressErrorHandler(async (req, res) => {

    let userCollectionObject = req.app.get("userCollectionObject")
//console.log(userCollectionObject);
    //get user obj and parse it
    let newUser = req.body;

    //search for user
    let user = await userCollectionObject.findOne({ username: newUser.username })

    //if user is existed
    if (user !== null) {
        res.send({ message: "User already existed" })
    }
    else {
        //hash the password
        
        let hashedPassword = await bcryptjs.hash(newUser.password, 7)
        //replace plain pw with hashedPassword
        newUser.password = hashedPassword;
        //add CDN link of image
       
        //insert user
        await userCollectionObject.insertOne(newUser)
        res.send({ message: "User created" })
    }


}))


//user login
userApi.post("/login", expressErrorHandler(async (req, res, next) => {

    let userCollectionObject = req.app.get("userCollectionObject")

    let credentials = req.body;

    //verify username
    let user = await userCollectionObject.findOne({ username: credentials.username })
   //console.log(user)
    //if user is not existed
    if (user === null) {
        res.send({ message: "Invalid username" })
    }
    //if user is existed
    else {
        //compare passwords
        let result = await bcryptjs.compare(credentials.password, user.password)
        //if pws not mtched
        if (result === false) {
            res.send({ message: "Invalid password" })
        }
        //if passwords are matched
        else {
            //create a token and send it as res 
            let token = await jwt.sign({ username: credentials.username }, 'abcd', { expiresIn: 10 })

            //remove password from user
            delete user.password;
            res.send({
                message: "login-success",
                token: token,
                username: credentials.username,
                userObj: user
            })
        }
    }
}))




module.exports = userApi;