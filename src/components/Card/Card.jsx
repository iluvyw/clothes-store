import { useEffect } from 'react'
import './Card.css'

export default function Card({ name, frontImgUrl, price, brand, remainNumber }) {
    useEffect(()=>{
        //console.log('Card',name)
    },[])
    
    return (
        <div className="box">
            <div className="card">
                <div className="front">
                    <div className="img">
                        <img src={frontImgUrl} alt='Sth'/>
                    </div>  
                    {/*<div className="detail-box">
                        <h2>{name}</h2>
                    </div>*/}
                </div>
                <div className="back">
                    {/*<div className="img">
                        <img src={backImgUrl} alt='Sth'/>
                    </div>*/}  
                    <div className="detail-box">
                        <h1>{name}</h1>
                        <h2>{brand}</h2>
                        <h2>Remain: {remainNumber}</h2>
                        <h2>Price: {price}$</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
