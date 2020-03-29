
function errorHandler(error, request, response, next) {
  console.error(error.stack)

  let show = {
    error: error.message
  }

  if (process.env.NODE_ENV !== 'production') {
    show.stack = error.stack
  }

  return response.status(500).json(show)
}

module.exports = errorHandler
