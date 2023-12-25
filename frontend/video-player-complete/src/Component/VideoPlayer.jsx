import React, { useRef, useEffect, useState } from "react";

const VideoPlayer = ({ videoId }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    let clickCount = 0;
    let lastClickTime = 0;
    let rewindTimer = null;
    let fastForwardTimer = null;

    const handleClick = (event) => {
      const currentTime = video.currentTime;
      const currentClickTime = Date.now();

      const timeSinceLastClick = currentClickTime - lastClickTime;

      if (timeSinceLastClick < 300) {
        clickCount++;

        if (clickCount === 1) {
          if (event.clientX < window.innerWidth / 2) {
            video.currentTime -= 10;
          }
        } else if (clickCount === 2) {
          if (event.clientX > window.innerWidth / 2) {
            video.currentTime += 10;
          } else {
            if (isPlaying) {
              video.pause();
              setIsPlaying(false);
            } else {
              video.play();
              setIsPlaying(true);
            }
          }

          clickCount = 0;
        }
      } else {
        // Reset click count and time for

        clickCount = 1;
      }

      lastClickTime = currentClickTime;

      event.preventDefault();
    };

    const handleMouseDown = (event) => {
      if (event.clientX < window.innerWidth / 2) {
        rewindTimer = setInterval(() => {
          video.currentTime -= 2;
        }, 1000);
      } else {
        fastForwardTimer = setInterval(() => {
          video.currentTime += 2;
        }, 1000);
      }
    };

    const handleMouseUp = () => {
      clearInterval(rewindTimer);
      clearInterval(fastForwardTimer);
    };

    video.addEventListener("click", handleClick);
    video.addEventListener("mousedown", handleMouseDown);
    video.addEventListener("mouseup", handleMouseUp);

    return () => {
      video.removeEventListener("click", handleClick);
      video.removeEventListener("mousedown", handleMouseDown);
      video.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isPlaying]);

  return (
    <video ref={videoRef} width="700" height="315" controls autoPlay>
      <source
        src={`http://localhost:3000/videos/${videoId}`}
        type="video/mp4"
      ></source>
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
