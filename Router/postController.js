const Router = require('express')
const router = new Router

const PostController = require('../Constroller/postController')

router.post('/post', PostController.post)

module.exports = router