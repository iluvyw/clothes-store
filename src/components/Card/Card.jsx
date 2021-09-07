import Image from '../../assets/img-test.jpeg'
import './Card.css'

export default function Card({ name, frontImgUrl, backImgUrl, brand, remainNumber }) {
    return (
        <div className="box">
            <div className="card">
                <div className="front">
                    <div className="img">
                        <img src={frontImgUrl} alt='Sth'/>
                    </div>  
                    <div className="detail-box">
                        <h2>{name}</h2>
                    </div>
                </div>
                <div className="back">
                    <div className="img">
                        <img src={backImgUrl} alt='Sth'/>
                    </div>  
                    <div className="detail-box">
                        <h2>Brand: {brand}</h2>
                        <br/>
                        <h2>Remaining: {remainNumber}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
