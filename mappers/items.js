'use strict'

const AUTHOR = {
  name: 'Daniela',
  lastname: 'Suarez'
}

const buildSimpleItem = (item) => {
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: Math.trunc(item.price),
      decimals: parseFloat(item.price.toFixed(2).split('.')[1]),
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping
  }
}

const getItems = (items) => {
  try {
    if (items.paging.total === 0) return {}

    const filtersCategory = items.filters.filter(fil => fil.id === 'category')
    const categories = filtersCategory.length > 0 ? filtersCategory.map(filter => filter.values)[0] : []
    const results = items.results
    const newItems = {
      author: AUTHOR,
      categories: categories.map(category => category.path_from_root.map(item => item.name))[0],
      items: results.map(item => { return { ...buildSimpleItem(item), city: item.address.city_name}}),
    }

    return newItems
  } catch (err) {
    throw new Error(err)
  }
}

const getItemByIdWithDescription = (item, description) => {
  try {
    const newItem = {
      author: AUTHOR,
      item: {
        ...buildSimpleItem(item),
        sold_quantity: item.sold_quantity,
        description: description.plain_text
      },
    }

    return newItem
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getItems,
  getItemByIdWithDescription
}
