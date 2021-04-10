'use strict'

const express = require('express')
const Router = express.Router()
const ItemsService = require('../services/items')
const LoggerMiddleware = require('../middleware/logger')

Router
  .get('/items', LoggerMiddleware.logRequest, ItemsService.getItems)
  .get('/items/:id', LoggerMiddleware.logRequest, ItemsService.getItemsById)
  
module.exports = Router