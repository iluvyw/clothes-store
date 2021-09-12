import React from 'react'
import SanityClient from '../../client'
import './Detail.css'
import { BagItem } from '../../bag'
import { withRouter } from 'react-router-dom'

const query = (slug) => {
    return `*[_type=="clothing" && slug.current=="${slug}"][0]{
        _id,
        name,
        front_image{
            asset->{
                _id,
                url
            }
        },
        image1{
            asset->{
                _id,
                url
            }
        },
        image2{
            asset->{
                _id,
                url
            }
        },
        image3{
            asset->{
                _id,
                url
            }
        },
        price,
        category,
        madeIn,
        'brand': brand->.name,
        remainNumber,
        note
    }`
}

class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 1,
            product: null
        }
    }

    componentDidMount(){
        SanityClient.fetch(query(this.props.match.params.slug))
            .then(data => this.setState({...this.state, product:data}))
    }

    shouldComponentUpdate(nextProp,nextState){
        console.log('a')
        for (let key in nextState){
            if (nextState[key] !== this.state[key])
                return true
        }
        return false
    }

    render() {
        const toHome = () => {
            this.props.history.goBack()
        }

        const onInputChange = (e) => {
            const value = Math.max(1,Math.min(20,parseInt(e.target.value)))
            this.setState({...this.state,inputValue:value})
        }

        return (
            <div className="container">
                <section className="image-section">
                    <div className="image-box">
                        <img className="image" src={this.state.product && this.state.product.front_image.asset.url} alt="front" />
                    </div>
                    <div className="image-box">
                        <img className="image" src={this.state.product && this.state.product.image1.asset.url} alt="first" />
                    </div>
                    <div className="image-box">
                        <img className="image" src={this.state.product && this.state.product.image2.asset.url} alt="second" />
                    </div>
                    <div className="image-box">
                        <img className="image" src={this.state.product && this.state.product.image3.asset.url} alt="third" />
                    </div>
                </section>
                <section className="info-section">
                    <section className="title">
                        <h3>{this.state.product && this.state.product.name}</h3>
                    </section>
                    <section className="brand">
                        <h1>Brand</h1>
                        <h3>{this.state.product && this.state.product.brand}</h3>
                    </section>
                    <section className="remain">
                        <h1>Remaining Items</h1>
                        <h3>{this.state.product && this.state.product.remainNumber}</h3>
                    </section>
                    <section className="price">
                        <h1>Price</h1>
                        <h3>{this.state.product && this.state.product.price}$</h3>
                    </section>
                    <section className="made-in">
                        <h1>Made In</h1>
                        <h3>{this.state.product && this.state.product.madeIn}</h3>
                    </section>
                    <section className="category">
                        <h1>Category</h1>
                        <h3>{this.state.product && this.state.product.category}</h3>
                    </section>
                    <section>
                        <input value={this.state.inputValue} className="input" type="number" onChange={onInputChange} placeholder="How many you want to buy?" />
                    </section>
                    <section>
                        <button className="button" onClick={() => {
                            (this.state.product && this.props.setBagItems(BagItem(this.state.product.name, this.state.product.brand, this.props.match.params.slug, this.state.product.front_image.asset.url, this.state.inputValue)))
                            //toHome()
                        }} >Add To Cart</button>
                    </section>
                </section>
            </div>
        )
    }
}

export default withRouter(Detail)

