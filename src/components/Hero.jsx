import React from 'react'
import CollectionPhoto from '../../public/images/collection photo.png'
export default function Hero(){
    return(
        <section className = "hero--section">
            <img src={CollectionPhoto} alt="Hero images" />
            <div className="hero--text">
                <h2>Online Experiences</h2>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    )
}