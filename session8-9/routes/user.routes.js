const router = require("express").Router()
const User = require('../app/controller/user.contoller')
const {auth} = require("../app/middleware/auth.middleware")
//auth
router.post("/register", User.register)
router.post("/login", User.login)
//profile
router.post("/me", auth, User.profile)
//user routes
router.get("/",auth, User.allUsers)
//logout
router.post("/logout", auth, User.logOut)
//logout all devices
router.post("/logoutAll", auth, User.logOutAll)
//show single user
router.get("/single/:id", auth, User.getSingle)
//activate & deactivate status
router.post("/activate",auth, User.changeStatus)
//edit my profile
//edit other users
//delete me
//delete user
//add address
//delete address
//show all addresses
//show single address
module.exports = router