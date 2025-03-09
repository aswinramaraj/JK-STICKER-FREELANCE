import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import './cssfile/purchase.css'
import Purcard1 from './Cards/Purcard1'
import Purcard2 from './Cards/purcard2'
import Purcard3 from './Cards/purcard3'
import Purcard4 from './Cards/purcard4'
import Purcard5 from './Cards/purcard5'
import Purcard6 from './Cards/purcard6'

const Purchase = () => {
  return (
    <div><h1 className='pur-text' id='sticker'>Stickers</h1>
     <div className='pur-container'>
      
      <div className="pur1">
          <Purcard1/>
      </div>
      <div className="pur2">
          <Purcard2/>
      </div>
      <div className="pur3">
          <Purcard3/>
      </div>
      <div className="pur4">
          <Purcard4/>
      </div>
      <div className="pur5">
          <Purcard5/>
      </div>
      <div className="pur6">
          <Purcard6/>
      </div>
      <div className="more"> 
      <button className="more-btn">
  More <FiArrowRight className="icon" />
</button>
      </div>
  </div></div>
   
  )
}

export default Purchase