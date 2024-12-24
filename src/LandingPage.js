import React from 'react';
import './styles/LandingPage.css'; // Add the styles here

const LandingPage = () => {
  return (
    <div>
      {/* First Image Section with Quote */}
      <div className="image-container">
        <div className="overlay"></div>
        <img 
          src="https://wallpapers.com/images/hd/choosing-career-opportunities-9khwzvy7e7rmx0yo.jpg" 
          alt="Background Image" 
        />
        <div className="quote-text">"Your career is a reflection of your choices"</div>
      </div>

      {/* Second Section with Left Image and Right Text */}
      <div className="container">
        <div className="left-side">
          <img 
            src="https://canadacareercounselling.com/wp-content/uploads/2024/03/professional-0a.jpg" 
            alt="Career Counseling"
            className="image"
          />
        </div>
        <div className="right-side">
          <h1>Confused, unhappy, or uncertain about your career? Need some support?</h1>
          <p>We are committed to helping you navigate the path to a successful career. We provide resources and tools to guide you through every step of your professional journey. Whether you are just starting out, considering a career change, or looking to advance in your current field, we offer tailored strategies and insightful guidance.</p>
        </div>
      </div>

      <div className="sky-blue-container">
        <div className="left-side2">
          <video width="40%" height="auto" controls>
            <source src="public/Career-Counselling.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="right-side2">
          <h2>Why Should You Trust Our Career Counselling?</h2>
          <ul>
            <li>Experienced and qualified counselors.</li>
            <li>Personalized career advice.</li>
            <li>Up-to-date industry insights.</li>
            <li>Ongoing support for decisions.</li>
            <li>Proven success in career guidance.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
