class Data{
    static getId = (arr, key, val)=>{
        return arr.findIndex(el=> el[key]==val)
    }
}
module.exports = Data