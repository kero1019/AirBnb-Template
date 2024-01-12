import React from 'react'
import Star from '../../public/images/Star.png'
// import testImg from "../../public/images/photo1.png"
export default function Card(props){
    let showText
    if(props.openSpots === 0 )
    showText = "SOLD OUT"
    else if(props.location ==="Online")
    showText = "ONLINE"
    return(
        <div className ="card">
            {showText && <div className="badge">{showText}</div>}
            <img  className ="card--photo" src={`./images/${props.coverImg}`} alt="hero photo" />
            <div className="card--collection">
                <img src={Star} alt="star logo" />
                <p>{props.stats.rating}</p>
                <p className="gray">{`(${props.stats.reviewCount})`}</p>
                <p className='gray'>•{props.location}</p>
            </div>
            <p className="card--title">{props.title}</p>
            <p> <span> {`From $${props.price}`}</span> / person</p>
        </div>
    )
}