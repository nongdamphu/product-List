import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: [
                {
                    name: 'Home',
                    to: '/'
                },
                {
                    name: 'Shop',
                    to: '/shop'
                },
                {
                    name: 'Dropdown',
                    to: '/drop'
                },
                {
                    name: 'Blog',
                    to: '/blog'
                }
            ]
        }
    }

    showMenu = () => {
        let result = null
        let { tab } = this.state
        result = tab.map((list, index) => {
            return (
                <nav className="nav flex-column col-lg-3 px-4 border-left" key={index}>
                    <h5 className="text-light mb-4">{list.name}</h5>
                    {this.showMain()}
                </nav>
            )
        })
        return result
    }
    showMain = () => {
        let result = null
        let { tab } = this.state
        result = tab.map((list, index) => {
            return (
                <Link
                    className="nav-link p-4 font-oswald"
                    to={list.to}
                    key={index}
                >{list.name}</Link>

            )
        })
        return result
    }
    render() {
        return (
            <div className="footer p-3">
                <div className="row p-5">
                    <div className="col-lg-4 mt-5">
                        <img src="//cdn.shopify.com/s/files/1/3012/8606/files/logo-aero1.png?v=1519058255" alt="img1" />
                        <p className="my-5 text-test">
                            We are a team of designers and developers who creates high quality multipurpose and responsive premium Shopify themes.
                        </p>
                        <div className="info text-light">
                            <p>Address :No 40 Baria Sreet 133/2, NewYork, USA.</p>
                            <p>Phone :+(012) 800 456 789</p>
                            <p>Email :Infor@aero.com</p>
                        </div>
                    </div>
                    <div className="col-lg-8 d-flex pt-5 row">
                        {this.showMenu()}
                    </div>
                </div>
                <div className="d-flex mt-5 mt-100 border-top pt-5 pb-4">
                    <div className="text-light">Copyright © 2017 MassTechnologist.Com. All Rights Reserved.</div>
                    <div className="ml-auto">
                        <a href="a">
                            <img src="//cdn.shopify.com/s/files/1/3012/8606/files/payment.png?v=1519662556" alt="a" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;