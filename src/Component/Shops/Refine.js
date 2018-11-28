import React, { Component } from 'react';
import Categories from './Refine/Categories';


class Refine extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cbstatus: ''
        }
    }
    onChange = (e) => {
        let target = e.target
        let name = target.name
        let value = target.value
        this.setState({
            [name]: value
        })
        this.props.filterPrice(value)
    }
    render() {
        
        return (
            <div className="border rounded p-4 mt-5">
                <div className="mt-5">
                    <Categories cate={this.props.onCate} />
                </div>
                <div className="mt-5">
                    <h5 className="text-uppercase text-light font-oswald">price</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <div className="form-group form-check">
                                <input
                                    type="radio"
                                    name="price"
                                    value = 'none'
                                    onChange={this.onChange}
                                    className="form-check-input"
                                    id="example1"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="example1"
                                >All
                                </label>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="form-group form-check">
                                <input
                                    type="radio"
                                    name="price"
                                    value = 'small'
                                    onChange={this.onChange}
                                    className="form-check-input"
                                    id="example2"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="example2"
                                >0-100
                                </label>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="form-group form-check">
                                <input
                                    type="radio"
                                    name="price"
                                    value = 'large'
                                    onChange={this.onChange}
                                    className="form-check-input"
                                    id="example3"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="example3"
                                >100-150
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default Refine;