import {
  ADD_TO_FAVORITES,
  REMOVE_FAVORITE_ITEM,
  CLEAR_FAVORITES,
  COUNT_FAVORITES_TOTALS
} from '../actions'

const favorites_reducer = (state, action) => {

  if (action.type === ADD_TO_FAVORITES) {

    const { id, amount, product } = action.payload;

    const tempItem = state.favorites.find((item) => item.id === id)
    if (tempItem) {
      const tempFav = state.favorites.map((favItem) => {
        if (favItem.id === id) {
          let newAmount = 1;
          return { ...favItem, amount: newAmount }
        } else {
          return favItem
        }
      })

      return { ...state, favorites: tempFav }

    } else {
      const newFav = {
        id: id,
        name: product.name,
        amount,
        images: product.images[0].url,
        price: product.price,
        stars: product.stars,
        old_price: product.old_price,
        shipping: product.shipping,
        colors: product.colors[0]
      }

      return { ...state, favorites: [...state.favorites, newFav] }
    }
  }

  if (action.type === REMOVE_FAVORITE_ITEM) {
    const tempFavs = state.favorites.filter((item) => item.id !== action.payload)
    return { ...state, favorites: tempFavs }
  }

  if (action.type === CLEAR_FAVORITES) {
    return { ...state, favorites: [] }
  }

  if (action.type === COUNT_FAVORITES_TOTALS) {
    const { total_items, total_amount } = state.favorites.reduce((total, favItem) => {
      const { amount } = favItem;
      total.total_items += amount
      total.total_amount += amount
      return total
    }, {
      total_items: 0,
      total_amount: 0
    })
    return { ...state, total_items, total_amount }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default favorites_reducer
