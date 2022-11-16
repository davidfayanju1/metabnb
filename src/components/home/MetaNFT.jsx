import React from 'react';
import '../../styles/metaNFT.css';
import metaBnbNfts from '../../images/metaBnbNfts.png';

const MetaNFT = () => {
  return (
    <section className='meta-section'>
        <div className="text-section">
          <h1>Metabnb NFTs</h1>
          <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are tradedas NFTs. These NFTs gives our customers access to loads of our exclusive services.</p>
          <button>Learn more</button>
        </div>

        <div className="image-section">
          <img src={ metaBnbNfts } alt="meta" />
        </div>
    </section>
  )
}

export default MetaNFT