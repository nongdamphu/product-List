import React, { Component, Fragment } from 'react';

class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            All: 'all',
            Featured: 'article',
            Sounds: 'designs',
            Wheels: 'demand'
        }
    }
    cate = (val) => {
        this.props.cate(val)
    }
    render() {
        return (
            <Fragment>
                <h5 className="text-uppercase text-light font-oswald">categories</h5>
                <p
                    className="ml-3 my-4"
                    onClick={() => this.cate(this.state.All)}
                >
                    All
                </p>
                <p
                    className="ml-3 my-4"
                    onClick={() => this.cate(this.state.Featured)}
                >
                    Featured
                </p>
                <p
                    className="ml-3 my-4"
                    onClick={() => this.cate(this.state.Sounds)}
                >
                    Sounds
                </p>
                <p
                    className="ml-3 my-4"
                    onClick={() => this.cate(this.state.Wheels)}
                >
                    Wheels
                </p>
            </Fragment>
        );
    }
}

export default Categories;