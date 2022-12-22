const router = require("express").Router()
const Post = require('../app/controller/post.controller')
const { auth } = require("../app/middleware/auth.middleware")

router.post("/add", auth, Post.addPost)
router.get("/myPosts", auth, Post.myPosts)

router.get("/all", auth, Post.getAll)
router.delete("/all", auth, Post.deleteAll)

router.get("/all/:id", auth, Post.getSingle)
router.delete("/all/:id", auth, Post.deleteSingle)
router.patch("/all/:id", auth, Post.editSingle)

module.exports = router