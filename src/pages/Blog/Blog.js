import React, { Component } from 'react';
import BannerShop from '../../Component/Banner/BannerShop';
import ProductMenu from '../../Container/ProductMenu';
import Footer from '../../Component/Footer/Footer';
import ShowBlog from '../../Component/Blog/ShowBlog';

class Blog extends Component {
    render() {
        return (
            <div className="contents">
                <BannerShop />
                <ProductMenu />
                <ShowBlog />
                <Footer />
            </div>
        );
    }
}

export default Blog;