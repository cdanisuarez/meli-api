'use strict'

const express = require('express')
const Router = express.Router()
const ItemsService = require('../services/items')

Router
  .get('/items', ItemsService.getItems)
  .get('/items/:id', ItemsService.getItemsById)
  
module.exports = Router