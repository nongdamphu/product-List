import React, { Component } from 'react';

class GridList extends Component {
    byCart = (ListShop) =>{
        this.props.shopCart(ListShop)
    }
    render() {
        let { url, hinh, write, price, name } = this.props.ListShop
        let {ListShop} = this.props
        return (
            <div className="col-xl-4 p-2">
                <div className="card bg-dark text-light m-1 rounded justify-content-between h-100">
                    <div>
                        <a href="a"><img className="w-100 rounded-top" src={url} alt={hinh} /></a>
                    </div>
                    <div className="card-body text-test d-flex flex-column">
                        <div className="star-inner py-4 border-bottom">No reviews</div>
                        <p className="py-4 border-bottom font-500 font-oswald text-uppercase">{name}</p>
                        <p className="py-3">{write}</p>
                        <h4 className="py-1 text-danger mt-auto">€{price}</h4>
                        <button
                            type="button"
                            className="btn btn-secondary form-control text-uppercase cart"
                            onClick={() => this.byCart(ListShop)}
                        > Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridList;