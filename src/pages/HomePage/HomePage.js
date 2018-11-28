import React, { Component } from 'react';
import BannerHomePage from '../../Component/Banner/BannerHomePage';
import ProductMenu from '../../Container/ProductMenu';
import Footer from '../../Component/Footer/Footer';
import Histoty from '../../Component/Contents/History/Histoty';
import Collections from '../../Component/Contents/Collection/Collections';
import ProductContainer from '../../Container/ProductContainer';

class HomePage extends Component {
    render() {
        return (
            <div>
                <BannerHomePage />
                <ProductMenu />
                <div className="contents">
                    <Histoty />
                    <Collections />
                    <ProductContainer />
                </div>
                <Footer />
            </div>
        );
    }
}

export default HomePage;