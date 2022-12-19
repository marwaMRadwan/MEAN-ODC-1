const jwt = require("jsonwebtoken")
const token = jwt.sign({name:"marwa"}, "odc")
console.log(token);
const decoded = jwt.verify(token, "odc")
console.log(decoded);