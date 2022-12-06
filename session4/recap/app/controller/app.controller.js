class App{
    static home = (req,res)=> {
        res.render("home", {
            name: "marwa",
            pageTitle:"Home Page"
        })
    }
    static about = (req,res)=> {
        res.render("about", {
            
        })
    }
}
module.exports = App