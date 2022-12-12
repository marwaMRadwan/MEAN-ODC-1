const mongoose = require("mongoose")
const Task = new mongoose.model("Task", {
    title:{
        type:String,
        trim:true,
        required:true,
        minLength:5,
        maxLength:20,
        unique:true
    },
    content:{
        type:String,
        trim:true,
        required:true
    },
    dueData:{
        type:Date,
        default: Date.now()
    },
    status:{
        type:Boolean,
        default: false
    }
})
module.exports = Task