const router = require("express").Router()
const User = require('../app/controller/user.contoller')
const {auth} = require("../app/middleware/auth.middleware")
const upload = require("../app/middleware/fileUpload.middleware")
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
router.post("/addAddr", auth, User.addAddr)
//show all addresses
//delete address
//show single address
//edit profile image
router.patch("/profileImg",auth, upload.single("img"), User.uploadImage)
router.patch("/profileImg1",auth, upload.single("img"), User.uploadImage1)
router.patch("/profileImg2",auth, User.uploadImage2)

module.exports = router