import React, { Component } from 'react';
import BannerShop from '../../Component/Banner/BannerShop';
import ProductMenu from '../../Container/ProductMenu';
import Footer from '../../Component/Footer/Footer';
class NotFoundPage extends Component {
    render() {
        return (
            <div>
                <BannerShop />
                <ProductMenu />
                <h1 className="my-5 p-5">404- Not Found Page</h1>
                <Footer />
            </div>
        );
    }
}

export default NotFoundPage;