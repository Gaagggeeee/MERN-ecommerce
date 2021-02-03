import * as actionTypes from '../constants/products';

export const getProductsReducer = (state = { products: [] }, action) => {
    switch(actionTypes) {
// allow app to wait before setting to false
    case actionTypes.GET_PRODUCTS_REQUEST:
        return {
            loading: true,
            products: []
        };
// will recieve array from backend and set it to products
    case actionTypes.GET_PRODUCTS_SUCCESS:
        return {
            loading: false,
            products: action.payload
        };

    case actionTypes.GET_PRODUCTS_FAIL:
        return {
            loading: false,
            error: action.payload,
        };
    default:
        return state; 
    };
};


export const getProductDetailsReducer = (state = { products: {}}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return {
                loading: true
            };
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            };
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return {
                products: {}
            };
        default:
            return state;
        };
    };