require('dotenv').config()
// console.log(process.env.PORT)
const PORT = process.env.PORT || 5000
const app = require("./src/app")
app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))