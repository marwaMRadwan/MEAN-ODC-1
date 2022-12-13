const express = require("express")
const app = express()

require("../db/connect")

app.use(express.json())

const userRoutes = require("../routes/user.routes")
const postRoutes = require("../routes/post.routes")
app.use("/api/user/",  userRoutes)
app.use("/api/post/", postRoutes)
app.all("*", (req, res)=> {
    res.status(404).send({
        apisStatus:false,
        message:"Invalid URL",
        data: {}
    })
})
module.exports=app