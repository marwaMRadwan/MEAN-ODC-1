const taskModel = require("../db/model/task.model")
const myHelper = require("../helper/data")
class Task{
    static addTaskPostLogic = async(req,res)=>{
        try{
            const task = new taskModel(req.body)
            await task.save()
            res.status(200).send({
                apiStatus:true,
                data: task,
                message:"added successfully"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data: e,
                message:e.message
            })
        }
    }
    //thunder client
    static allTasks = async(req, res)=>{
        try{
            const tasks = await taskModel.find()
            res.status(200).send({
                data: tasks,
                apiStatus: true,
                message:"data featched"
            })
        }
        catch(e){
            res.status(500).send({
                data: e,
                apiStatus: false,
                message:e.message
            })
        }
    }
    static single = async(req, res)=>{
        try{
            const result = await taskModel.findById(req.params.id)
            if(!result) {
                return res.status(404).send({
                    data: null,
                    message: "user not found",
                    apiStatus:false
                })
            }
            res.status(200).send({
                data: result,
                apiStatus:true,
                message:"data featched"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
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