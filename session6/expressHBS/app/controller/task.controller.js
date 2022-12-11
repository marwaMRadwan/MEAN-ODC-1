const {ObjectId} = require("mongodb")
const connection = require("../../model/dbconnect")
const dealHelper = require("../helper/dealWithJson.helper")
const dataHelper = require("../helper/data.helper")
class Task{
    /*start get add*/
    static addTasks = (req, res)=>{
        res.render("addTask", {pageTitle: "add Task"})
    }
    static addTaskGetLogic = (req,res)=>{
        const task = {id:Date.now(), status:false, ...req.query}
        connection(async(db)=> {
            // db
            // .collection("task")
            // .insertOne(task)
            // .then(result=> {
            //     console.log(result);
            //     res.redirect("/")}
            //     )
            // .catch(e=> res.send(e.message))
            try{
                await db.collection("task").insertOne(task)
                res.redirect("/")
            }
            catch(e){
                res.send(e.message)
            }
        })        
        
    }
    /*end get add */
    /*start post add*/
    static addPostTasks = (req, res)=>{
        res.render("addTaskPost", {pageTitle: "add Task"})
    }
    static addTaskPostLogic = (req,res)=>{
        console.log(req.method)
        const task = {id:Date.now(), status:false, ...req.body}
        connection(db=> {
            db
            .collection("task")
            .insertOne(task)
            .then(result=> {
                console.log(result);
                res.redirect("/")}
                )
            .catch(e=> res.send(e.message))
        })        
    }
    /*end post add */
    /*add logic for both get and post*/
    static addMyLogic = (req, res)=>{
        let task
        if(req.method=="POST") task = {id:Date.now(), status:false, ...req.body}
        else  task = {id:Date.now(), status:false, ...req.query}
        connection(db=> {
            db
            .collection("task")
            .insertOne(task)
            .then(result=> {
                console.log(result);
                res.redirect("/")}
                )
            .catch(e=> res.send(e.message))
        })        
    }
    /*end logic for both get and post*/
    static allTasks = (req, res)=>{
        connection(db=> {
            db.collection("task").find()
            .toArray((error, result)=>{
                if(error) return res.send(error)
                res.render("allTasks", {
                    pageTitle: "All Tasks", 
                    tasks: result, 
                    hasTasks: result.length
                })
        
            })
        })
    }

    static editTasks = (req, res)=>{
        connection(db=> {
            db.collection("task").findOne({
                _id: new ObjectId(req.params.id)
            })
            .then(result=>{
                res.render("edit", {
                    pageTitle: "single page",
                    result
                })
            })
            .catch(e=>{ res.send(e.message) })
        })
    }

    static editTasksLogic = (req,res)=>{
        connection(db=> {
            db.collection("task").updateOne(
                {_id: new ObjectId(req.params.id)},
                {$set: req.body})
                //{$inc: {age:5}}
            .then(result=>{
                res.redirect(`/single/${req.params.id}`)
            })
            .catch(e=>{ res.send(e.message) })
        })

    }

    static single = (req, res)=>{
        connection(db=> {
            db.collection("task").findOne({
                _id: new ObjectId(req.params.id)
            })
            .then(result=>{
                res.render("single", {
                    pageTitle: "single page",
                    result
                })
            })
            .catch(e=>{ res.send(e.message) })
        })

    }
    static delTasks = (req, res)=>{
        connection(db=> {
            db.collection("task")
            .deleteOne({_id: new ObjectId(req.params.id)})
            .then(r => res.redirect('/'))
            .catch(e=> res.send(e))
        })
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