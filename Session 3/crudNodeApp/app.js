const user = require("./modules/user.module")
const yargs = require('yargs')
yargs.command({
    command:"add",
    handler: function(argv){
        user.add(argv)
    }
})
yargs.command({
    command:"showAll",
    handler: function(argv){
        user.showAll()
    }
})
yargs.command({
    command:"showSingle",
    handler: function(argv){
        user.showSingle()
    }
})
yargs.command({
    command:"edit",
    handler: function(argv){
        user.edit()
    }
})
yargs.command({
    command:"del",
    handler: function(argv){
        user.del()
    }
})
yargs.argv