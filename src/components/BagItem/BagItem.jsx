import React from 'react'
import { Link } from 'react-router-dom'
import './BagItem.css'

export default function BagItem({ name, brand, slug, imageUrl, number }) {
    return (
        <Link to={"/" + slug}>
            <div className="item-box">
                <img src={imageUrl} alt="small"/>
                <div className="detail">
                    <h2>{name}</h2>
                    <h3>{brand}</h3>
                </div>
                <div className="number">
                    <h2>{number}</h2>
                </div>
            </div>
        </Link>
    )
}
