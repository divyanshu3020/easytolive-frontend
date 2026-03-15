import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <video
        className="w-full max-w-3xl rounded-lg shadow-lg"
        controls
        autoPlay
        muted
        loop
      >
        <source src="src/assets/bgvid.mp4" type="video/mp4" />
        
      </video>
    </div>
  );
};

export default VideoPlayer;
