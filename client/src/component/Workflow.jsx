import React, { useEffect, useRef } from 'react';
import './cssfile/work.css';
import Workcard1 from './Cards/Workcard1';
import Workcard2 from './Cards/Workcard2';
import Workcard3 from './Cards/Workcard3';
import Workcard4 from './Cards/Workcard4';
import Workcard5 from './Cards/Workcard5';
import Workcard6 from './Cards/Workcard6';

const Workflow = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const cards = container.querySelectorAll('.work-card');
      const windowHeight = window.innerHeight;

      cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;

        // Check if the card is in the viewport
        if (cardTop < windowHeight && cardBottom > 0) {
          // Current card is in view, set opacity to 1
          card.style.opacity = 1;
          card.style.transform = 'translateY(0)';
        } else {
          // Other cards are out of view, set opacity to 0
          card.style.opacity = 0;
          card.style.transform = 'translateY(20px)'; // Optional: Add a slight offset
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="work-container" ref={containerRef}>
      <h2 className="workflow-heading">Our Sticker Production Workflow</h2>

      <div className="work-stack">
        <div className="work-card">
          <Workcard1 />
        </div>
        <div className="work-card">
          <Workcard2 />
        </div>
        <div className="work-card">
          <Workcard3 />
        </div>
        <div className="work-card">
          <Workcard4 />
        </div>
        <div className="work-card">
          <Workcard5 />
        </div>
        <div className="work-card">
          <Workcard6 />
        </div>
      
      </div>
    </div>
  );
};

export default Workflow;