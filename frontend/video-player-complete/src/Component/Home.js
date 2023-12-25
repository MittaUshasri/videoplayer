// Home.js
import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import AboutSection from './AboutSection';
import '../styles/Home.css';
import Image2 from '../assests/2.png';

const Home = () => {
  const [videoId, setVideoId] = useState(null);

  function playVideo(e, videoId) {
    e.preventDefault();
    setVideoId(videoId);
  }

  return (
    <div>
      <div className='title'>
        <h1>Welcome to the Video Player Experience</h1>
        <p>Explore our interactive video player with gesture-based controls!</p>
      </div>

      <AboutSection />

      <div className="intro-section">
        <div className="video-intro">

          <h2>Discover the Features</h2>
          <p>
  Immerse yourself in a truly unique video playback experience, where innovation meets convenience through our state-of-the-art gesture controls. As you navigate the captivating world of video content, our intuitive gestures redefine the way you interact with your favorite media.

  Picture this: a seamless journey through your video library, all at the tips of your fingers. With the simple elegance of a double-tap, effortlessly skip forward or backward, enhancing your control over the playback timeline. Feel the power in the subtlety of a press and hold, allowing you to finely adjust the playback speed to match your desired tempo.

  Our mission is to empower your viewing experience with technology that adapts to you. Imagine a world where your gestures guide the narrative, creating a harmonious synergy between the viewer and the content. It's not just video playback; it's an immersive exploration of storytelling through the lens of your own interactions.

  The intricacy of our gesture controls extends beyond mere convenience; it's a symphony of user-centric design and cutting-edge technology. As you delve into the intricacies of our features, discover the art of personalized engagement with your videos. Every gesture becomes a brushstroke, painting a canvas of dynamic and responsive multimedia interaction.

  Join us on this journey where innovation meets entertainment, and every gesture adds a new layer to your video-watching experience. Whether you're a casual viewer or a dedicated cinephile, our gesture controls redefine the boundaries of what's possible, bringing a new dimension to the way you enjoy video content.

  Welcome to the future of video playback – where the power is in your hands, quite literally.
</p>

        </div>

        <div className="play-video">
          {videoId && <VideoPlayer videoId={videoId} />} <br />
          <button onClick={(e) => { playVideo(e, 'cdn') }}>Play Video 1</button>
          <button onClick={(e) => { playVideo(e, 'generate-pass') }}>Play Video 2</button>
          <button onClick={(e) => { playVideo(e, 'get-post') }}>Play Video 3</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
