import { useState, useEffect } from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Fiberflow";
  const typingSpeed = 150; // milliseconds
  const resetDelay = 3000; // 3 seconds

  useEffect(() => {
    let currentIndex = 0;
    let typeInterval;

    const startTyping = () => {
      typeInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setTypedText(fullText.slice(0, currentIndex + 1)); // Update text up to the current index
          currentIndex++;
        } else {
          clearInterval(typeInterval); // Stop typing
          setTimeout(() => {
            setTypedText(""); // Clear text after reset delay
            currentIndex = 0; // Reset index
            startTyping(); // Restart typing effect
          }, resetDelay);
        }
      }, typingSpeed);
    };

    startTyping(); // Start typing effect

    return () => clearInterval(typeInterval); // Cleanup interval on unmount
  }, []); // Empty dependency array to run only once

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Faster & Reliable Quality Internet Provider
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          {typedText}
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Empower your digital life with our high-speed internet.
      Connect, stream, work, and play seamlessly — experience the speed you deserve today!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Explore Package
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
