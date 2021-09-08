import Card from "../Card/Card";
import './CardView.css'
import Carousel from 'react-elastic-carousel'
import SanityClient from '../../client'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SlideWrapper } from "../../style";

const query = (brand, category) => {
  let query = `*[_type == "clothing"`
  if (brand){
    query = query +  `&& brand->.name=="${brand}"`
  }
  if (category){
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

const breakpoint = [
  {width: 1, itemsToShow: 1},
  {width: 550, itemsToShow: 2},
  {width: 768, itemsToShow: 3},
  {width: 1200, itemsToShow: 4}
]

const settings = {
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
}

function CardView({ brand, category }) {
  const [allCards,setAllCards] = useState(null)
  const a = 1

  useEffect(() => {
    SanityClient.fetch(query(brand, category))
    .then((data) => setAllCards(data))
    .then(console.log('Card view ',query(brand,category)))
    .catch(console.error)
  }, [brand, category])

  return (
    <div className="body">
      {/*<Carousel breakPoints={breakpoint}>
        {
          allCards && allCards.map(item => 
            <Link to={"/"+item.slug.current} key={item.slug.current}>
              <Card key={item._id} name={item.name} frontImgUrl={item.front_image.asset.url} backImgUrl={item.back_image.asset.url} brand={item.brand} remainNumber={item.remainNumber}/>
            </Link>
          )
        }
      </Carousel>*/}
      <SlideWrapper>
        <Slider {...settings}>
          {
            allCards && allCards.map(item => 
              <div>
                <Link to={"/"+item.slug.current} key={item.slug.current}>
                  <Card key={item._id} name={item.name} frontImgUrl={item.front_image.asset.url} brand={item.brand} remainNumber={item.remainNumber} price={item.price}/>
                </Link>
              </div>
            )
          }
        </Slider>
      </SlideWrapper>
    </div>
  );
}

export default CardView;