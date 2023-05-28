//create express app
const exp = require('express')
const app = exp();
const path = require("path")


//connecting build of react with current server
app.use(exp.static(path.join(__dirname, './build/')))

//import apis
const userApi = require("./APIS/user-api")




//db connectivity

//import mongo client
const mongoClient = require("mongodb").MongoClient;

//db connection url
const dburl = "mongodb+srv://prudvish_database:Abcd1234@cluster1.bxt0f.mongodb.net/?retryWrites=true&w=majority"




//connect with mongodb server
const c2=async()=>{
    try{
const client=await mongoClient.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
//create database object
let databaseObject = client.db("efiling")
//create user collection object
let userCollectionObject = databaseObject.collection("usercollection")


//sharing collection object
app.set("userCollectionObject", userCollectionObject)



console.log("DB connection success")
    }
    catch(err)
    {
        console.log("err in db connect ", err)
    }
}
c2();























//execute specific api based on path
app.use('/user', userApi)



app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})


//handle invalid path
app.use((req, res, next) => {
    res.send({ message: `path ${req.url} is invalid` })
})

//handle errors
app.use((err, req, res, next) => {
    console.log(err)
    res.send({ message: err.message })

})


//assign port
const port = 5000;
app.listen(port, () => console.log(`server listening on port ${port}..`))