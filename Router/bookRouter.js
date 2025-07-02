const Router = require('express')
const router = new Router

const BookConstoller = require('../Constroller/bookController')

router.post('/createBook', BookConstoller.createBook)
router.get('/getBook', BookConstoller.getBook)

module.exports = router