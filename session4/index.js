//npm init --y
//npm i express
const express = require("express")
const path=require("path")
const app = express()
// app.get("/", (req, res)=>{
//     res.send("hello world")
// })
// app.get("/about", (req, res)=>{
//     res.send("about")
// })
// app.get('/html', (req,res)=> {
//     res.send("<h3>hello</h3>")
// })
// app.get("/json", (req,res)=>{
//     const data = [{name:"marwa"}, {name:"mazen"}]
//     res.send(data)
// })
// app.get("/file", (req,res)=>{
// res.send({
//     dirName: __dirname,
//     fileName: __filename
// })
// const myFile = path.join(__dirname, "data.html")
    // res.sendFile(`${__dirname}/data.html`)
//     res.sendFile(myFile)
// })
const staticDir = path.join(__dirname, "static")
app.use(express.static(staticDir))
app.listen(3000, ()=>console.log("http://localhost:3000"))