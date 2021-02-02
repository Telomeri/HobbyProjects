let express = require('express')
let app = express()
var port = process.env.PORT || 8080;
let countryRoutes = require("./controllers/countries")

let mongoose = require('mongoose')

app.use(express.json())
require('dotenv').config()

const uri = process.env.MONGO
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true  })

//check if connection gucchi
if(!mongoose.connection)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

app.use('/countries', countryRoutes)
// Launch app to listen to specified port

app.listen(port, function () {
     console.log("Running RestHub on port " + port)
})