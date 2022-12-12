class MyHelper{
    static formatDate(date) {
        var d = (date.getMonth() + 1) + ' - ' + date.getDate()+ " - " +date.getFullYear();
        console.log(d)
        return d
    }
}
module.exports = MyHelper