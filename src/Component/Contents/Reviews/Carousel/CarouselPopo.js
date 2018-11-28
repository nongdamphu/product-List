import React, { Component } from 'react';

class CarouselPopo extends Component {
    render() {
        let { source, hinh, status, write, price, name, rating } = this.props
        let statusClass = status === true ? "" : "turnOff"
        return (
            <div className={`card bg-dark text-light rounded ${statusClass}`}>
                <a href="a"><img className={`${statusClass}`} src={source} alt={hinh} /></a>
                <div className="card-body text-test d-flex flex-column">
                    <div className="star-inner py-4 border-bottom">
                        {this.showRating(rating)}
                        <span className="text-light ml-2">{rating} Stars</span>
                    </div>
                    <p className="py-4 border-bottom font-500 font-oswald text-uppercase">{name}</p>
                    <p className="py-3 border-bottom">{write}</p>
                    <h4 className="py-3 text-danger">€{price}</h4>
                    <button 
                        type="button" 
                        className="btn btn-secondary form-control text-uppercase cart mt-auto"
                    > Add to Cart
                    </button>
                </div>
            </div>

        );
    }
    showRating = (rating) =>{
        let result = []
        for (let i = 1; i <= rating; i++) {
            result.push(<i className="fa fa-star m-0" key={i}></i>)
        }
        for (let j = 1; j <= (5 - rating); j++) {
            result.push(<i className="far fa-star m-0" key={`a${j}`}></i>)
        }
        return result
    }
}

export default CarouselPopo;