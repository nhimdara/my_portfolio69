import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaTelegramPlane,
  FaFacebookMessenger,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "#home" },
    { name: "About Me", path: "#about" },
    { name: "Experience", path: "#experience" },
    { name: "Skill", path: "#skill" },
    { name: "Contact", path: "tel:+855969923931" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      url: "https://facebook.com/dara.nhim.865637",
    },
    {
      name: "Telegram",
      icon: <FaTelegramPlane />,
      url: "https://t.me/dara_nhim",
    },
    {
      name: "Messenger",
      icon: <FaFacebookMessenger />,
      url: "https://m.me/dara.nhim.865637",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://x.com/william57378",
    },
  ];

  return (
    <footer className="relative bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Stay Connected Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Stay Connected</h3>
              <div className="w-12 h-1 bg-cyan-400 mb-4"></div>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Open to new opportunities, collaborations, or friendly chats. Reach out anytime via email or social platforms.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Quick Links</h3>
              <div className="w-12 h-1 bg-cyan-400 mb-4"></div>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm md:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Contact Info</h3>
              <div className="w-12 h-1 bg-cyan-400 mb-4"></div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-sm md:text-base">Phnom Penh, Cambodia</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaPhone className="text-cyan-400 flex-shrink-0" />
                <a
                  href="tel:+855969923931"
                  className="hover:text-cyan-400 transition-colors text-sm md:text-base"
                >
                  (+855) 96 992 3931
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-cyan-400 flex-shrink-0" />
                <a
                  href="mailto:daracombodia54@gmail.com"
                  className="hover:text-cyan-400 transition-colors text-sm md:text-base break-all"
                >
                  daracombodia54@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Social</h3>
              <div className="w-12 h-1 bg-cyan-400 mb-4"></div>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 text-lg md:text-xl"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm md:text-base">
            © {currentYear}{" "}
            <span className="text-cyan-400 font-semibold">Nhim Dara</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;