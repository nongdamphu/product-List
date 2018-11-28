import React, { Component, Fragment } from 'react';

class Histoty extends Component {
    render() {
        return (
            <Fragment>
                <div className="title text-center py-5 font-oswald">
                    <h1 className="text-uppercase display-1">Histoty</h1>
                    <h1 className="text-uppercase">
                        Welcome to
                        <strong className="d-block">aero car store</strong>
                    </h1>
                </div>
                <div className="d-flex">

                    <a className="mx-4" href="a">
                        <img className="ruff" src="https://cdn.shopify.com/s/files/1/3012/8606/files/img1.png?v=1519511006" alt="a" />
                    </a>

                    <div className="frontPager">
                        <div className="text-uppercase font-oswald">
                            <h5>meet our</h5>
                            <h2>car club since 1892</h2>
                            <p>custom and club</p>
                        </div>
                        <p className="mb-5">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                        <p className="mb-5">Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                        <h5 className="font-oswald mb-5">JOHN DOE - CEO AERO</h5>
                        <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/img2.png?v=1519511476" alt="name" />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Histoty;