import React, { useEffect, useState } from 'react'
import SanityClient from '../../client'
import './Detail.css'

const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
}

export default function Detail({ match }) {
    const [product, setProduct] = useState(null)

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

    useEffect(() => {
        SanityClient.fetch(query(match.params.slug))
            .then(data => setProduct(data))
    }, [])

    /*if (!product) return (
        <div></div>
    )
    else */
    return (
        <div className="container">
            <section className="image-section">
                <div className="image-box">
                    <img className="image" src={product && product.front_image.asset.url} alt="front image" />
                </div>
                <div className="image-box">
                    <img className="image" src={product && product.image1.asset.url} alt="first image" />
                </div>
                <div className="image-box">
                    <img className="image" src={product && product.image2.asset.url} alt="second image" />
                </div>
                <div className="image-box">
                    <img className="image" src={product && product.image3.asset.url} alt="third image" />
                </div>
            </section>
            <section className="info-section">
                <section className="title">
                    <h3>{product && product.name}</h3>
                </section>
                <section className="brand">
                    <h1>Brand</h1>
                    <h3>{product && product.brand}</h3>
                </section>
                <section className="remain">
                    <h1>Remaining Items</h1>
                    <h3>{product && product.remainNumber}</h3>
                </section>
                <section className="price">
                    <h1>Price</h1>
                    <h3>{product && product.price}$</h3>
                </section>
                <section className="made-in">
                    <h1>Made In</h1>
                    <h3>{product && product.madeIn}</h3>
                </section>
                <section className="category">
                    <h1>Category</h1>
                    <h3>{product && product.category}</h3>
                </section>
                {/*<section>
                    <button>return</button>
                </section>*/}
            </section>
        </div>
    )
}
