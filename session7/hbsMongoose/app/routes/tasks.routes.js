const router = require("express").Router()
const taskControl = require("../controller/task.controller")

router.get("/", taskControl.allTasks)

router.get("/addPost", taskControl.addPostTasks)
router.post("/addPost", taskControl.addTaskPostLogic)

router.get("/single/:id", taskControl.single)

router.get("/changeStatus/:id", taskControl.changeStatus)
router.get("/del/:id", taskControl.delTasks)

router.get("/edit/:id", taskControl.editTasks)
router.post("/edit/:id", taskControl.editTasksLogic)

module.exports = router