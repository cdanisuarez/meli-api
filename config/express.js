'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');
const CONFIG = require('../constants/config')

/* API ROUTES */
const ItemsRoutes = require('../routes/items')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* ROUTES DEFINITION */
app.use(CONFIG.API, ItemsRoutes)

module.exports = app