const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/odc3")
const User = mongoose.model("User", {
    name:{
        type:String
    },
    age:{
        type:Number
    },
    email:{
        type:String
    }
})
const myUser = new User({
    name:"marwa", 
    age:37, 
    email:"marwaradwan@techsexperts.com"
})
const x = async() =>{
    try{
        const res = await myUser.save()
        console.log(res)
    }
    catch(e){
        console.log(e)
    }
    
}
x()
    // myUser.save()
    // .then(res=> console.log(res))
    // .catch(e=> console.log(e))