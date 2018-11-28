import React, { Component } from 'react';
import Nav from '../Component/Menu/Nav';
import { connect } from 'react-redux'
import ShopChild from '../Component/Menu/ShopChild';
import * as actions from '../actions/index'

class ProductMenu extends Component {
    ShopChild = () => {
        let result = null
        let { shopCarts, closeListShop } = this.props
        if (shopCarts.length > 0) {
            result = shopCarts.map((shopCart, index) => {
                this.badges(index)
                return <ShopChild key={index} shopCart={shopCart} closeListShop={closeListShop} />
            })
        }
        return result
    }

    badges = (list) => {
        let result = null
        let {shopCarts} = this.props
        if (shopCarts.length > 0) {
            let indexCart = shopCarts.map((shopCart, index)=>{
                return index
            })
            result = indexCart.reduce((a, b) =>{
                return Math.max(a, b);
            }) + 1;
        } else {
            result = 0
        }
        return result
    }
    groupBy = (shopCarts) => {
        let result = null
        let arrShop = []
        if (shopCarts.length > 0) {
            result = shopCarts.map((shopCart) => {
                return arrShop.push(shopCart.price)
            })
        }
        result = arrShop.reduce((acc, cur) => {
            return acc + cur;
        }, 0)
        return result
    }
    render() {
        let { shopCarts } = this.props
        return (
            <div>
                <Nav>
                    <i
                        className="fas fa-shopping-cart text-light m-1"
                        data-toggle="dropdown"
                        id="dropdownShop"
                        aria-haspopup="true"
                        aria-expanded="false"
                    ></i>
                    <span className="badge badge-light">{this.badges()}</span>

                    <div className="dropdown-menu p-3" aria-labelledby="dropdownShop">
                        {this.ShopChild()}
                        <div className="mt-4 border-top d-flex justify-content-between">
                            <h4 className="text-uppercase">subtotal:</h4>
                            {this.groupBy(shopCarts)}
                        </div>
                    </div>
                </Nav>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        shopCarts: state.ShopCart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        closeListShop: (id) => {
            dispatch(actions.closeListShop(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductMenu);