const postModel = require("../../db/models/post.model")
const myHelper = require("../../app/helper")
class Post {
    static addPost = async (req, res) => {
        try {
            const postData = new postModel({
                userId: req.user._id,
                ...req.body
            })
            await postData.save()
            myHelper.resHandler(res, 200, true, postData, "added")

        }
        catch (e) {
            myHelper.resHandler(res, 500, false, e, e.message)

        }
    }
    static myPosts = async (req, res) => {
        try {
            // const posts = await postModel.find({userId: req.user._id})
            await req.user.populate("myPosts")
            myHelper.resHandler(res, 200, true, {
                posts: req.user.myPosts,
                user: req.user
            }, "added")
        }
        catch (e) {
            myHelper.resHandler(res, 500, false, e, e.message)
        }

    }
   // getall (isMine)
   static getAll = async(req,res)=>{
    try{
        let posts = await postModel.find()
        posts = posts.map(r=> {
            r.userId.toString()== req.user._id.toString() ?
            r = {...r._doc, isMine: true} :
            r = {...r._doc, isMine: false}
            return r
        })
        myHelper.resHandler(res, 200, true, posts, "fetched")
    }
    catch (e) {
        myHelper.resHandler(res, 500, false, e, e.message)

    }
   }
   // get single
   static getSingle= async(req,res)=>{
    try{
        let post = await postModel.findOne({_id:req.params.id})
        if(!post) throw new error("post not found")
            post.userId.toString()== req.user._id.toString() ?
            post = {...post._doc, isMine: true} :
            post = {...post._doc, isMine: false}
        myHelper.resHandler(res, 200, true, post, "fetched")
    }
    catch (e) {
        myHelper.resHandler(res, 500, false, e, e.message)

    }
   }
   // delete
   static deleteSingle = async(req,res)=>{}
   //delete all
   static deleteAll = async(req,res)=>{}
   // edit
   static editSingle = async(req,res)=>{}

}
module.exports = Post