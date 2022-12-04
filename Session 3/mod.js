class User{
    name="user"
    age=0
    add(){ console.log("add")}
    edit(){ console.log("edit")}
    show(){        console.log(this)}
    static test(){        console.log("test")}
}
// const myUser = new User()
// User.test()
// myUser.address="october"
// myUser.show()
module.exports = User