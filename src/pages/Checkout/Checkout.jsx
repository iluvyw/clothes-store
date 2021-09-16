import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Checkout.css'

class Checkout extends Component {
    constructor(props){
        super(props)
        this.state = {
            total: 0
        }
    }

    componentDidMount(){
        let temp = 0
        this.props.bagItems.forEach(element => {
            temp += element.price*element.number
        });
        this.setState({...this.state, total: temp})
    }

    render() {
        if (this.props.bagItems && this.props.bagItems.length > 0){
            console.log(this.props.bagItems)
            return (
                <div className="checkout">
                    {this.props.bagItems.map(item => 
                        <div className="checkout-item" key={item.id}>
                            <h1>{item.name}</h1>
                            <h1>Price: {item.price}$</h1>
                            <h1>Number: {item.number}</h1>
                        </div>  
                    )}
                    <h1>Total: {this.state.total}</h1>
                </div>
            )
        }
        else{
            return(
                <div>
                    <h1>Empty</h1>
                </div>
            )
        }
    }
}
export default withRouter(Checkout)
