import React, { useEffect } from "react";
import myPicture from "../assets/image/myPicture1.jpg"; // ← make sure this path is correct!
import {
  Calendar,
  MapPin,
  GraduationCap,
  Code,
  Users,
  Target,
} from "lucide-react";

const FloatingIcons = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-20 text-blue-400/30 animate-float">
      <Code size={48} />
    </div>
    <div className="absolute top-40 right-20 text-purple-400/30 animate-float-delayed">
      <Users size={48} />
    </div>
    <div className="absolute bottom-20 left-1/4 text-cyan-400/30 animate-float-slow">
      <Target size={48} />
    </div>
  </div>
);


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const interests = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      description: "Building modern, responsive web applications",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Finding creative solutions to technical challenges",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-950 text-white ">
      {/* Floating background icons */}
      <FloatingIcons />

      {/* Background glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <main className="relative z-10 px-5 py-16 md:py-20 scroll-fade-in">
        <div className="mx-auto max-w-6xl" >
          {/* Hero/About section */}
          <section className="mb-20">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16  scroll-reveal">
              {/* Profile image */}
              <div className="relative shrink-0">
                <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl shadow-cyan-900/40 transition-all hover:shadow-cyan-500/50 hover:border-cyan-400/60">
                  <img
                    src={myPicture}
                    alt="Nhim Dara"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/400?text=Photo+Not+Found";
                    }}
                  />
                </div>

                <div className="absolute -bottom-5 -right-5 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2.5 rounded-full font-semibold shadow-lg">
                  IT Engineer
                </div>
              </div>

              {/* Text content */}
              <div className="space-y-6 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold">
                  About{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Me
                  </span>
                </h1>

                <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                  I'm a passionate IT Engineering student at RUPP with a strong focus
                  on <strong>frontend development</strong>. My journey combines academic
                  knowledge with hands-on experience gained through intensive training
                  at ETAC Center.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                  {[
                    { icon: Calendar, label: "Age", value: "21" },
                    { icon: MapPin, label: "Location", value: "Phnom Penh, Cambodia" },
                    { icon: GraduationCap, label: "Education", value: "IT Engineering" },
                    { icon: Code, label: "Focus", value: "Frontend Development" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 bg-gray-800/40 rounded-xl border border-gray-700/50 hover:bg-gray-800/60 transition-colors"
                    >
                      <item.icon className="w-6 h-6 text-cyan-400" />
                      <div>
                        <p className="text-sm text-gray-400">{item.label}</p>
                        <p className="font-semibold">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <blockquote className="pt-6 italic text-gray-300 border-l-4 border-cyan-500 pl-5 bg-gray-900/30 py-5 rounded-r-xl">
                  "My goal is to bridge the gap between design and technology, creating
                  seamless digital experiences that are both functional and beautiful."
                </blockquote>
              </div>
            </div>
          </section>

          {/* Interests */}
          <section className="scroll-reveal">
            <h2 className="text-4xl font-bold text-center mb-12">
              My{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Interests
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 ">
              {interests.map((item, i) => (
                <div
                  key={i}
                  className="group bg-gray-800/40 border border-gray-700 p-8 rounded-2xl transition-all duration-300 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-900/30 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Required animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(6deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-6deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 7s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 9s ease-in-out infinite 1.5s;
        }
        .animate-float-slow {
          animation: float-slow 11s ease-in-out infinite 3s;
        }
      `}</style>
    </div>
  );
};

export default About;