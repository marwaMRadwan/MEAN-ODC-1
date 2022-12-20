const jwt = require("jsonwebtoken")
const token = jwt.sign({name:"marwa"}, "odc")
console.log(token);
const decoded = jwt.verify(token, "odc")
console.log(decoded);
//check upload
// const fs = require("fs")
// const multer = require("multer")
// const upload = multer({ dest: 'uploads/images/' })
// app.post('/profile', upload.single('avatar'), (req, res)=> {
//     // const ext = path.extname(req.file.originalname)
//     const ext = req.file.originalname.split(".").pop()
//     const newName = "uploads/"+Date.now()+"testApp."+ext
//     fs.renameSync(req.file.path, newName)
//     res.send({
//         ...req.body,
//         file: newName
//     })
//   })

// app.post("/test", (req,res)=>{
//     res.send(req.file)
// })
