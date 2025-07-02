const Router = require('express')
const router = new Router

const idkController = require('../Constroller/idkController')

router.post('/all', idkController.Negr)

module.exports = router