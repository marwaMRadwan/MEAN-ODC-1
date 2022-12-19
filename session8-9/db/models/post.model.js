const mongoose = require("mongoose")
const Post = mongoose.model("Post", {
    postType:{
        type:String,
        enum:["txt", "file"],
        required:true,
        trim:true,
        lowercase:true
    },
    content:{
        type:String,
        required: function(){
            return this.postType=="txt"
        }
    },
    file:{
        type:String,
        required: function(){
            return this.postType!="txt"
        }
    }
})
module.exports=Post