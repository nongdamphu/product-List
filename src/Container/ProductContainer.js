import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/index';
import Reviews from '../Component/Contents/Reviews/Reviews';
import CarouselPopo from '../Component/Contents/Reviews/Carousel/CarouselPopo';

class ProductContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 1
        }
    }

    componentDidMount() {
        this.props.getData()
    }

    showCarousel = list => {
        let result = null
        result = list.map((product, index) => {
            let listItem = null
            if (product.status === true) {
                var { status, url, hinh, write, price, name, rating } = product
                return <CarouselPopo
                    source={url}
                    hinh={hinh} status={status} key={index}
                    write={write}
                    price={price}
                    name={name}
                    rating={rating}
                />
            }
            return listItem
        })
        return result
    }
    onNext = () => {
        let { num } = this.state
        let { products } = this.props
        if (num < products.length - 2) {
            num += 1
        }
        this.setState({
            num: num
        })
    }
    onPrev = () => {
        let { num } = this.state
        let { products } = this.props
        if (num < products.length && num > 1) {
            num -= 1
        }
        this.setState({
            num: num
        })
    }
    render() {
        let { num } = this.state
        let { products } = this.props
        let { mapIndex, showCarousel } = this
        return (
            <div>
                <Reviews products={products}>
                    <div className="letorum py-5">
                        <div className="carousel">
                            <div className="carousel-inner">
                                <div className="d-flex justify-content-around px-5">
                                    {showCarousel(mapIndex(products, num))}
                                </div>
                            </div>
                            <p className="carousel-control-prev" role="button" onClick={this.onPrev}>
                                <span className="carousel-control-prev-icon" />
                                <span className="sr-only">Previous</span>
                            </p>
                            <p className="carousel-control-next" role="button" onClick={this.onNext}>
                                <span className="carousel-control-next-icon" />
                                <span className="sr-only">Next</span>
                            </p>
                        </div>
                    </div>
                </Reviews>
            </div>
        );
    }
    mapIndex = (arr, num) => {
        let result = null
        result = arr.map((item, index) => {
            if (index <= num + 1 && index >= num - 1) {
                item.status = true
            } else {
                item.status = false
            }
            return item
        })
        return result
    }
}

const mapStateToProps = state => {
    return {
        products: state.Products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getData: () => {
            dispatch(actions.actFetchProductsRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);