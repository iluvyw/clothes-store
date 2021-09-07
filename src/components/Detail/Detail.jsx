import React, { useEffect, useState } from 'react'
import SanityClient from '../../client'
import './Detail.css'

export default function Detail({ match }) {
    const [product,setProduct] = useState(null)

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
            back_image{
                asset->{
                    _id,
                    url
                }
            },
            'brand': brand->.name,
            remainNumber,
        }`
    }
    
    useEffect(()=>{
        SanityClient.fetch(query(match.params.slug))
        .then(data => setProduct(data))
    },[])
    
    /*if (!product) return (
        <div></div>
    )
    else */
    return (
        <div className="main-div">
            <h3 className="title-text">{product && product.name}</h3>
            <h3 className="brand-text">{product && product.brand}</h3>
            <div className="image-container">
                <div className="image-box">
                    <img src={product && product.front_image.asset.url} alt="front"/>
                </div>
                <div className="image-box">
                    <img src={product && product.back_image.asset.url} alt="back"/>
                </div>
                <div className="image-box">
                    <img src={product && product.front_image.asset.url} alt="front"/>
                </div>
                <div className="image-box">
                    <img src={product && product.back_image.asset.url} alt="back"/>
                </div>
            </div>
            <h3 className="text">Remaining Items</h3>
            <div className="remain-box">
                <button className="plus">+</button>
                <h3 className="remain-text">{product && product.remainNumber}</h3>
                <button className="minus">-</button>
            </div>
        </div>
    )
}
