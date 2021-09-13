import React from 'react'
import { Link } from 'react-router-dom'
import './BagItem.css'

export default class BagItem extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(){
        return (
            <Link to={"/" + this.props.slug}>
                <div className="item-box">
                    <img src={this.props.imageUrl} alt="small"/>
                    <div className="detail">
                        <h2>{this.props.name}</h2>
                        <h3>{this.props.brand}</h3>
                    </div>
                    <div className="number">
                        <h2>{this.props.number}</h2>
                    </div>
                </div>
            </Link>
        )
    } 
}
