const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const errorHandler = require('./middlewares/error-handler')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('short'))
app.use(errorHandler)
app.use(routes)

app.listen(process.env.SERVER_PORT || 3000)
