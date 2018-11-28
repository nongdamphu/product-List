import React, { Component, Fragment } from 'react';

class ActCollection extends Component {
    render() {
        let { firstLine, secondLine, thirdLine, name, code, hover } = this.props
        return (
            <Fragment>
                <div className={`${hover} position-relative mt-100 col-xl-4`} >
                    <a href="a">
                        <img className="position-relative w-100" src={code} alt="a" />
                    </a>
                    <div className={`${name} position-absolute text-center text-light w-100 mt-100`}>
                        <h4 className="text-uppercase m-0">{firstLine}</h4>
                        <h3 className="text-uppercase">{secondLine}</h3>
                        <h5 className="text-uppercase">{thirdLine}</h5>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default ActCollection;