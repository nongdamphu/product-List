import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

const MenuLink = ({ label, to, exact }) => {
    return (
        <Route
            path={to}
            exact={exact}
            children={({ match }) => {
                let active = match ? 'checked' : ''
                if (label === 'Dropdown') {
                    return (
                        <li className={`nav-item dropdown ${active}`}>
                            <Link className={`nav-link`} to={to}>
                                <span>{label}</span>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <p className="dropdown-item" href="#">Action</p>
                                    <p className="dropdown-item" href="#">Another action</p>
                                    <div className="dropdown-divider" />
                                    <p className="dropdown-item" href="#">Something else here</p>
                                </div>
                            </Link>
                        </li>
                    )
                } else {
                    return (
                        <li className={`nav-item dropdown ${active}`}>
                            <Link className={`nav-link`} to={to}>
                                <span>{label}</span>
                            </Link>
                        </li>
                    )
                }

            }}
        />
    )
}

const menuLists = [
    {
        label: 'Home',
        exact: true,
        to: '/'
    },
    {
        label: 'Shop',
        exact: false,
        to: '/shop'
    },
    {
        label: 'Dropdown',
        exact: false,
        to: '/drop'
    },
    {
        label: 'Blog',
        exact: false,
        to: '/blog'
    }
]

class Nav extends Component {
    showMenu = (menuLists) => {
        let result = null
        result = menuLists.map((menuList, index) => {
            let { label, to, exact } = menuList
            return <MenuLink key={index} label={label} exact={exact} to={to} />
        })
        return result
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5 text-uppercase font-oswald">
                <a className="navbar-brand" href="#a">
                    <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/logo-aero1.png?v=1519058255" alt="/" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="menu collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        {this.showMenu(menuLists)}
                    </ul>
                    <form className="form-inline">
                        <div className="dropleft dropdown">
                            <i className="fas fa-search text-light p-2" data-toggle="dropdown" id="dropSearch" aria-haspopup="true" aria-expanded="false"></i>
                            <div className="dropdown-menu p-0" aria-labelledby="dropSearch">
                                <input
                                    type="text"
                                    className="form-control dropdown-item"
                                    placeholder="Search..."
                                />
                            </div>
                        </div>

                        <div className="dropdown main">
                            <i className="fas fa-bars text-light p-2" data-toggle="dropdown" id="dropdownMain" aria-haspopup="true" aria-expanded="false"></i>
                            <div className="dropdown-menu p-5" aria-labelledby="dropdownMain">
                                <h5 className="dropdown-toggle text-uppercase" href="a">My Account</h5>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="a">Sign in</a>
                                <a className="dropdown-item" href="a">Register</a>
                                <a className="dropdown-item" href="a">Wish list</a>
                                <a className="dropdown-item" href="a">Cart</a>

                                <h5 className="dropdown-toggle text-uppercase" href="a">Currency: eur</h5>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="a">USD</a>
                                <a className="dropdown-item" href="a">EUR</a>
                                <a className="dropdown-item" href="a">GBP</a>
                                <a className="dropdown-item" href="a">PKR</a>
                                <a className="dropdown-item" href="a">CAD</a>
                                <a className="dropdown-item" href="a">JPY</a>
                            </div>
                        </div>

                        <div className="dropdown shop">
                            {this.props.children}
                        </div>
                    </form>
                </div>
            </nav>
        );
    }
}


export default Nav;