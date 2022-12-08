require("dotenv").config()
const app = require("./app/src")
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))