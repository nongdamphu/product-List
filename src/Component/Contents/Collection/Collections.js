import React, { Component } from 'react';
import ActCollection from './ActCollection';

class Collections extends Component {
    render() {
        return (
            <div className="collection d-flex justify-content-between postion-relative px-5">
                <ActCollection 
                    hover= "bike"
                    name = "collect"
                    firstLine = "new collection"
                    secondLine ="new trending 2017-2018"
                    thirdLine ="sale up to 20% off"
                    code= "https://cdn.shopify.com/s/files/1/3012/8606/files/img1-top-aero1.jpg?v=1519512519"
                />
                <ActCollection 
                    hover= "car"
                    name = "bestlow"
                    firstLine = "best low price"
                    secondLine ="high perfomance"
                    thirdLine =" sale up to 10% off"
                    code= "https://cdn.shopify.com/s/files/1/3012/8606/files/img2-top-aero1.jpg?v=1519512592"
                />
                <ActCollection 
                    hover= "moto"
                    name = "honda"
                    firstLine = "honda motorcycles"
                    secondLine ="red sale ends april 30"
                    thirdLine ="sale up to 40% off"
                    code= "https://cdn.shopify.com/s/files/1/3012/8606/files/img3-top-aero1.jpg?v=1519512646"
                />
            </div>
        );
    }
}

export default Collections;