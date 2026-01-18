import React from "react";
import { GraduationCap, Code } from "lucide-react";

const Experience1 = () => {
  const education = [
    {
      year: "2024 - Present",
      degree: "Bachelor of IT Engineering",
      institution: "Royal University of Phnom Penh (RUPP)",
      description: "Specializing in software engineering and web technologies",
    },
    {
      year: "2025",
      degree: "Frontend Development Studying",
      institution: "ETEC Center",
      description: "Completed intensive React.js and modern web development course",
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
      role: "DataEntry",
      company: "MoEYS Edtech (Volunteer)",
      description:
        "Managed high-volume, confidential data entry and systematic record-keeping using Excel and various databases to ensure accuracy and efficient workflow.",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen scroll-gradient">
      <section className="relative py-16 px-4">
        {/* Background Elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10 scroll-reveal">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-cyan-400" />
                Education
              </h2>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    <div className="border-l-2 border-gray-700 pl-8">
                      <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/30 transition-all">
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
                <Code className="w-8 h-8 text-cyan-400" />
                Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"></div>
                    <div className="border-l-2 border-gray-700 pl-8">
                      <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/30 transition-all">
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

            <blockquote className="relative z-10 scroll-reveal">
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