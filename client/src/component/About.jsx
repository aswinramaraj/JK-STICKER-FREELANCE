import React from "react";
import "./cssfile/about.css";

const About = () => {
  return (
    <div className="about-container" id="about"> 
      <div className="about-banner">
        <h1 className="about-title" >Elevating Creativity with Premium Stickers</h1>
        <p className="about-subtitle">Custom Designs | Superior Quality | Fast Delivery</p>
      </div>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          At <strong>JK Sticker</strong>, we specialize in creating high-quality, custom stickers for businesses, creators, and individuals. 
          Our mission is to transform ideas into vibrant, durable, and eye-catching stickers that leave a lasting impression.
        </p>
      </section>

      {/* <section className="about-section">
        <h2>Our Commitment to Quality</h2>
        <p>
          We believe that every sticker should reflect excellence. That's why we use **premium materials**, **precision cutting techniques**, and **advanced printing technology** to ensure that every product meets the highest industry standards.
        </p>
      </section> */}

      <section className="about-values">
        <h2>Why Choose Us?</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>🖌 Custom Designs</h3>
            <p>Bring your vision to life with fully personalized stickers, from concept to final product.</p>
          </div>
          <div className="about-card">
            <h3>🎨 Vibrant Prints</h3>
            <p>We use **high-resolution printing** to deliver rich colors and sharp details.</p>
          </div>
          <div className="about-card">
            <h3>🛡 Durable Materials</h3>
            <p>Our stickers are waterproof, fade-resistant, and made to last.</p>
          </div>
          {/* <div className="about-card">
            <h3>⚡ Fast Turnaround</h3>
            <p>We ensure quick production and timely delivery to meet your deadlines.</p>
          </div> */}
        </div>
      </section>

      {/* <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          We aim to empower brands and individuals with high-quality stickers that elevate their identity. Whether it’s for marketing, branding, or personal expression, we strive to provide unmatched quality and customer satisfaction.
        </p>
      </section> */}
    </div>
  );
};

export default About;
