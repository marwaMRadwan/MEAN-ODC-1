require('dotenv').config()
const PORT = process.env.PORT
const app = require("./app/src")
app.listen(PORT, ()=> console.log(`${PORT}`))