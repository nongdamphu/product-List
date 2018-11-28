import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/index';
import ShowContent from '../Component/Shops/ShowContent';
import GridList from '../Component/Shops/ShowContent/GridList';
import VerticalList from '../Component/Shops/ShowContent/VerticalList';


class ProductContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: true
        }
    }
    clickChange = (status) => {
        this.setState({
            status: status
        })
    }
    render() {
        let { ListShops, sortShop, filterName, filterPrice } = this.props

        if (filterName === 'article' || filterName === 'designs' || filterName === 'demand') {
            ListShops = ListShops.filter(res => {
                let result = null
                result = res.name.toLowerCase().indexOf(filterName) > -1
                return result
            })
        }

        if (filterPrice === 'none') {
            ListShops = ListShops.filter(res => {
                let result = null
                result = res.price
                return result
            })
        } else if (filterPrice === 'small') {
            ListShops = ListShops.filter(res => {
                let result = null
                if (res.price > 0 && res.price < 100) {
                    result = res.price
                }
                return result
            })
        } else if (filterPrice === 'large') {
            ListShops = ListShops.filter(res => {
                let result = null
                if (res.price > 100 && res.price < 150) {
                    result = res.price
                }
                return result
            })
        }
        return (
            <div>
                <ShowContent sortShop={sortShop} clickChange={this.clickChange}>
                    <div className="row d-flex no-gutters mt-5">
                        {this.state.status === true ? this.gridList(ListShops) : this.verticalList(ListShops)}
                    </div>
                </ShowContent>
            </div>
        );
    }

    gridList = (ListShops) => {
        let result = null
        if (ListShops.length > 0) {
            result = ListShops.map((ListShop, index) => {
                return <GridList ListShop={ListShop} key={index} 
                                shopCart={(val) => this.props.shopCart(val)}
                        />
            })
        }
        return result
    }

    verticalList = (ListShops) => {
        let result = null
        
        if (ListShops.length > 0) {
            result = ListShops.map((ListShop, index) => {
                return <VerticalList ListShop={ListShop} key={index} shopCart={(val) => this.props.shopCart(val)} />
            })
        }
        return result
    }
}

const mapStateToProps = state => {
    return {
        ListShops: state.ListShops
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        sortShop: (val) => {
            return dispatch(actions.sortShop(val))
        },
        shopCart: (val) => {
            return dispatch(actions.shopCart(val))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductContent);