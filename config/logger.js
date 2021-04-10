  
'use strict'

const log4js = require('log4js')
const CONFIG = require('../constants/config')
const Logger = log4js.getLogger()

Logger.level = CONFIG.LOGGER.LEVEL

module.exports = Logger;