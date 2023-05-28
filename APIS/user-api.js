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




module.exports = userApi;