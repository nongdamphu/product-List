import React, { Component } from 'react';
import ProductMenu from '../../Container/ProductMenu';
import BannerShop from '../../Component/Banner/BannerShop';
import { connect } from 'react-redux';
import * as actions from '../../actions/index'
import Refine from '../../Component/Shops/Refine';
import Footer from '../../Component/Footer/Footer';
import ProductContent from '../../Container/ProductContent';


class Shops extends Component {
    constructor(props){
        super(props)
        this.state = {
            filterName: '',
            filterPrice: ''
        }
    }

    onCate = (val) => {
        this.setState({
            filterName: val
        })
    }

    filterPrice = (val) =>{
        this.setState({
            filterPrice: val
        })
    }

    componentDidMount() {
        this.props.listShop()
    }
    render() {
        return (
            <div>
                <BannerShop />
                <ProductMenu />
                <div className="d-flex shopIndex pb-3">
                    <div className="col-xl-3">
                        <Refine onCate={this.onCate} filterPrice={this.filterPrice} />
                    </div>
                    <div className="col-xl-9">
                        <ProductContent filterName={this.state.filterName} filterPrice={this.state.filterPrice}/>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        listShop: () => {
            dispatch(actions.actFetchListShopRequest())
        }
    }
}
export default connect(null, mapDispatchToProps)(Shops);