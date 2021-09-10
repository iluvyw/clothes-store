import Card from "../Card/Card";
import './CardView.css'
import SanityClient from '../../client'
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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

function CardView({ brand, category }) {
  const [allCards, setAllCards] = useState(null)

  useEffect(() => {
    SanityClient.fetch(query(brand, category))
      .then((data) => setAllCards(data))
      .then(console.log('Card view rerender'))
      .catch(console.error)
  }, [brand, category])

  let history = useHistory()

  const nextPage = (slug) => {
    history.push(`./${slug}`)
  }

  return (
    <div className="body">
      <SlideWrapper>
        <Slider {...settings}>
          {
            allCards && allCards.map(item =>
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

export default CardView;
