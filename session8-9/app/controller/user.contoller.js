const userModel = require("../../db/models/user.model")
const myHelper = require("../../app/helper")
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
}
module.exports = User