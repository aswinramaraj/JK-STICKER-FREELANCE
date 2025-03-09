import React, { useState } from 'react';
import './cssfile/confirmbuy.css';
import { useNavigate } from 'react-router-dom';

const Confirmbuy = () => {
  const navi = useNavigate()
  const [isChecked, setIsChecked] = useState(false); // Track if the checkbox is checked

  // This function automatically checks the checkbox when the video ends
  const handleVideoEnd = () => {
    setIsChecked(true); // Automatically check the box when video ends
  };

  const checked = () =>{
    if (!isChecked) {
      alert('Please complete watching the video by checking the box.');
    }
  }

  const handleBuyClick = () => {
    if (!isChecked) {
      alert('Please complete watching the video by checking the box.');
    } else {
      // Proceed with the buy action
      window.open("https://docs.google.com/forms/d/e/1FAIpQLSc7RzTFEshLtnxF0bPUbzCNb6swgstL1YEX9dgRRmtOHpHqBQ/viewform");      alert('Proceeding with the purchase!');
      navi('/product')
    }
  };

  return (
    <div className='conf-container'>
      <div className="vid">
        <div className="video">
          <video 
            src="/video/confirm1.mp4" 
            controls
            autoplay 
            muted
            width="600"
            height="400"
            poster="thumbnail.jpg"
            preload="auto"
            playsInline
            onEnded={handleVideoEnd} // Trigger handleVideoEnd when the video ends
          >
            Your browser does not support the video tag.
          </video>
        </div>
    
        <div className="con-check">
          <div className="checkbox">
            <input 
              type="checkbox"  
              required 
              onMouseOver={checked}
              className='con-checkbox' 
              checked={isChecked} 
              readOnly // Disable user interaction, only allow auto-checking
            />
            <label htmlFor="" className='check-text'>Complete watching the video</label>
          </div>
          <button className='confirm-btn' onClick={handleBuyClick}>Buy</button>
        </div>
      </div>
    </div>
  );
}

export default Confirmbuy;
