import React from 'react'
import frame151 from '../../images/nftImages/Frame151.png';
import frame151One from '../../images/nftImages/Frame151(1).png';
import frame151Two from '../../images/nftImages/Frame151(2).png';
import frame151Three from '../../images/nftImages/Frame151(3).png';
import frame151Four from '../../images/nftImages/Frame151(4).png';
import frame151Five from '../../images/nftImages/Frame151(5).png';
import frame151Seven from '../../images/nftImages/Frame151(7).png';
import frame151Eight from '../../images/nftImages/Frame151(8).png';
import '../../styles/homeCards.css';
import NftCard from '../NftCard';

const Cards = () => {


  const images = [

    {
      img:frame151
    },
    {
      img:frame151One
    },
    {
      img:frame151Two
    },
    {
      img:frame151Three
    },
    {
      img:frame151Four
    },
    {
      img:frame151Five
    },
    {
      img:frame151Seven
    },
    {
      img:frame151Eight
    }
  ]


  return (
    <section className='cards'>
      <div className="title">
        <h2>Inspiration for your next adventure</h2>
      </div>

      <div className="card-grid">
        {
          images.map((image) => (

            <div className="card" key={Math.random()}>
              <NftCard image={ image }/>
            </div>
          ))
        }
           
      </div>
    </section>
  )
}

export default Cards