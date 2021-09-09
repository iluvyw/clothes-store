import React, { useEffect, useState } from 'react'
import CardView from '../../components/CardView/CardView'
import DropDownList from '../../components/DropDownList/DropDownList'
import SanityClient from '../../client'
import './Home.css'
import image_1 from "../../assets/1.jpg"
import image_2 from "../../assets/2.jpg"
import image_3 from "../../assets/3.jpg"
import image_4 from "../../assets/4.jpg"
import image_5 from "../../assets/5.jpg"
import image_6 from "../../assets/6.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const get_brand_query = `*[_type=="brand"]{name}`

const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }

export default function Home() {
    const [brandList, setBrandList] = useState([])
    const [selectedBrand, setSelectedBrand] = useState("")
    const [categoryList, setCategoryList] = useState([{ name: "Tops" }, { name: "Bottoms" }, { name: "Skirts & Dresses" }, { name: "Accessories" }])
    const [selectedCategory, setSelectedCategory] = useState("")

    useEffect(() => {
        SanityClient.fetch(get_brand_query)
            .then(data => setBrandList(data))
            .then(console.log(selectedBrand, selectedCategory))
    }, [])

    return (
        <div className="home-background">
            <section className="get-start">
                <div className="main-title">
                    <h1>SHOPPING</h1>
                    <a href="#main">Start</a>
                </div>
                <div className="background">
                    <Slider {...settings}>
                        <img src={image_1} alt="test"/>
                        <img src={image_2} alt="test"/>
                        <img src={image_3} alt="test"/>
                        <img src={image_5} alt="test"/>
                        <img src={image_6} alt="test"/>
                    </Slider>
                </div>
            </section>
            <section id="main">
                <section className="drop-down-container">
                    <DropDownList fieldName={'Brand'} list={brandList} select={setSelectedBrand} />
                    <DropDownList fieldName={'Category'} list={categoryList} select={setSelectedCategory} />
                </section>
                <section className="card-section">
                    {<CardView brand={selectedBrand} category={selectedCategory} />}
                </section>
            </section>
            <footer>
                <a href="https://www.facebook.com/an.phamhoang.1/">
                    <i class="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/anpham2408/">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/an-ph%E1%BA%A1m-43203a199/">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/iluvyw">
                    <i class="fab fa-github"></i>
                </a>
            </footer>
        </div>
    )
}
