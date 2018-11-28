import React, { Component, Fragment } from 'react';

class ShopChild extends Component {
    closeListShop = () =>{
        let {id} = this.props.shopCart
        this.props.closeListShop(id)
    }
    render() {
        let {url, hinh, name, price, amount} = this.props.shopCart
        return (
            <Fragment>
                <div className="bg-dark text-light rounded d-flex justify-content-between px-4 py-3 my-3">
                    <i 
                        className="fas fa-times flex-right"
                        onClick={this.closeListShop}
                    ></i>
                    <div className="w-25">
                        <a href="a">
                            <img
                                className="w-100 h-100 rounded-top"
                                src={url}
                                alt={hinh}
                            />
                        </a>
                    </div>
                    <div className="card-body text-test">
                        <div className="star-inner py-2 border-bottom">{name}</div>
                        <p className="py-2 border-bottom font-500 font-oswald text-uppercase">x{amount}</p>
                        <h4 className="py-1 text-danger">€{price}</h4>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ShopChild;