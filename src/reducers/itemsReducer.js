import { GET_ITEMS, SET_LOADING, ITEMS_ERROR, REMOVE_ITEM, ADD_ITEMS_TO_CART } from '../types'

const initialState = {
    items: null,
    cartItems: [],
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_ITEMS :
            return {
                ...state,
                items: action.payload,
                loading: false
            }

        case REMOVE_ITEM :
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
                loading: false
            }

        case ADD_ITEMS_TO_CART :
            return {
                ...state,
                cartItems: [...state.cartItems, state.items.find(x => x.id === action.payload)],
                loading: false
            }
        
        case SET_LOADING : 
            return {
                ...state,
                loading: true
            }

        case ITEMS_ERROR : 
            console.log('Error : ',action.payload)
            return {
                ...state,
                error: action.payload
            }

        default :
            return state
    }
}