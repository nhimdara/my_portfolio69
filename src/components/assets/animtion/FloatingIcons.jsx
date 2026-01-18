import React, { useState, useEffect } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaBootstrap,
  FaNpm,
  FaDocker,
  FaGithub,
  FaAndroid,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiNextdotjs,
  SiVite,
  SiFlutter,
} from "react-icons/si";

const FloatingIcons = ({ mode = "background" }) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const techIcons = [
    { icon: <FaReact />, color: "text-cyan-400" },
    { icon: <FaHtml5 />, color: "text-orange-600" },
    { icon: <FaCss3Alt />, color: "text-blue-500" },
    { icon: <FaJs />, color: "text-yellow-400" },
    { icon: <SiTailwindcss />, color: "text-cyan-400" },
    { icon: <FaBootstrap />, color: "text-purple-600" },
    { icon: <SiTypescript />, color: "text-blue-600" },
    { icon: <FaNodeJs />, color: "text-green-600" },
    { icon: <SiMongodb />, color: "text-green-500" },
    { icon: <SiExpress />, color: "text-gray-400" },
    { icon: <SiRedux />, color: "text-purple-500" },
    { icon: <SiNextdotjs />, color: "text-white" },
    { icon: <FaGitAlt />, color: "text-orange-500" },
    { icon: <FaFigma />, color: "text-pink-500" },
    { icon: <SiVite />, color: "text-purple-400" },
    { icon: <FaNpm />, color: "text-red-600" },
    { icon: <FaDocker />, color: "text-blue-400" },
    { icon: <FaGithub />, color: "text-gray-300" },
    { icon: <SiFlutter />, color: "text-blue-300" },
    { icon: <FaAndroid />, color: "text-green-400" },
  ];

  // Generate more icons for full coverage
  const generateIcons = () => {
    const icons = [];
    const count = isMobile ? 40 : 80; // More icons on desktop
    
    for (let i = 0; i < count; i++) {
      const tech = techIcons[i % techIcons.length];
      icons.push({
        ...tech,
        id: i,
        size: Math.random() * 4 + 2, // Random size between 2rem and 6rem
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: `${Math.random() * 10}s`,
        duration: `${Math.random() * 15 + 10}s`,
        orbit: Math.random() > 0.5,
      });
    }
    return icons;
  };

  const [icons, setIcons] = useState([]);
  
  useEffect(() => {
    setIcons(generateIcons());
  }, [isMobile]);

  return (
    <div className={`fixed inset-0 w-full h-full overflow-hidden ${
      mode === "background" ? "-z-10" : "z-0"
    }`}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent" />
      
      {/* Animated icons */}
      {icons.map((tech) => (
        <div
          key={tech.id}
          className="absolute"
          style={{
            left: `${tech.x}%`,
            top: `${tech.y}%`,
            fontSize: `${tech.size}rem`,
            animation: tech.orbit 
              ? `orbit ${tech.duration} linear infinite ${tech.delay}`
              : `float ${tech.duration} ease-in-out infinite ${tech.delay}`,
          }}
        >
          <div
            className={`${tech.color} transition-all duration-700 hover:scale-150 hover:opacity-100 hover:rotate-45 cursor-pointer`}
            style={{
              opacity: 0.1 + Math.random() * 0.15,
              filter: "drop-shadow(0 0 4px currentColor)",
            }}
          >
            {tech.icon}
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(2vw, -3vh) rotate(90deg);
          }
          50% {
            transform: translate(-1.5vw, 2vh) rotate(180deg);
          }
          75% {
            transform: translate(3vw, 1vh) rotate(270deg);
          }
        }

        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(20vw) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(20vw) rotate(-360deg);
          }
        }

        @keyframes subtle-pulse {
          0%, 100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.3;
          }
        }

        /* Responsive animations */
        @media (max-width: 768px) {
          @keyframes float {
            0%, 100% {
              transform: translate(0, 0) rotate(0deg);
            }
            25% {
              transform: translate(5vw, -6vh) rotate(90deg);
            }
            50% {
              transform: translate(-3vw, 4vh) rotate(180deg);
            }
            75% {
              transform: translate(6vw, 2vh) rotate(270deg);
            }
          }

          @keyframes orbit {
            0% {
              transform: rotate(0deg) translateX(40vw) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(40vw) rotate(-360deg);
            }
          }
        }

        /* Parallax effect on scroll */
        .parallax {
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default FloatingIcons;