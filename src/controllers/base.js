const router = require('express').Router()

router.get('/', function (request, response) {
  return response.json({ status: 'All right!' })
})

module.exports = router
