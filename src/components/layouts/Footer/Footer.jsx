


const Footer = () => {
  const currentYear = new Date().getFullYear();
  

  return (
    <footer className="relative overflow-hidden bg-transparent">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5  "></div>

      {/* Main footer content */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="inline-block relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-500 blur-2xl opacity-30 animate-pulse"></div>
                  <h3 className="relative text-4xl font-bold">
                    <span className="">
                      <span className="text-transparent text-white bg-clip-text bg-gradient-to-r from-primarylight via-primary-400 to-primaryLight-500 ">
                        Service Energy
                      </span>{" "}
                    </span>
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  Leading the future of sustainable energy solutions with
                  innovative solar technology and professional services for
                  homes and businesses.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-primary/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">
                      +964 773 439 3298
                    </p>
                    <p className="text-gray-400 text-sm">
                      24/7 Support Available
                    </p>
                  </div>
                </div>

                <div className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-primary/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">
                      info@serviceenergy-iq.com
                    </p>
                    <p className="text-gray-400 text-sm">
                      Get Free Consultation
                    </p>
                  </div>
                </div>

                <div className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-primary/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">
                      Kurdistan Region, Iraq, Erbil
                    </p>
                    <p className="text-gray-400 text-sm">Serving All Regions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-white mb-2">
                  Our Services
                </h4>
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary-500 rounded-full"></div>
              </div>
              <ul className="space-y-3">
                {[
                  "Solar Panel Installation",
                  "Energy Consultation",
                  "System Maintenance",
                  "Battery Storage",
                  "Grid Connection",
                  "Energy Monitoring",
                ].map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="group text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/30"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {service}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-white mb-2">
                  Quick Links
                </h4>
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary-500 rounded-full"></div>
              </div>
              <ul className="space-y-3">
                {[
                  "About Us",
                  "Projects",
                  "Services",
                  "Contact",
                 
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="group text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/30"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media & Bottom */}
          <div className="border-t border-gray-800/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Social Media */}
              <div className="flex items-center space-x-6">
                <span className="text-white font-semibold text-lg">
                  Follow Us:
                </span>
                <div className="flex space-x-4">
                  {[
                    {
                      name: "Facebook",
                      icon: "M18.77 7.46H15.5v-1.9c0-.9.6-1.1 1-1.1h2.2V2.5h-3c-2.8 0-4.7 2.1-4.7 5.1v1.9h-2v2h2v8h3v-8h2.5l.27-2z",
                      link:"https://www.facebook.com/share/1BzcdEnWEp/"
                    },
                    {
                      name: "Instagram",
                      icon: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 111.25 1.25A1.25 1.25 0 0117.25 5.5M12 7a5 5 0 115 5 5 5 0 01-5-5m0 2a3 3 0 103 3 3 3 0 00-3-3z",
                      link:"https://www.instagram.com/serviceenergyy?igsh=MXZpZ3d6ejl4aHJqNw=="
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="group w-12 h-12 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 hover:border-primary/50 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                      title={social.name}
                    >
                      <svg
                        className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Copyright */}
          
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Service Energy All rights reserved. | Developed by{' '}
            <a 
              href="https://wa.me/9647701411893" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-primaryLighter transition-colors"

            >
              Al-Code
            </a>
          </p>
        </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-2  animate-pulse"></div>

      {/* Additional glow effect */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-primary/20 to-transparent blur-sm"></div>
    </footer>
  );
};

export default Footer;
