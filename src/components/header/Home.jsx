import React from "react";
import myPic from "../assets/image/myPicture.jpg";
import TextType from "../assets/animtion/TextType";
import { Share2, ArrowDown } from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import FloatingIcons from "../assets/animtion/FloatingIcons";

const Home = () => {
  const handleDownloadCV = () => {
    const cvUrl = "cv/CV Nhim Dara.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV-Nhim-Dara.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

        {/* Ambient glow blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "3s" }}></div>
        </div>

        {/* Hero Section */}
        <section
          id="home"
          className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-12 lg:py-24"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="text-white w-full lg:w-1/2 space-y-4 md:space-y-6 scroll-reveal">
              <h1 className="text-lg sm:text-xl md:text-2xl font-medium animate-fade-in-down opacity-0" style={{ animationDelay: "0.1s" }}>
                Hello, It's Me
              </h1>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up opacity-0 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent" style={{ animationDelay: "0.25s" }}>
                Nhim Dara
              </h2>

              <div className="text-lg sm:text-2xl md:text-3xl font-bold animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
                And I'm a{" "}
                <span className="text-cyan-400 inline-block ml-1 relative">
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

              <p className="text-gray-300 leading-relaxed max-w-xl text-sm sm:text-base md:text-lg animate-fade-in-up opacity-0" style={{ animationDelay: "0.55s" }}>
                A frontend developer trained at ETAC Center, gaining hands-on
                experience in modern web technologies. I build scalable
                interfaces and turn design concepts into functional, accessible
                web applications.
              </p>

              {/* Social Links */}
              <div
                className="flex gap-3 md:gap-4 pt-2 animate-fade-in-up opacity-0"
                style={{ animationDelay: "0.7s" }}
              >
                {[
                  { icon: <FaFacebook />, url: "https://facebook.com/dara.nhim.865637" },
                  { icon: <FaTelegramPlane />, url: "https://t.me/dara_nhim" },
                  { icon: <FaInstagram />, url: "https://instagram.com/ra_zee109" },
                  { icon: <FaTwitter />, url: "https://x.com/william57378" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    // rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 group cursor-pointer"
                  >
                    <span className="text-cyan-400 group-hover:text-gray-900 text-base sm:text-lg md:text-xl transition-colors">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 pt-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.85s" }}>
                <button
                  onClick={handleLetstalk}
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white font-bold rounded-full border-2 border-white/20 hover:border-cyan-400/60 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/50 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base cursor-pointer overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                  <span className="relative z-10">Let's Talk</span>
                  <Share2
                    size={18}
                    className="relative z-10 sm:w-5 sm:h-5 group-hover:rotate-12 group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <button
                  onClick={handleDownloadCV}
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold rounded-full border-2 border-transparent transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/50 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base cursor-pointer"
                >
                  <span>Download CV</span>
                  <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
              <div className="relative group animate-fade-in-scale opacity-0" style={{ animationDelay: "0.3s" }}>
                {/* Rotating gradient ring */}
                <div className="absolute -inset-2 rounded-[2.2rem] bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 opacity-50 blur-xl animate-spin-slow group-hover:opacity-80 transition-opacity"></div>

                <img
                  src={myPic}
                  alt="Nhim Dara Profile"
                  className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] md:w-[380px] md:h-[480px] lg:w-[450px] lg:h-[550px] object-cover rounded-[2rem] shadow-2xl shadow-cyan-400/60 border-4 border-cyan-400/40 hover:shadow-cyan-400/80 hover:scale-105 transition-all duration-500"
                />

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 rounded-full font-semibold shadow-lg text-white text-sm md:text-base animate-float-badge">
                  🚀 Available for hire
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="hidden lg:flex justify-center mt-16 animate-bounce-slow opacity-60">
            <div className="flex flex-col items-center gap-2 text-gray-400 text-sm">
              <span>Scroll Down</span>
              <ArrowDown size={20} className="text-cyan-400" />
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float-badge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 1s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-float-badge {
          animation: float-badge 3s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;