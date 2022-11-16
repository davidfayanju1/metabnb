import React from 'react'
import '../../styles/homeHero.css';
import image4 from '../../images/image4.png';
import image3 from '../../images/image3.png';
import image5 from '../../images/image5.png';
import image6 from '../../images/image6.png';
import token from '../../images/token.png'
import wolf from '../../images/wolf.png'
import opensea from '../../images/opensea.png'


const Hero = () => {
  return (
    <section>
        <div className="hero-top">
            <div className='hero-text'>
                <h2>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h2>
                <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <form className='text-form'>
                    <input type="text" placeholder='Search for location'/>
                    <button type="submit">search</button>
                </form>
            </div>
            <div className="image-flex">
                <div className="first-img">
                    <img src={ image4 } alt="nft" />
                    <img src={ image6 } alt="nft" />
                </div>
                <div className="second-img">
                    <img src={ image3 } alt="nft" />
                    <img src={ image5 } alt="nft" />
                </div>
            </div>
        </div>

        <div className="hero-bottom">
            <img src={ token } alt="" />
            <img src={ wolf } alt="" />
            <img src={ opensea } alt="" />        
        </div>
    </section>
  )
}

export default Hero