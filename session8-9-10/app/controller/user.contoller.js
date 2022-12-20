const userModel = require("../../db/models/user.model")
const myHelper = require("../../app/helper")
const fs = require("fs")
const upload = require("../middleware/fileUpload.middleware")
const multer = require("multer")
class User{
    static register = async(req,res) => {
        try{
            if(req.body.password.length<6) throw new Error("password must be more than 6")
            const userData = new userModel(req.body)
            await userData.save()
            myHelper.resHandler(res, 200, true, userData, "user added successfully")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static login = async(req,res) => {
        try{
            const userData = await userModel.loginUser(req.body.email, req.body.password)
            const token = await userData.generateToken()
            myHelper.resHandler(res, 200, true, {user:userData, token}, "user added successfully")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static allUsers = async(req,res) => {
        try{
            const users = await userModel.find()
            myHelper.resHandler(res, 200, true, users, "users fetched")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static profile = (req,res)=>{
        myHelper.resHandler(res, 200, true,{user: req.user},"user profile fetched")
    }
    static logOut = async(req,res)=>{
        try{
            //req.user , req.token
            req.user.tokens = req.user.tokens.filter(
                t => t.token != req.token 
            )
            await req.user.save()
            myHelper.resHandler(res, 200, true,null,"logged out")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static logOutAll = async(req,res)=>{
        try{
            //req.user , req.token
            req.user.tokens = []
            await req.user.save()
            myHelper.resHandler(res, 200, true,null,"logged out")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static getSingle = async(req, res)=>{
        try{
            const user = await userModel.findById(req.params.id)
            myHelper.resHandler(res, 200, true,user,"logged out")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static changeStatus = async(req,res)=>{
        try
        {
            let user = req.user
            if(!req.query.current || req.query.current=="0") 
                user = await userModel.findById(req.body._id)
            
            if(req.query.activate=="1")  user.status=true
            else user.status = false
            await user.save()
            myHelper.resHandler(res, 200, true, user, "updated")

        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static addAddr = async(req,res)=>{
        try{
            if(!req.user.addresses) req.user.addresses=[]
            req.user.addresses.push(req.body)
            await req.user.save()
            myHelper.resHandler(res, 200, true, req.user, "updated")

        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static uploadImage = async(req, res) =>{
        try{
            // if(!req.file) throw new Error("no file found")
            const ext = req.file.originalname.split(".").pop()
            const newName = "uploads/"+Date.now()+"testApp."+ext
            fs.renameSync(req.file.path, newName)
            req.user.image = newName
            await req.user.save()
            myHelper.resHandler(res, 200, true, req.user, "updated")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static uploadImage1 = async(req, res) =>{
        try{
            req.user.image = req.file.path
            await req.user.save()
            myHelper.resHandler(res, 200, true, req.user, "updated")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }

    static uploadImage2 = async(req,res)=>{
        try{
            const upload1 = upload.single('img')
            upload1(req, res, function (err) {
                if (err instanceof multer.MulterError) {
                   return res.send({err:"invalid upload"})
                } else if (err) {
                    return res.send({err:"invalid upload 1"})
                }
                return res.send(req.file)
              })
        }
        catch(e){
            res.send(e.message)
        }
    }
}
module.exports = User