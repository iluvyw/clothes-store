import React from 'react'
import { Link } from 'react-router-dom'
import './BagItem.css'

export default class BagItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="item-box">
                    <Link to={"/" + this.props.slug}>
                        <img src={this.props.imageUrl} alt="small" />
                    </Link>
                    <div className="detail">
                        <h2>{this.props.name}</h2>
                        <h3>{this.props.brand}</h3>
                    </div>
                    <div className="number">
                        <h2>{this.props.number}</h2>
                    </div>
                    <div>
                        <h4 className="button-x" onClick={() => {
                            this.props.deleteItem(this.props.id)
                            this.props.restoreRemain(this.props.id, this.props.number)
                            console.log(this.props.id, this.props.number)
                        }}>X</h4>
                    </div>
                </div>
            </div>
        )
    }
}
