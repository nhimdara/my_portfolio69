import React from "react";
import { Skills } from "./skills";
import FloatingIcons from "../assets/animtion/FloatingIcons";
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
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiNextdotjs,
  SiVite,
} from "react-icons/si";

const Skill = () => {
  const techStack = [
    { icon: <FaReact />, name: "React", color: "text-cyan-400" },
    { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-600" },
    { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-500" },
    { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-400" },
    { icon: <FaBootstrap />, name: "Bootstrap", color: "text-purple-600" },
    { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-600" },
    { icon: <FaNodeJs />, name: "Node.js", color: "text-green-600" },
    { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500" },
    { icon: <SiExpress />, name: "Express.js", color: "text-gray-400" },
    { icon: <SiRedux />, name: "Redux", color: "text-purple-500" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "text-white" },
    { icon: <FaGitAlt />, name: "Git", color: "text-orange-500" },
    { icon: <FaFigma />, name: "Figma", color: "text-pink-500" },
    { icon: <SiVite />, name: "Vite", color: "text-purple-400" },
    { icon: <FaNpm />, name: "NPM", color: "text-red-600" },
  ];

  const getSkillLevel = (percent) => {
    const num = parseInt(percent);
    if (num >= 90) return "Expert";
    if (num >= 75) return "Advanced";
    if (num >= 60) return "Intermediate";
    return "Beginner";
  };

  return (
    <div className="bg-gray-900 min-h-screen pt-10">
      {/* Floating Background Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingIcons />
      </div>

      <div className="relative">
        <section className="mb-5 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stack</span>
          </h2>
          
          {/* Animated Tech Stack Slider */}
          <div className="relative overflow-hidden py-8">
            {/* Top Row - Scroll Left */}
            <div className="flex overflow-hidden mb-8">
              <div className="flex animate-scroll-left whitespace-nowrap">
                {[...techStack, ...techStack].map((tech, idx) => (
                  <div
                    key={`left-${idx}`}
                    className="flex flex-col items-center mx-6 md:mx-10 group"
                  >
                    <div className={`text-5xl md:text-7xl ${tech.color} transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]`}>
                      {tech.icon}
                    </div>
                    <span className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row - Scroll Right */}
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll-right whitespace-nowrap">
                {[...techStack, ...techStack].map((tech, idx) => (
                  <div
                    key={`right-${idx}`}
                    className="flex flex-col items-center mx-6 md:mx-10 group"
                  >
                    <div className={`text-5xl md:text-7xl ${tech.color} transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]`}>
                      {tech.icon}
                    </div>
                    <span className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Technology Stack Section */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 py-5">
        {/* Skills Section */}
        <section className="scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Skills.map((skill) => (
              <div
                key={skill.id}
                className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 p-6 rounded-3xl hover:border-cyan-400/50 transition-all duration-300 group hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <img
                      src={skill.image}
                      alt={skill.title}
                      className="h-16 w-16 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white text-center mb-4 group-hover:text-cyan-300 transition-colors">
                  {skill.title}
                </h3>

                {/* Skill Progress Bar */}
                <div className="mb-2">
                  <div className="w-full bg-gray-700/50 h-3 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                      style={{ width: skill.percent }}
                    />
                  </div>
                </div>
                
                {/* Skill Info */}
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {getSkillLevel(skill.percent)}
                  </span>
                  <span className="text-cyan-400 font-bold group-hover:text-white transition-colors">
                    {skill.percent}
                  </span>
                </div>
                
                {/* Hidden description on hover */}
                {skill.description && (
                  <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {skill.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills Summary Section */}
        <section className="mt-20">
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 border border-gray-700 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Skill <span className="text-cyan-400">Summary</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-800/30 rounded-2xl">
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {Skills.filter(s => parseInt(s.percent) >= 80).length}+
                </div>
                <p className="text-gray-300">Advanced Skills</p>
              </div>
              <div className="text-center p-6 bg-gray-800/30 rounded-2xl">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  {techStack.length}
                </div>
                <p className="text-gray-300">Technologies</p>
              </div>
              <div className="text-center p-6 bg-gray-800/30 rounded-2xl">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  {Skills.length}
                </div>
                <p className="text-gray-300">Total Skills</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Skill;