const mongoose = require("mongoose")
const Post = mongoose.model("Post", {
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User"
    },
    postType:{
        type:String,
        enum:["txt", "file"],
        required:true,
        trim:true,
        lowercase:true
    },
    content:{
        type:String,
        default:"",
        required: function(){
            return this.postType=="txt"
        }
    },
    file:{
        type:String,
        default:"",
        required: function(){
            return this.postType!="txt"
        }
    }
})
module.exports=Post