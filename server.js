'use strict'

const app = require('./config/express')
const CONFIG = require('./constants/config')

app.listen(CONFIG.PORT, () => {
  console.log(`Server running on: http://localhost:${CONFIG.PORT}`)
})