'use strict'

const HTTP_CODES = require('../constants/http-codes')
const HTTP_MSG = require('../constants/http-msg')
const ItemsLogic = require('../logic/items')

const getItems = (req, res) => {
  const query = req.query.q

  if (!query) res.status(HTTP_CODES.BAD_REQUEST).send({ msg: HTTP_MSG.MISSING_QUERY })

  ItemsLogic
    .getItems(query)
    .then(data => res.status(HTTP_CODES.OK).send(data))
    .catch(err => {
      console.log('Error: ', err);
      res.status(HTTP_CODES.SERVER).send({ msg: HTTP_MSG.SERVER_ERROR })
    })
}

const getItemsById = (req, res) => {
  const id = req.params.id

  if (!id) res.status(HTTP_CODES.BAD_REQUEST).send({ msg: HTTP_MSG.MISSING_PARAMETER })

  ItemsLogic
    .getItemsById(id)
    .then(data => res.status(HTTP_CODES.OK).send(data))
    .catch(err => {
      console.log('Error: ', err);
      res.status(HTTP_CODES.SERVER).send({ msg: HTTP_MSG.SERVER_ERROR })
    })
}

module.exports = {
  getItems,
  getItemsById
}