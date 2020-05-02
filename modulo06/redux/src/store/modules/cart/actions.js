//Saga
export function addToCartRequest(id) {
    return {
        type: '@cart/ADD_REQUEST',
        id,
    }
}

//Redux
export function addToCartSuccess(product) {
    return {
        type: '@cart/ADD_SUCCESS',
        product,
    }
}


export function removeFromCart(id) {
    return {
        type: '@cart/REMOVE',
        id,
    }
}

export function updateAmount(id, amount) {
    return {
        type: '@cart/Update_AMOUNT',
        id,
        amount,
    }
}