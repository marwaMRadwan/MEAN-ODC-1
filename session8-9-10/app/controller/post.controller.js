const postModel = require("../../db/models/post.model")
const myHelper = require("../../app/helper")
class Post{
    static addPost = async(req,res)=>{
        try{
            const postData = new postModel({
                userId: req.user._id,
                ...req.body
            })
            await postData.save()
            myHelper.resHandler(res, 200, true, postData, "added")

        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)

        }
    }
    static myPosts = async(req,res)=>{
        try{ 
            // const posts = await postModel.find({userId: req.user._id})
            await req.user.populate("myPosts")
            myHelper.resHandler(res, 200, true, {
                posts: req.user.myPosts,
                user: req.user
            }, "added")
}
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)

        }

    }
}
module.exports = Post