const router = require("express").Router()
const taskControl = require("../controller/task.controller")

router.get("/", taskControl.allTasks)
router.post("/addPost", taskControl.addTaskPostLogic)
router.get("/single/:id", taskControl.single)
router.patch("/changeStatus/:id", taskControl.changeStatus)
router.put("/edit/:id", taskControl.editTasksLogic)
router.delete("/del/:id", taskControl.delTasks)

module.exports = router