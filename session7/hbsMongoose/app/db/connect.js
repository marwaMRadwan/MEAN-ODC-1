const mongoose = require("mongoose");

try{
    mongoose.connect(process.env.dbURL)
}
catch(e){
    return console.log(e.message)
}