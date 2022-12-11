const fs = require("fs")
class DealWithJson{
    static readFromJSON = () => {
        let data
        try{
            data = JSON.parse(fs.readFileSync('model/tasks.json'))
        }
        catch(e){
            data = []
        }   
        return data
    }
    static writeToJSON = (data)=> fs.writeFileSync("model/tasks.json", JSON.stringify(data))
}
module.exports = DealWithJson