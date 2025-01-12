import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <div className="hero-section">
        <video
          className="hero-video"
          src="/images/Penang_Hill_clouds.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-content">
          <h1>Welcome to Penang</h1>
          <p>Explore the best tourist spots, food, and hotels in Penang!</p>
          <button>Explore Now</button>
        </div>
      </div>

      <div className="category-cards">
        <div className="category-card">
          <h2>Tourist Spots</h2>
          <img src="/images/tourist-spot1.jpg" alt="Tourist Spot" />
          <p>Discover beautiful tourist spots in Penang</p>
          <a href="/tourist-spots">Learn More</a>
        </div>

        <div className="category-card">
          <h2>Food & Beverages</h2>
          <img src="/images/food-1.jpg" alt="Food & Beverages" />
          <p>Enjoy delicious food and drinks</p>
          <a href="/food-beverages">Learn More</a>
        </div>

        <div className="category-card">
          <h2>Hotels</h2>
          <img src="/images/hotel-1.jpg" alt="Hotels" />
          <p>Stay in the best hotels in Penang</p>
          <a href="/hotels">Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
