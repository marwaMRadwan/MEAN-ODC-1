heads = [
    {key:"id",default: Date.now()}, 
    {key:"name", default:null},
    {key: "age", default:null}, 
    {key:"email", default:null}, 
    {key:"status", default: false}]
const deal = require("./deal.module")
class User{
    static add(data){
        const user = {}
        heads.forEach(head => {
            if(head.default!=null) 
                user[head.key]= head.default
            else user[head.key] = data[head.key]
        });
        console.log(user)
        const all = deal.readFromJson()
        all.push(user)
        deal.writeToJson(all)
    }
    static showAll(){}
    static showSingle(){}
    static edit(){}
    static del(){}
}
module.exports = User