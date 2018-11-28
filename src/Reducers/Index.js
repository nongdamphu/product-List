import {combineReducers} from 'redux'
import Products from './Products' 
import ListShops from './ListShops'
import ShopCart from './ShopCart'
const myReducer = combineReducers({
    Products,
    ListShops,
    ShopCart
})

export default myReducer