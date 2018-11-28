import React, { Component } from 'react';

class BannerHomePage extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide carousel-fade banner" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://cdn.shopify.com/s/files/1/3012/8606/files/slider3-aero1-1920x846_1920x846.jpg?v=1519055913" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://cdn.shopify.com/s/files/1/3012/8606/files/slider2-aero1-1920x846_1920x846.jpg?v=1519055928" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://cdn.shopify.com/s/files/1/3012/8606/files/slider1-aero1-1920x846_1920x846.jpg?v=1519055942" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default BannerHomePage;