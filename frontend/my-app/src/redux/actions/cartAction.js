import * actionTypes from '../constants/cart';
import axios from 'axios';

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/product/${id}`);

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            cooling: data.cooling,
            boost: data.boost,
            memory: data.memory,
            price: data.price
        }

        localStorage.setItem('cart', JSON.stringify().cart)
    })
}