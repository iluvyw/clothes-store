import React from 'react'
import './Card.css'

export default class Card extends React.Component {
    // constructor(props){
    //     super(props)
    // }

    shouldComponentUpdate(){
        return false
    }

    render(){
        return (
            <div className="box">
                <div className="card">
                    <div className="front">
                        <div className="img">
                            <img src={this.props.frontImgUrl} alt='Sth'/>
                        </div>  
                    </div>
                    <div className="back">
                        <div className="detail-box">
                            <h1>{this.props.name}</h1>
                            <h2>{this.props.brand}</h2>
                            <h2>Remain: {this.props.remainNumber}</h2>
                            <h2>Price: {this.props.price}$</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
