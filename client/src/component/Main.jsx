import React from 'react'
import Card1 from './Cards/Cards1'
import './navbar.css'
import '../component/Cards/card_animated.css'
import Card2 from './Cards/Card2'
import Card3 from './Cards/Card3'
import Card4 from './Cards/Card4'
import Card5 from './Cards/Card5'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const navi = useNavigate()

  const product = () =>{
      navi('/product')
  }
  return (
    <div className='main-container' id="home">
   <div className="left-side">
    <h1 className='left-text-1'>Create a Custom Sticker </h1>
    <h1 className='left-text-1'> Business Built for Success</h1>
    <h4 className='left-text-2'>Design and sell high-quality custom stickers effortlessly with <span className='jk'>JK Stickers</span>.
Skip the hassle of production, inventory, and shipping.
Customize, price your designs, and maximize your profits.</h4>
 
<button class="cssbuttons-io-button" onClick={product}>
  Purchase
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>

   </div>

   <div className="right-side">
    <div className="right-side-1">
        <div className="img1">
        <Card1 />
        </div>
        <div className="img2">
        <Card2 />
        </div>
        <div className="img3">
        <Card3 />
        </div>
        <div className="img4">
        <Card4 />
        </div>
        <div className="img5">
        <Card5 />
        </div>
    </div>
    <div className="right-side-2">
    <div className="img6">
        <Card1 />
        </div>
        <div className="img7">
        <Card2 />
        </div>
        <div className="img8">
        <Card3 />
        </div>
        <div className="img9">
        <Card4 />
        </div>
        <div className="img10">
        <Card5 />
        </div>
    </div>
   </div>
    </div>
  )
}

export default Main