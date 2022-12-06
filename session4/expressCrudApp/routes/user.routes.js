const router = require("express").Router()
const userController = require("../controllers/user.controller")
router.get("/", userController.index)
// router.get("/test", (req,res)=> res.send("my routes"))
module.exports = router