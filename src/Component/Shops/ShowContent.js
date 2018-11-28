import React, { Component } from 'react';


class ShowContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sortName: '0'
        }
    }
    handleChange = (event) => {
        let target = event.target
        let value = target.value
        let name = target.name
        this.setState({
            [name]: value
        });
        this.props.sortShop(name === 'sortName' ? value : '')
    }
    
    clickChange = (status) => {
        this.props.clickChange(status)
    }
    
    render() {
        let {sortName} = this.state
        return (
            <div className="mt-5">
                <div className="border d-flex align-items-center justify-content-between p-3 rounded">
                    <div className="col-xl-6">
                        <i
                            className="fas fa-list-ul h2 m-3 iconList"
                            onClick={() => this.clickChange(false)}
                        >
                        </i>
                        <i
                            className="fas fa-th h2 iconList"
                            onClick={() => this.clickChange(true)}
                        >
                        </i>
                        <p className="d-inline-block mb-0">Showing 1 to 12 of 13 items</p>
                    </div>

                    <div className="input-group mb-0 col-xl-6">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Sort by</label>
                        </div>

                        <select
                            className="custom-select"
                            id="inputGroupSelect01"
                            name="sortName"
                            value={sortName}
                            onChange={this.handleChange}
                        >
                            <option disabled value="0">Choose...</option>
                            <option value="1">From A to Z</option>
                            <option value="2">From Z to A</option>
                        </select>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default ShowContent;