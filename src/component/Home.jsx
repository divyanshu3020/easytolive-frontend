import React from "react";
import Navbar from "./subcomponents/Navbar";
import SignUpForm from "./subcomponents/SignUpForm";

function Home() {
  // const videoRef = useRef(null);

  //handler function to unmute the vid sound , it will only unmute when user first interact with the webpage (like click)
  // const handleUnmute = () => {
  //   if (videoRef.current) {
  //     videoRef.current.muted = false;
  //     videoRef.current.play();
  //   }
  // };

  return (
    <div
      // onClick={handleUnmute}
      className="relative min-h-screen overflow-hidden">
      {/*  Background Video */}
      <video
        // ref={videoRef}
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="src/assets/bgvid.mp4" type="video/mp4" />
      </video>

      {/* dark mask to reduce brightness of the vid */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Entire content on top of the vid using z-index */}
      <div className="relative z-20 flex flex-col min-h-screen">
        
        {/* Navbar */}
        <Navbar />

        {/* hero section (wdout navbar)*/}
        <div className="flex flex-1 flex-col items-center justify-center text-white ">
          <div className="w-[1010px] min-w-[850px]">
            <h1 className="bg-gradient-to-r from-yellow-400 via-gray-300 to-yellow-500 bg-clip-text text-transparent font-serif font-black text-5xl text-center -mb-[30px]">
              Live where elegance feels like home — only at EasyToLiveHomes.com
            </h1>
          </div>

          {/* SignUp form */}
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default Home;
