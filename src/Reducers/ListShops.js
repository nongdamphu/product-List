import * as types from '../constant/TypeActions'

let initialState = []



const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_SHOP:
            state = action.listShop
            return [...state]
        case types.SORT_SHOP:
            if (action.val === '1') {
                state.sort((a, b) => {
                    var nameA = a.name.toUpperCase();
                    var nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }

                    return 0;
                })
            } else {
                state.sort((a, b) => {
                    var nameA = a.name.toUpperCase();
                    var nameB = b.name.toUpperCase();
                    if (nameA > nameB) {
                        return -1;
                    }
                    if (nameA < nameB) {
                        return 1;
                    }

                    return 0;
                })
            }
            return [...state]
        default:
            return state;
    }
}

export default myReducer