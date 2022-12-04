const fs = require("fs")
class Deal{
    static readFromJson(fileName="data.json"){
        let data 
        try{
            data = JSON.parse(fs.readFileSync(fileName))
            if(!Array.isArray(data)) throw new Error("msh array")
        }
        catch(e){
            data = []
        }
        return data
        
     }
    static writeToJson=(data, fileName="data.json")=>
     fs.writeFileSync(fileName, JSON.stringify(data))
}
module.exports = Deal
// console.log(Deal.readFromJson())