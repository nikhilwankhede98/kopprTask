import { GET_ITEMS, SET_LOADING, ITEMS_ERROR, REMOVE_ITEM, ADD_ITEMS_TO_CART } from '../types'

export const getItems = () => async dispatch => {
    try {
        setLoading()

        const res = await fetch('https://run.mocky.io/v3/aea5d98a-654d-4423-bd99-6fbb90843730')
        const data = await res.json()
        const items = await data.data

        dispatch({
            type: GET_ITEMS,
            payload: items
        })
    } catch (err) {
        dispatch({
            type: ITEMS_ERROR,
            payload: err.response.data
        })
    }
}

export const removeItem = (id) => dispatch => {
    try {
        setLoading()

        dispatch({
            type: REMOVE_ITEM,
            payload: id
        })
    } catch (err) {
        dispatch({
            type: ITEMS_ERROR,
            payload: err.response.data
        })
    }
}

export const addItemToCart = (id) => dispatch => {
        setLoading()

        dispatch({
            type: ADD_ITEMS_TO_CART,
            payload: id
        })
}

export const setLoading = () => {
    return {
        type : SET_LOADING
    }
}