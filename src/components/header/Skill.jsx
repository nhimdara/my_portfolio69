import React from "react";
import { Code2, Server, Wrench } from "lucide-react";
import { Skills } from "./Skills";
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
  FaPhp,
  FaVuejs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiNextdotjs,
  SiVite,
  SiLaravel,
  SiMysql,
  SiXampp,
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
    { icon: <FaVuejs />, name: "Vue.js", color: "text-emerald-400" },
    { icon: <SiLaravel />, name: "Laravel", color: "text-red-500" },
    { icon: <FaPhp />, name: "PHP", color: "text-indigo-400" },
    { icon: <SiMysql />, name: "MySQL", color: "text-blue-400" },
    { icon: <SiXampp />, name: "XAMPP", color: "text-orange-500" },
  ];

  const getSkillLevel = (percent) => {
    const num = parseInt(percent);
    if (num >= 90) return "Expert";
    if (num >= 75) return "Advanced";
    if (num >= 60) return "Intermediate";
    return "Beginner";
  };

  const skillGroups = [
    {
      title: "Frontend Development",
      description: "Responsive, accessible interfaces and modern component-based applications.",
      icon: Code2,
      accent: "cyan",
      className: "lg:col-span-2 lg:row-span-2",
      skills: Skills.filter((skill) =>
        ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js", "Tailwind CSS", "Vue.js"].includes(skill.title),
      ),
    },
    {
      title: "Backend Development",
      description: "Server-side applications, databases, and maintainable business logic.",
      icon: Server,
      accent: "purple",
      className: "lg:col-span-1",
      skills: Skills.filter((skill) => ["PHP", "Laravel", "MySQL"].includes(skill.title)),
    },
    {
      title: "Development Tools",
      description: "Tools used to build, manage, and run development environments.",
      icon: Wrench,
      accent: "emerald",
      className: "lg:col-span-1",
      skills: Skills.filter((skill) => ["GitHub", "XAMPP"].includes(skill.title)),
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-950 pt-16 md:pt-20">
      {/* Floating Background Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingIcons />
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2.5s" }}
        ></div>
      </div>

      <div className="relative">
        <section className="mb-5 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Technology{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient-shift">
              Stack
            </span>
          </h2>

          {/* Animated Tech Stack Slider */}
          <div className="relative overflow-hidden py-8">
            {/* Edge fade masks */}
            <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-gray-950 to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-gray-950 to-transparent pointer-events-none"></div>

            {/* Top Row - Scroll Left */}
            <div className="flex overflow-hidden mb-8">
              <div className="flex animate-scroll-left whitespace-nowrap">
                {[...techStack, ...techStack].map((tech, idx) => (
                  <div
                    key={`left-${idx}`}
                    className="flex flex-col items-center mx-6 md:mx-10 group"
                  >
                    <div
                      className={`text-5xl md:text-7xl ${tech.color} transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]`}
                    >
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
                    <div
                      className={`text-5xl md:text-7xl ${tech.color} transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]`}
                    >
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

      {/* Skills Section */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-10 md:py-12">
        <section className="scroll-reveal">
          <div className="mb-12 text-center">

            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              My{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="mx-auto max-w-2xl leading-relaxed text-gray-400">
              A practical toolkit for designing, developing, and delivering complete web applications.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {skillGroups.map((group) => {
              const GroupIcon = group.icon;
              const accentClasses = {
                cyan: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
                purple: "border-purple-400/20 bg-purple-400/10 text-purple-300",
                emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
              };

              return (
                <article
                  key={group.title}
                  className={`rounded-2xl border border-gray-700/80 bg-gray-900/75 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-gray-600 ${group.className}`}
                >
                  <div className="mb-6 flex items-start gap-4 border-b border-gray-700/70 pb-5">
                    <span className={`rounded-xl border p-3 ${accentClasses[group.accent]}`}>
                      <GroupIcon size={23} />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{group.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-400">{group.description}</p>
                    </div>
                  </div>

                  <div className={`grid gap-3 ${group.skills.length > 3 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
                    {group.skills.map((skill) => (
                      <div
                        key={skill.id}
                        className="group/skill rounded-xl border border-white/5 bg-white/[0.035] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/25 hover:bg-white/[0.06]"
                      >
                        <div className="mb-3 flex items-center gap-3">
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gray-950/80">
                            {skill.image ? (
                              <img src={skill.image} alt="" className="h-7 w-7 object-contain" />
                            ) : (
                              <span className={`text-2xl ${skill.color}`} aria-hidden="true">{skill.icon}</span>
                            )}
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <h4 className="truncate font-semibold text-gray-100">{skill.title}</h4>
                              <span className="text-xs font-semibold text-cyan-400">{skill.percent}</span>
                            </div>
                            <p className="text-xs text-gray-500">{getSkillLevel(skill.percent)}</p>
                          </div>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-gray-800">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-700"
                            style={{ width: skill.percent }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
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
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.1);
          }
        }
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes count-pop {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
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
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-gradient-shift {
          background-size: 200% auto;
          animation: gradient-shift 4s ease-in-out infinite;
        }
        .animate-count-pop {
          animation: count-pop 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Skill;
