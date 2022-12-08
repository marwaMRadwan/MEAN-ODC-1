const dealHelper = require("../helper/dealWithJson.helper")
const dataHelper = require("../helper/data.helper")
class Task{
    /*start get add*/
    static addTasks = (req, res)=>{
        res.render("addTask", {pageTitle: "add Task"})
    }
    static addTaskGetLogic = (req,res)=>{
        const task = {id:Date.now(), status:false, ...req.query}
        const all = dealHelper.readFromJSON()
        all.push(task)
        dealHelper.writeToJSON(all)
        res.redirect("/")
    }
    /*end get add */
    /*start post add*/
    static addPostTasks = (req, res)=>{
        res.render("addTaskPost", {pageTitle: "add Task"})
    }
    static addTaskPostLogic = (req,res)=>{
        console.log(req.method)
        const task = {id:Date.now(), status:false, ...req.body}
        const all = dealHelper.readFromJSON()
        all.push(task)
        dealHelper.writeToJSON(all)
        res.redirect("/")
    }
    /*end post add */
    /*add logic for both get and post*/
    static addMyLogic = (req, res)=>{
        let task
        if(req.method=="POST") task = {id:Date.now(), status:false, ...req.body}
        else  task = {id:Date.now(), status:false, ...req.query}
        const all = dealHelper.readFromJSON()
        all.push(task)
        dealHelper.writeToJSON(all)
        res.redirect("/")
    }
    /*end logic for both get and post*/
    static allTasks = (req, res)=>{
        const tasks = dealHelper.readFromJSON()
        res.render("allTasks", {
            pageTitle: "All Tasks", 
            tasks, 
            hasTasks: tasks.length
        })
    }
    static editTasks = (req, res)=>{
        const all = dealHelper.readFromJSON()
        const result = dataHelper.getId(all, "id", req.params.id)
        res.render("edit", {
            pageTitle: "edit page",
            result: all[result]
        })    
    }

    static editTasksLogic = (req,res)=>{
        const all = dealHelper.readFromJSON()
        const result = dataHelper.getId(all, "id", req.params.id)
        if(result==-1) return res.render("err404", {pageTitle:"invalid", err:"invalid id"})
        const newTask = {id: req.params.id,...req.body}
        newTask.status=="on"? newTask.status=true : newTask.status=false
        all[result] = newTask
        dealHelper.writeToJSON(all)
        res.redirect(`/single/${req.params.id}`)
    }

    static single = (req, res)=>{
        // const id = req.params.id
        const all = dealHelper.readFromJSON()
        // const result = all.find(task=> task.id == id )
        // const result = (dealHelper.readFromJSON()).find(task=> task.id == req.params.id)
        const result = dataHelper.getId(all, "id", req.params.id)
        res.render("single", {
            pageTitle: "single page",
            result: all[result]
        })
    }
    static delTasks = (req, res)=>{
        const all = dealHelper.readFromJSON()
        // const data = all.filter(task=> task.id!=req.params.id)
        const taskIndex = dataHelper.getId(all, "id", req.params.id)
        if(taskIndex!=-1) all.splice(taskIndex, 1)
        dealHelper.writeToJSON(all)
        res.redirect("/")
    }
    static changeStatus = (req,res)=>{
        const all = dealHelper.readFromJSON()
        // const taskIndex = all.findIndex(task=> task.id==req.params.id)
        const taskIndex = dataHelper.getId(all, "id", req.params.id)
        if( taskIndex == -1 ) return res.render("err404", {pageTitle:"invalid", err:"invalid task id"})
        all[taskIndex].status= !all[taskIndex].status
        dealHelper.writeToJSON(all)
        res.redirect("/")
    }
}
module.exports = Task