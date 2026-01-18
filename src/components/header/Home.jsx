import React from "react";
import myPic from "../assets/image/myPicture.jpg";
import TextType from "../assets/animtion/TextType";
import { Share2 } from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import FloatingIcons from "../assets/animtion/FloatingIcons";

// Component
const Home = () => {
  // Download CV function
  const handleDownloadCV = () => {
    // Try the root public folder first
    const cvUrl = "cv/CV Nhim Dara.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV-Nhim-Dara.pdf";
    link.target = "_blank"; // Opens in new tab as fallback
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // const handleDownloadCV = () => {
  //   window.open("YOUR_GOOGLE_DRIVE_LINK_HERE", "_blank");
  // };

  const handleLetstalk = () => {
    window.open("https://t.me/dara_nhim", "_blank");
  };

  return (
    <div className="bg-gray-900 min-h-screen scroll-gradient">
      <div className="relative overflow-hidden">
        {/* Floating Animated Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <FloatingIcons />
        </div>

        {/* Hero Section */}
        <section
          id="home"
          className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-12 lg:py-24"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 max-w-7xl mx-auto ">
            {/* Left Content */}
            <div className="text-white w-full lg:w-1/2 space-y-4 md:space-y-6 scroll-reveal">
              <h1 className="text-lg sm:text-xl md:text-2xl font-medium">
                Hello, It's Me
              </h1>
              <h2 className=" text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Nhim Dara
              </h2>

              <div className="text-lg sm:text-2xl md:text-3xl font-bold">
                And I'm a{" "}
                <span className="text-cyan-400 inline-block ml-1">
                  <TextType
                    text={[
                      "Frontend Developer",
                      "React Specialist",
                      "UI Designer",
                    ]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                  />
                </span>
              </div>

              <p className="text-gray-300 leading-relaxed max-w-xl text-sm sm:text-base md:text-lg">
                A frontend developer trained at ETAC Center, gaining hands-on
                experience in modern web technologies. I build scalable
                interfaces and turn design concepts into functional, accessible
                web applications.
              </p>

              {/* Social Links */}
              <div
                className="flex gap-3 md:gap-4 pt-2 scroll-reveal"
                style={{ transitionDelay: "100ms" }}
              >
                <a
                  href="https://facebook.com/dara.nhim.865637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center hover:bg-cyan-400 transition-all duration-300 group cursor-pointer"
                >
                  <FaFacebook className="text-cyan-400 group-hover:text-gray-900 text-base sm:text-lg md:text-xl" />
                </a>
                <a
                  href="https://t.me/dara_nhim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center hover:bg-cyan-400 transition-all duration-300 group cursor-pointer"
                >
                  <FaTelegramPlane className="text-cyan-400 group-hover:text-gray-900 text-base sm:text-lg md:text-xl" />
                </a>
                <a
                  href="https://instagram.com/ra_zee109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center hover:bg-cyan-400 transition-all duration-300 group cursor-pointer"
                >
                  <FaInstagram className="text-cyan-400 group-hover:text-gray-900 text-base sm:text-lg md:text-xl" />
                </a>
                <a
                  href="https://x.com/william57378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center hover:bg-cyan-400 transition-all duration-300 group cursor-pointer"
                >
                  <FaTwitter className="text-cyan-400 group-hover:text-gray-900 text-base sm:text-lg md:text-xl" />
                </a>
              </div>

              {/* Action Buttons - Fixed structure */}
              <div className="flex flex-col lg:flex-row justify-between items-center gap-12 max-w-7xl mx-auto">
                <div
                  className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4  pt-4 scroll-reveal"
                  style={{ transitionDelay: "200ms" }}
                >
                  <button
                    onClick={handleLetstalk}
                    className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white font-bold rounded-full border-2 border-white/20 hover:border-cyan-400/50 transition-all duration-300 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base cursor-pointer"
                  >
                    <span>Let's Talk</span>
                    <Share2
                      size={18}
                      className="sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform"
                    />
                  </button>

                  <button
                    onClick={handleDownloadCV}
                    className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white font-bold rounded-full border-2 border-white/20 hover:border-cyan-400/50 transition-all duration-300 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base cursor-pointer"
                  >
                    <span>Download CV</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
              <div className="relative group scroll-scale">
                <img
                  src={myPic}
                  alt="Nhim Dara Profile"
                  className="w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] md:w-[380px] md:h-[480px] lg:w-[450px] lg:h-[550px] object-cover rounded-[2rem] shadow-2xl shadow-cyan-400/60 border-4 border-cyan-400/40 hover:shadow-cyan-400/80 hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
