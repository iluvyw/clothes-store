import Card from "./components/Card/Card";
import './App.css'
import Carousel from 'react-elastic-carousel'
import SanityClient from './client'
import { useState, useEffect } from "react";

const query = `*[_type == "clothing"]{
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
  'brandLogoUrl': brand->.logo.asset->.url
}`

function App() {
  const [allCards,setAllCards] = useState(null)
  const a = 1

  useEffect(() => {
    SanityClient.fetch(query)
    .then((data) => setAllCards(data))
    .then(console.log(allCards))
    .catch(console.error)
  }, [])

  return (
    <div className="body">
      <Carousel>
        {
          allCards && allCards.map(item => <Card key={item._id} name={item.name} frontImgUrl={item.front_image.asset.url} backImgUrl={item.back_image.asset.url} brand={item.brand} remainNumber={item.remainNumber}/>)
        }
      </Carousel>
    </div>
  );
}

export default App;
