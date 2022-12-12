const taskModel = require("../db/model/task.model")
const myHelper = require("../helper/data")
class Task{
    /*start post add*/
    static addPostTasks = (req, res)=>{
        res.render("addTaskPost", {pageTitle: "add Task"})
    }
    static addTaskPostLogic = async(req,res)=>{
        try{
            const task = new taskModel(req.body)
            await task.save()
            res.redirect("/")
        }
        catch(e){
            res.send(e.message)
        }
    }
    static allTasks = async(req, res)=>{
        try{
            const tasks = await taskModel.find()
            res.render("allTasks", {
                pageTitle: "All Tasks", 
                tasks, 
                hasTasks: tasks.length
            })
        }
        catch(e){
            res.send(e.message)
        }
    }
    static single = async(req, res)=>{
        try{
            const result = await taskModel.findById(req.params.id)
            const d  = myHelper.formatDate(result.dueData)
            res.render("single", {
                pageTitle: "single page",
                result,
                d
            })
        }
        catch(e){
            res.send(e.message)
        }
        
    }
    static editTasks = async(req, res)=>{
        try{
        const result = await taskModel.findById(req.params.id)
        res.render("edit", {
            pageTitle: "edit page",
            result: result
        })  
    }
    catch(e){
        res.send(e)
    }  
}
    static changeStatus = async(req,res)=>{
        try{
            const result = await taskModel.findById(req.params.id)
            result.status = !result.status
            await result.save()
            res.redirect("/")
        }
        catch(e){
            res.send(e.message)
        }
    }
    static editTasksLogic = async(req,res)=>{
        try{
            (req.body.status=="on")? req.body.status=true : req.body.status=false
            await taskModel.findByIdAndUpdate(req.params.id, req.body, {runValidators:true})
            res.redirect(`/single/${req.params.id}`)
        }
        catch(e){
            res.send(e.message)
        }
    }
    static delTasks = async(req, res)=>{
        try{
            await taskModel.findByIdAndDelete(req.params.id)
            res.redirect("/")
        }
        catch(e){
            res.send(e.message)
        }
    }
}
module.exports = Task