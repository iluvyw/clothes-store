import Card from "../Card/Card";
import './CardView.css'
import SanityClient from '../../client'
import React from "react";
import { withRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SlideWrapper } from "../../style";

const query = (brand, category) => {
  let query = `*[_type == "clothing"`
  if (brand) {
    query = query + `&& brand->.name=="${brand}"`
  }
  if (category) {
    query = query + `&& category=="${category}"`
  }
  query = query + `]{
    _id,
    name,
    slug,
    front_image{
      asset->{
        _id,
        url
      }
    },
    'brand': brand->.name,
    remainNumber,
    price,
    'brandLogoUrl': brand->.logo.asset->.url
  }`
  return query
}

const settings = {
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
}

class CardView extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      allCards: null
    }
  }

  componentDidMount(){
    SanityClient.fetch(query(this.props.brand, this.props.category))
    .then((data) => this.setState({...this.state,allCards: data}))
    .catch(console.error)
  }

  componentDidUpdate(prevProps){
    if ((prevProps.brand !== this.props.brand) || (prevProps.category !== this.props.category)){
      SanityClient.fetch(query(this.props.brand, this.props.category))
      .then((data) => this.setState({...this.state,allCards: data}))
      .catch(console.error)
    }
  }

  render(){
    const nextPage = (slug) => {
      this.props.history.push(`./${slug}`)
    }

    return (
      <div className="body">
        <SlideWrapper>
          <Slider {...settings}>
            {
              this.state.allCards && this.state.allCards.map(item =>
                <div onClick={() => nextPage(item.slug.current)} key={item.slug.current}>
                  <Card key={item._id} name={item.name} frontImgUrl={item.front_image.asset.url} brand={item.brand} remainNumber={item.remainNumber} price={item.price} />
                </div>
              )
            }
          </Slider>
        </SlideWrapper>
      </div>
    );
  }
}

export default withRouter(CardView)
