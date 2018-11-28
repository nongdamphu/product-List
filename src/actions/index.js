import * as types from '../constant/TypeActions'
import noteData from '../utils/noteData'

export const actFetchProductsRequest = () => {
    return dispatch => {
        return noteData('Products').on('value', snapshot => {
            let products = [];
            snapshot.forEach(product => {
                let id = product.key;
                let {name, price, status, url, hinh, write, rating} = product.val()
                products.push({
                    id: id,
                    name: name,
                    price: price,
                    status: status,
                    url: url,
                    hinh: hinh,
                    write: write,
                    rating: rating
                })
            })
            setTimeout(() => { dispatch(actFetchProducts(products)); }, 1)
        })
    }
}

export const actFetchProducts = products =>{
    return{
        type: types.FETCH_PRODUCTS,
        products
    }
}
export const actFetchListShopRequest = () => {
    return dispatch => {
        return noteData('list-shop').on('value', snapshot => {
            let listShop = [];
            snapshot.forEach(product => {
                let id = product.key;
                let {name, price, status, url, hinh, write, amount} = product.val()
                listShop.push({
                    id: id,
                    name: name,
                    price: price,
                    status: status,
                    url: url,
                    hinh: hinh,
                    write: write,
                    amount: amount
                })
            })
            setTimeout(() => { dispatch(actFetchListShop(listShop)); }, 1)
        })
    }
}

export const actFetchListShop = listShop =>{
    return{
        type: types.LIST_SHOP,
        listShop
    }
}

export const sortShop = val =>{
    return{
        type: types.SORT_SHOP,
        val
    }
}
export const shopCart = (val) =>{
    return{
        type: types.SHOP_CART,
        val
    }
}
export const closeListShop = (id) =>{
    return{
        type: types.CLOSE_LIST_SHOP,
        id
    }
}