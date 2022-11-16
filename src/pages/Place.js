import React from 'react'
import '../styles/place.css';
import Frame1 from '../images/metaNFT/Frame151(1).png'
import Frame2 from '../images/metaNFT/Frame151(2).png'
import Frame3 from '../images/metaNFT/Frame151(3).png'
import Frame4 from '../images/metaNFT/Frame151(4).png'
import Frame5 from '../images/metaNFT/Frame151(5).png'
import Frame6 from '../images/metaNFT/Frame151(6).png'
import Frame7 from '../images/metaNFT/Frame151(7).png'
import Frame8 from '../images/metaNFT/Frame151(8).png'
import Frame9 from '../images/metaNFT/Frame151(9).png'
import Frame10 from '../images/metaNFT/Frame151(10).png'
import Frame11 from '../images/metaNFT/Frame151(11).png'
import Frame12 from '../images/metaNFT/Frame151(12).png'
import Frame13 from '../images/metaNFT/Frame151(13).png'
import Frame14 from '../images/metaNFT/Frame151(14).png'
import Frame15 from '../images/metaNFT/Frame151(15).png'
import Frame16 from '../images/metaNFT/Frame151(16).png'
import NftCard from '../components/NftCard';

const Place = () => {

  const img = [
    {
      id: 1,
      img: Frame1
    },
    {
      id: 2,
      img: Frame2
    },
    {
      id: 3,
      img: Frame3
    },
    {
      id: 4,
      img: Frame4
    },
    {
      id: 5,
      img: Frame5
    },
    {
      id: 6,
      img: Frame6
    },
    {
      id: 7,
      img: Frame7
    },
    {
      id: 8,
      img: Frame8
    },
    {
      id: 9,
      img: Frame9
    },
    {
      id: 10,
      img: Frame10
    },

    {
      id: 11,
      img: Frame11
    },
    {
      id: 12,
      img: Frame12
    },
    {
      id: 13,
      img: Frame13
    },
    {
      id: 14,
      img: Frame14
    },
    {
      id: 15,
      img: Frame15
    },
    {
      id: 16,
      img: Frame16
    },

  ]

  return (
  
    <div className="places">
      <div className="places__topbar">
        <ul>
          <li>Restaurant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>Fantasy city</li>
          <li>beach</li>
          <li>Carbins</li>
          <li>Off-grid</li>
          <li>Farm</li>

          {/* for mobile view */}
          <div className="mobile-dropdown">
            <select name="" id="">
              <option value="" disabled></option>
              <option value='Restaurant'>Restaurant</option>
              <option value='Cottage'>Cottage</option>
              <option value='Castle'>Castle</option>
              <option value='Fantasy city'>Fantasy city</option>
              <option value='beach'>beach</option>
              <option value='Carins'>Carbins</option>
              <option value='Off-grid'>Off-grid</option>
              <option value='Farm'>Farm</option>
            </select>
          </div>

          <button>
            Location 
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.9999 5L10.9999 5" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.99985 5H1.99985" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21.9999 12H16.9999" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.9999 12H1.99985" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21.9999 19H10.9999" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.99985 19H1.99985" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.9999 21V17" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.9999 7V3" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.0001 14V10" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </ul>
      </div>

     
      <div className="places_card_grid">
        {
          img.map((image) => (
            <div className="nft_card" key={image.id}>
              <NftCard image={image } />
            </div>
          ))
        }
      </div>
    </div>


  )
}

export default Place