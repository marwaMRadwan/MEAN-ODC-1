const router = require("express").Router()
const appClass = require("../controller/app.controller")
router.get("/", appClass.home )
router.get("/about", appClass.about )

module.exports = router