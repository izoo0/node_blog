const express = require('express');
const postController = require('../Controllers/post.controller')
const router = express.Router();

router.post("/", postController.newPost);
router.get("/:id",postController.singlePost);
router.get("/",postController.allPost);
router.post("/:id",postController.editPost);

module.exports = router