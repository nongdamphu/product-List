import React, { Component } from 'react';


class Reviews extends Component {  
    render() {
        return (
            <div>
                <div className="d-flex fash mt-100 mb-5">
                    <div className="col-3">
                        <div className="row-1 line"></div>
                        <div className="row-2 line"></div>
                        <div className="row-3 line"></div>
                    </div>
                    <div className="col-6">
                        <div className="feat">
                            <p className="m-0 text-light h5">
                                <i className="fas fa-star mr-2"></i>
                                FEATURED PRODUCTS
                            <i className="fas fa-star ml-2 mr-0"></i>
                            </p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="row-4 line"></div>
                        <div className="row-5 line"></div>
                        <div className="row-6 line"></div>
                    </div>
                </div>
                
                <p className="d-block text-center text-test pb-5">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                
                {this.props.children}
            </div>
        );
    }
}


export default Reviews;