import * as actionTypes from '../constants/cart';

export const cartReducer = (state = { cartItems : [] }, action) => {
    switch(action.type) {
        case action.types.ADD_TO_CART:
            const item = action.payload;

            const existItem = state.cartItems.find((x) => x.product === item.product);

            if(existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => x.product === existItems.product ? item : x )
                }
            } else {
                return {
                    ...state, 
                    cartItems: [...state.cartItems, item],
                };
            }
        
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload)
            }

        default:
            return state;
    }
}