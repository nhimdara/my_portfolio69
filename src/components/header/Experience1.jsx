import React from "react";
import { BriefcaseBusiness, GraduationCap, Route } from "lucide-react";

const Experience1 = () => {
  const education = [
    {
      year: "2024 - Present",
      degree: "Bachelor of IT Engineering",
      institution: "Royal University of Phnom Penh (RUPP)",
      description: "Specializing in software engineering and web technologies",
    },
    {
      year: "2025 - January 2026",
      degree: "Frontend Development",
      institution: "ETEC Center",
      description:
        "Completed hands-on training in HTML, CSS, Bootstrap, JavaScript, React.js, and frontend project development.",
    },
    {
      year: "January - June 2026",
      degree: "Backend Development",
      institution: "ETEC Center",
      description:
        "Completed practical training in PHP, object-oriented programming, MySQL, Laravel, and backend project development.",
    },
  ];

  const experiences = [
    {
      year: "2025",
      role: "Frontend Developer Trainee",
      company: "ETEC Center",
      description:
        "Developed responsive web applications using React.js, Tailwind CSS, and modern JavaScript frameworks",
    },
    {
      year: "2024 - 2025",
      role: "Data Entry Volunteer",
      company: "MoEYS Edtech (Volunteer)",
      description:
        "Managed high-volume, confidential data entry and systematic record-keeping using Excel and various databases to ensure accuracy and efficient workflow.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 scroll-gradient">
      <section className="relative py-16 px-4">
        {/* Background Elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-6xl scroll-reveal">
          <header className="mb-14 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/[0.07] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
              <Route size={14} /> My journey
            </div>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">Learning &amp; <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Experience</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">The education, training, and practical work shaping me into a capable full-stack developer.</p>
          </header>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-cyan-400" />
                Education
              </h2>
              <div className="space-y-8">
                {education.map((edu) => (
                  <div key={edu.degree} className="relative pl-6 sm:pl-10">
                    <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-[0_0_16px_rgba(34,211,238,.45)] sm:h-6 sm:w-6"></div>
                    <div className="border-l-2 border-gray-700 pl-4 sm:pl-8">
                      <div className="journey-card rounded-xl border border-gray-700 bg-gray-800/50 p-5 transition-all hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-gray-800/70 sm:p-6">
                        <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-semibold mb-2">
                          {edu.year}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-cyan-400 font-medium mb-2">
                          {edu.institution}
                        </p>
                        <p className="text-gray-400">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <BriefcaseBusiness className="w-8 h-8 text-purple-400" />
                Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div key={exp.role} className="relative pl-6 sm:pl-10">
                    <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-[0_0_16px_rgba(168,85,247,.45)] sm:h-6 sm:w-6"></div>
                    <div className="border-l-2 border-gray-700 pl-4 sm:pl-8">
                      <div className="journey-card rounded-xl border border-gray-700 bg-gray-800/50 p-5 transition-all hover:-translate-y-1 hover:border-purple-500/40 hover:bg-gray-800/70 sm:p-6">
                        <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold mb-2">
                          {exp.year}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-cyan-400 font-medium mb-2">
                          {exp.company}
                        </p>
                        <p className="text-gray-400">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto text-center ">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-purple-500/20 rounded-full blur-xl"></div>

            <blockquote className="relative z-10 rounded-3xl border border-white/10 bg-white/[0.035] px-6 py-10 scroll-reveal md:px-12">
              <p className="text-2xl md:text-3xl text-gray-300 italic mb-6">
                "Great web experiences are born from the perfect blend of
                clean code, thoughtful design, and user-centered thinking."
              </p>
              <footer className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                — Nhim Dara
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience1;
