'use strict'

const MELI_API = require('../constants/meli-api')
const ItemsMapper = require('../mappers/items')
const axios = require('axios')

const getItems = (query) => {
  return new Promise((resolve, reject) => {
    const URL = `${MELI_API.HOST}/sites/MLA/search?q=${query}`

    axios.get(URL)
      .then(res => resolve(ItemsMapper.getItems(res.data)))
      .catch(err => reject(err))
  })
}

const getItemsById = (id) => {
  return new Promise((resolve, reject) => {
    const URL = `${MELI_API.HOST}/items/${id}`
    let item, description

    axios.get(URL)
      .then(res => {
        item = res.data
        return getDescriptionById(id)
      })
      .then(res => {
        description = res
        resolve(ItemsMapper.getItemByIdWithDescription(item, description))
      })
      .catch(err => reject(err))
  })
}

const getDescriptionById = (id) => {
  return new Promise((resolve, reject) => {
    const URL = `${MELI_API.HOST}/items/${id}/description`

    axios.get(URL)
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  })
}

module.exports = {
  getItems,
  getItemsById,
  getDescriptionById
}