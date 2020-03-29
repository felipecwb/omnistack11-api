const express = require('express')
const router = express.Router()

const base = require('./controllers/base')
const organization = require('./controllers/organization')

router
  .use('/', base)
  .use('/organization', organization)

module.exports = router
