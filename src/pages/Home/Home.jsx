import React from 'react'
import CardView from '../../components/CardView/CardView'
import DropDownList from '../../components/DropDownList/DropDownList'
import SanityClient from '../../client'
import './Home.css'
import image_1 from "../../assets/1.jpg"
import image_2 from "../../assets/2.jpg"
import image_3 from "../../assets/3.jpg"
import image_5 from "../../assets/5.jpg"
import image_6 from "../../assets/6.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BagItem from '../../components/BagItem/BagItem'

const get_brand_query = `*[_type=="brand"]{name}`

const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
}

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            brandList: [],
            selectedBrand: "",
            categoryList: [{ name: "Tops" }, { name: "Bottoms" }, { name: "Skirts & Dresses" }, { name: "Accessories" }],
            selectedCategory: ""
        }
    }

    componentDidMount() {
        SanityClient.fetch(get_brand_query)
            .then(data => this.setState({...this.state,brandList:data}))
            //.then(console.log(this.state.selectedBrand, this.state.selectedCategory))
    }

    render(){
        return (
            <div className="home-background">
                <section className="get-start">
                    <div className="main-title">
                        <h1>SHOPPING</h1>
                        <a href="#shop">Start</a>
                    </div>
                    <div className="background">
                        <Slider {...settings}>
                            <img src={image_1} alt="test" />
                            <img src={image_2} alt="test" />
                            <img src={image_3} alt="test" />
                            <img src={image_5} alt="test" />
                            <img src={image_6} alt="test" />
                        </Slider>
                    </div>
                </section>
                <section id="shop">
                    <section className="drop-down-container">
                        <DropDownList fieldName={'Brand'} list={this.state.brandList} select={(value)=>{this.setState({...this.state,selectedBrand: value})}} />
                        <DropDownList fieldName={'Category'} list={this.state.categoryList} select={(value)=>{this.setState({...this.state,selectedCategory: value})}} />
                        <a href="#bag" className="button-view-bag">View Your Bag</a>
                    </section>
                    <section className="card-section">
                        {<CardView brand={this.state.selectedBrand} category={this.state.selectedCategory} />}
                    </section>
                </section>
                <section className="bag" id="bag">
                    <a href="#shop">Back to shop</a>
                    <h1>BAG</h1>
                    {this.props.bagItems ? this.props.bagItems.map(item => <BagItem key={Math.random()*1000000} name={item.name} brand={item.brand} slug={item.slug} imageUrl={item.imageUrl} number={item.number} />) : <h1>Empty</h1>}
                </section>
                <footer>
                    <a href="https://www.facebook.com/an.phamhoang.1/">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/anpham2408/">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/an-ph%E1%BA%A1m-43203a199/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/iluvyw">
                        <i className="fab fa-github"></i>
                    </a>
                </footer>
            </div>
        )
    }
}
