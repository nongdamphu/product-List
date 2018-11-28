import React, { Component } from 'react';
import ProductMenu from '../../Container/ProductMenu';
import BannerShop from '../../Component/Banner/BannerShop';
import Footer from '../../Component/Footer/Footer';
import MyContact from '../../Component/Dropdown/MyContact';

class Dropdown extends Component {
    render() {
        return (
            <div>
                <BannerShop />
                <ProductMenu />
                <MyContact />
                <Footer />
            </div>

        );
    }
}

export default Dropdown;