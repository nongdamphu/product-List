import * as types from '../constant/TypeActions'

let initialState = []

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            state = action.products
            return [...state]
        default:
            return [...state];
    }
}

export default myReducer