import React, { Component } from 'react';

class VerticalList extends Component {
    byCart = (ListShop) =>{
        this.props.shopCart(ListShop)
    }
    render() {
        let { url, hinh, write, price, name } = this.props.ListShop
        let {ListShop} = this.props
        return (
            <div className="bg-dark text-light m-3 rounded d-flex justify-content-between">
                <div>
                    <a href="a"><img className="w-35vh h-100 rounded-left" src={url} alt={hinh} /></a>
                </div>
                <div className="card-body text-test">
                    <div className="star-inner py-4 border-bottom">No reviews</div>
                    <p className="py-4 border-bottom font-500 font-oswald text-uppercase">{name}</p>
                    <p className="py-3 border-bottom">{write}</p>
                    <h4 className="py-3 text-danger">€{price}</h4>
                    <button
                        type="button"
                        className="btn btn-secondary form-control text-uppercase cart"
                        onClick={() => this.byCart(ListShop)}
                    > Add to Cart
                    </button>
                </div>
            </div>
        );
    }
}

export default VerticalList;