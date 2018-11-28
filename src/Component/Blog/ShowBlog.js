import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class ShowBlog extends Component {
    render() {
        return (
            <div>
                <div className="bg-dark text-light m-5 rounded d-flex justify-content-between">
                    <div className="w-25">
                        <a href="a"><img className="w-100 h-100" src='//cdn.shopify.com/s/files/1/3012/8606/articles/post1-270x334.jpg?v=1519516270' alt="hinh" /></a>
                    </div>
                    <div className="card-body text-test">
                        <div className="py-4 my-0 border-bottom">CLARITAS EST ETIAM PROCESSUS DYNAMICUS.</div>
                        <p className="py-4 my-0 border-bottom font-500 font-oswald text-uppercase"><i className="far fa-clock"></i>11/24/18 / POSTED BY: PHU</p>
                        <h5 className="py-4 my-0 border-bottom">Lorem ipsum dolor sit amet. Integer adipiscing erat llentesque s sollicitudin pellentesque et non erat. Lorem ipsum dolor sit amet....</h5>
                        <h4 className="py-4 my-0 text-danger">€c</h4>
                        <Link
                            role="button"
                            className="btn btn-secondary text-uppercase"
                            to="/"
                        >
                            Read More <i className="fas fa-arrow-right ml-1 mr-2"></i>
                        </Link>
                    </div>
                </div>
                <div className="bg-dark text-light m-5 rounded d-flex justify-content-between">
                    <div className="w-25">
                        <a href="a"><img className="w-100 h-100" src='//cdn.shopify.com/s/files/1/3012/8606/articles/post2-270x334.jpg?v=1519516260' alt="hinh" /></a>
                    </div>
                    <div className="card-body text-test">
                        <div className="py-4 my-0 border-bottom">CLARITAS EST ETIAM PROCESSUS DYNAMICUS.</div>
                        <p className="py-4 my-0 border-bottom font-500 font-oswald text-uppercase"><i className="far fa-clock"></i>11/24/18 / POSTED BY: PHU</p>
                        <h5 className="py-4 my-0 border-bottom">Lorem ipsum dolor sit amet. Integer adipiscing erat llentesque s sollicitudin pellentesque et non erat. Lorem ipsum dolor sit amet....</h5>
                        <h4 className="py-4 my-0 text-danger">€c</h4>
                        <Link
                            role="button"
                            className="btn btn-secondary text-uppercase"
                            to="/"
                        >
                            Read More <i className="fas fa-arrow-right ml-1 mr-2"></i>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowBlog;