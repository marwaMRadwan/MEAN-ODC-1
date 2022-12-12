require("./db/connect")
const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const taskRoutes = require("./routes/tasks.routes")
app.use(taskRoutes) //app.use("/task",taskRoutes)

app.all('*', (req,res)=> res.status(404).send({
    apiStatus:false,
    message:"invalid url"
}))

module.exports = app