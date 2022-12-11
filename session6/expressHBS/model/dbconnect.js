const {MongoClient} = require("mongodb")
const myConnection = (cb) => {
    MongoClient.connect(process.env.dbURL, (error, client)=>{
        if(error) return console.log(error.message)
        const db = client.db(process.env.dbName)
        cb(db)
    })
}
module.exports = myConnection