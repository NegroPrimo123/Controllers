const express = require('express')
const app = express()
const cors = require('cors')

const idkRouter = require('./Router/idkRouter')
const bookRouter = require('./Router/bookRouter')
const postRouter = require('./Router/postController')

//Middleware
app.use(express.json())
app.use(cors())

app.use('/negr', idkRouter)
app.use('/book', bookRouter)
app.use('/oh', postRouter)

const PORT = process.env.PORT || 4001

app.listen(PORT, () => {
    console.log(`Your PORT: ${PORT}`)
})