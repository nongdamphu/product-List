import * as types from '../constant/TypeActions'

let initialState = []

let findIndex = (products, id) => {
    let result = null
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index
        }
    })
    return result
}

let myReducer = (state = initialState, action) => {
    let index = -1
    let { id } = action

    switch (action.type) {
        case types.SHOP_CART:
            let { price } = action.val
            index = findProductInCart(state, action.val)
            if (index !== -1) {
                state[index].amount += 1
                state[index].price += price
            } else {
                state.push(action.val)
            }
            return [...state]
        case types.CLOSE_LIST_SHOP:
            console.log(action)
            index = findIndex(state, id)
            state.splice(index, 1)
            return [...state]
        default:
            return [...state];
    }
}
let findProductInCart = (state, product) => {
    let index = -1
    if (state.length > 0) {
        for (let i = 0; i < state.length; i++) {
            if (state[i].id === product.id) {
                index = i
                break
            }

        }
    }
    return index
}

export default myReducer