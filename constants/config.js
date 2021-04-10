'use strict'

const CONFIG = {
  PORT: process.env.PORT || 5000,
  API: '/api',
  LOGGER: {
    LEVEL:  process.env.LOGGER_LEVEL || 'debug'
  }
}

module.exports = CONFIG