const express = require("express")
const path = require("path")
const hbs = require("hbs")
const userRoutes = require("../routes/user.routes")
const publicDir = path.join(__dirname, "../public") 
const viewsDir = path.join(__dirname, "../frontend/views") 
const layoutsDir = path.join(__dirname, "../frontend/layouts") 
const app = express()
app.use(express.static(publicDir))
app.set("view engine", "hbs")
app.set("views", viewsDir)
hbs.registerPartials(layoutsDir)

app.use(userRoutes)

module.exports = app