// AboutSection.js
import React from 'react';
import '../styles/AboutSection.css';
import Image1 from '../assests/1.png'; // Corrected import path
import '../styles/AboutSection.css'; // Updated import path

const AboutSection = () => {
  return (
    <div className="about-section">
      <img src={Image1} alt="Image 1" className='intro-image' />
      <div className="text-content">
        <h2>About the Video Player</h2>
        <p>
        Our advanced video player elevates your viewing experience to new heights, ensuring a seamless and interactive journey through your favorite content. With innovative gesture-based controls at your fingertips, you wield the power to navigate videos effortlessly, transforming your streaming sessions into immersive adventures.
        </p>
        <p>
        Delight in the ability to skip forward with a quick double-tap or fine-tune the playback speed on the fly – our video player empowers you with unprecedented control. Designed with a user-friendly interface, it seamlessly blends intuitive navigation with robust functionality, creating an environment where ease of use meets cutting-edge features.
        </p>
        <p>
        Explore a world of possibilities as you engage with our video player, where every interaction is crafted to enhance your enjoyment. From intuitive shortcuts to dynamic adjustments, our player is your gateway to a personalized and enjoyable viewing experience. Immerse yourself in content like never before, and let our video player redefine the way you engage with your favorite videos.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
