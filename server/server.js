const express=require('express')
const app=express()
const connectDB = require('./config/ConnectDB')
const dotenv=require('dotenv')
dotenv.config({path:'./config/.env'})
const port= process.env.PORT || 5000

connectDB()

app.use(express.json())
app.use("/api/v1",require('./routes/UserRoutes'))
app.use("/api/v1",require('./routes/UserRoutes'))
app.listen(port,(err)=>{
    err?console.log(err):console.log("server is running in port",port)
})