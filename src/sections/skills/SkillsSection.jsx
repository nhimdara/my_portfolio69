import React from "react";
import { Code2, Server, Wrench, TrendingUp } from "lucide-react";
import { skills } from "./skillsData";
import FloatingIcons from "../../components/ui/FloatingIcons";
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

const SkillsSection = () => {
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

  // Deterministic pseudo-random walk so each skill's sparkline is stable across renders
  // but still looks organic, trending up toward its final percent value.
  const buildSparkline = (seed, targetPercent) => {
    const points = 10;
    let value = 20 + (seed % 15);
    const target = targetPercent;
    const series = [value];
    for (let i = 1; i < points; i++) {
      const pseudo = Math.sin(seed * 12.9898 + i * 78.233) * 43758.5453;
      const noise = (pseudo - Math.floor(pseudo)) * 18 - 9;
      const pull = (target - value) * 0.18;
      value = Math.max(8, Math.min(96, value + pull + noise));
      series.push(value);
    }
    series[points - 1] = target;
    return series;
  };

  const sparklinePath = (series, width = 100, height = 28) => {
    const max = 100;
    const step = width / (series.length - 1);
    return series
      .map(
        (v, i) =>
          `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)},${(height - (v / max) * height).toFixed(1)}`,
      )
      .join(" ");
  };

  const skillGroups = [
    {
      title: "Frontend Development",
      description:
        "Responsive, accessible interfaces and modern component-based applications.",
      icon: Code2,
      accent: "cyan",
      ticker: "FE",
      skills: skills.filter((skill) =>
        [
          "HTML",
          "CSS",
          "Bootstrap",
          "JavaScript",
          "TypeScript",
          "React.js",
          "Tailwind CSS",
          "Vue.js",
        ].includes(skill.title),
      ),
    },
    {
      title: "Backend Development",
      description:
        "Server-side applications, databases, and maintainable business logic.",
      icon: Server,
      accent: "purple",
      ticker: "BE",
      skills: skills.filter((skill) =>
        [
          "PHP",
          "Laravel",
          "MySQL",
          "Node.js",
          "Express.js",
          "MongoDB",
        ].includes(skill.title),
      ),
    },
    {
      title: "Development Tools",
      description:
        "Design, version control, build, and local development tools.",
      icon: Wrench,
      accent: "emerald",
      ticker: "DT",
      skills: skills.filter((skill) =>
        ["Git", "GitHub", "Figma", "Vite", "npm", "XAMPP"].includes(
          skill.title,
        ),
      ),
    },
  ];

  const accentClasses = {
    cyan: {
      text: "text-cyan-300",
      stroke: "stroke-cyan-400",
      fill: "fill-cyan-400",
      badgeBg: "bg-cyan-400/10",
      badgeBorder: "border-cyan-400/25",
      ring: "hover:border-cyan-400/30",
    },
    purple: {
      text: "text-purple-300",
      stroke: "stroke-purple-400",
      fill: "fill-purple-400",
      badgeBg: "bg-purple-400/10",
      badgeBorder: "border-purple-400/25",
      ring: "hover:border-purple-400/30",
    },
    emerald: {
      text: "text-emerald-300",
      stroke: "stroke-emerald-400",
      fill: "fill-emerald-400",
      badgeBg: "bg-emerald-400/10",
      badgeBorder: "border-emerald-400/25",
      ring: "hover:border-emerald-400/30",
    },
  };

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
            <div className="skill-edge-fade skill-edge-fade-left absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-gray-950 to-transparent pointer-events-none"></div>
            <div className="skill-edge-fade skill-edge-fade-right absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-gray-950 to-transparent pointer-events-none"></div>

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

      {/* Skills Section — redesigned as a trading-terminal watchlist */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-10 md:py-16">
        <section className="scroll-reveal">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              My{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="mx-auto max-w-2xl leading-relaxed text-gray-400">
              A practical toolkit for designing, developing, and delivering
              complete web applications.
            </p>
          </div>

          <div className="grid items-start gap-6 lg:grid-cols-3">
            {skillGroups.map((group) => {
              const GroupIcon = group.icon;
              const a = accentClasses[group.accent];
              const avg = Math.round(
                group.skills.reduce((sum, s) => sum + parseInt(s.percent), 0) /
                  group.skills.length,
              );

              return (
                <article
                  key={group.title}
                  className={`skill-card overflow-hidden rounded-lg border border-gray-800 bg-[#0b0f14] shadow-2xl transition-colors duration-300 ${a.ring}`}
                >
                  {/* Ticker header */}
                  <div className="skill-card-header flex items-center gap-3 border-b border-gray-800 bg-[#111720] px-5 py-4">
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded border ${a.badgeBorder} ${a.badgeBg} font-mono text-xs font-bold ${a.text}`}
                    >
                      {group.ticker}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-semibold text-white">
                        {group.title}
                      </h3>
                      <p className="mt-0.5 truncate text-[11px] text-gray-500">
                        {group.description}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-1 font-mono">
                      <TrendingUp size={13} className={a.text} />
                      <span
                        className={`text-sm font-bold tabular-nums ${a.text}`}
                      >
                        {avg}%
                      </span>
                    </div>
                  </div>

                  {/* Watchlist rows */}
                  <div className="divide-y divide-gray-800/70">
                    {group.skills.map((skill, i) => {
                      const value = parseInt(skill.percent);
                      const series = buildSparkline(i * 7 + value, value);
                      const path = sparklinePath(series);
                      return (
                        <div
                          key={skill.id}
                          className="flex items-center gap-3 px-5 py-2.5 transition-colors duration-150 hover:bg-white/[0.03]"
                        >
                          <span className="skill-row-icon grid h-7 w-7 shrink-0 place-items-center rounded bg-gray-950/70">
                            {skill.image ? (
                              <img
                                src={skill.image}
                                alt=""
                                className="h-4 w-4 object-contain"
                              />
                            ) : (
                              <span
                                className={`text-sm ${skill.color}`}
                                aria-hidden="true"
                              >
                                {skill.icon}
                              </span>
                            )}
                          </span>

                          <div className="min-w-0 flex-1">
                            <p className="truncate text-[13px] font-medium text-gray-200">
                              {skill.title}
                            </p>
                            <p className="text-[10px] uppercase tracking-wide text-gray-600">
                              {getSkillLevel(skill.percent)}
                            </p>
                          </div>

                          <svg
                            viewBox="0 0 100 28"
                            className="h-6 w-16 shrink-0"
                            preserveAspectRatio="none"
                          >
                            <path
                              d={path}
                              fill="none"
                              className={a.stroke}
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle
                              cx="100"
                              cy={(28 - (value / 100) * 28).toFixed(1)}
                              r="2"
                              className={a.fill}
                            />
                          </svg>

                          <span
                            className={`w-9 shrink-0 text-right font-mono text-xs font-bold tabular-nums ${a.text}`}
                          >
                            {skill.percent}
                          </span>
                        </div>
                      );
                    })}
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

export default SkillsSection;
