  
'use strict'

const logger = require('../config/logger')

const logRequest = (req, res, next) => {
  logger.debug(JSON.stringify({
    path: req.path,
    method: req.method,
    headers: req.headers,
    body: req.body,
    params: req.params,
    query: req.query
  }))
  next()
}

module.exports = {
  logRequest
}