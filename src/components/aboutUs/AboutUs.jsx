import React from "react";
import AnimatedComponent from "../ui/AnimatedComponent";

const AboutUs = () => {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Expert Engineers" },
    { number: "100%", label: "Client Satisfaction" },
  ];
  return (
    <div className="min-h-screen relative py-20 ">
      <img
        src="/assets/images/cloud-video.webp"
        alt="background image"
        className="absolute -top-6 z-20 object-cover opacity-60 w-full h-56 rotate-180 brightness-50"
      />
      <div className="h-24 absolute -top-6 w-full backdrop-blur-md  z-10"></div>
      <div className="h-20 absolute -top-6 w-full bg-gradient-to-b from-black/50 via-black/10 to-transparent  z-50"></div>

      <div className="mb-16">
       

        <div className="text-center ">
          


          {/* Video Section */}
          <AnimatedComponent>
            <div className=" w-full flex justify-center  relative">
              <div className="relative  overflow-hidden ">
                <video
                  className="wfull h-[30rem] lg:h-[50rem]  object-cover"
                  autoPlay
                  preload="auto"
                  muted
                  //   loop
                  playsInline
                  // Added playsinline attribute without capital I for better iOS compatibility
                  webkit-playsinline="true"
                  // Added controls as fallback for iOS
                  //   controls
                >
                  <source
                    src="/assets/videos/bifacial.webm"
                    type="video/webm"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          </AnimatedComponent>
        </div>

        {/* Floating particles for visual effect */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primaryLighter rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random()}s`,
              }}
            />
          ))}
        </div>
      </div>

      
      {/* Company Overview - Interactive Timeline */}
      <div className="mb-20 relative">
        <div className="relative">
          {/* Background Wave */}
          <div className="absolute inset-0 overflow-hidden">
            <svg
              className="absolute bottom-0 w-full h-96"
              viewBox="0 0 1200 300"
              preserveAspectRatio="none"
            >
              <path
                d="M0,100 C150,150 350,50 600,100 C850,150 1050,50 1200,100 L1200,300 L0,300 Z"
                fill="url(#waveGradient)"
                opacity="0.1"
              />
              <defs>
                <linearGradient
                  id="waveGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#1E40AF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Who We{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Are
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Content - Timeline */}
              <div className="lg:col-span-7 relative">
                <div className="space-y-8">
                  {/* Company Name */}
                  <div className="group relative pl-8 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors duration-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full ring-4 ring-blue-500/20"></div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-3">
                      Service Energy Company Ltd.
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      A leading provider of comprehensive solutions in
                      electrical engineering, renewable energy, infrastructure
                      development, and oil & gas automation.
                    </p>
                  </div>

                  {/* Services */}
                  <div className="group relative pl-8 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors duration-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full ring-4 ring-blue-500/20"></div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Our Expertise
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Design, engineering, and supply of electrical
                      implementation works including power stations,
                      substations, medium and high voltage equipment, and
                      generators.
                    </p>
                  </div>

                  {/* Specialization */}
                  <div className="group relative pl-8 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors duration-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full ring-4 ring-blue-500/20"></div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Our Focus
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Specializing in integrated and efficient electrical
                      systems customized to meet specific client needs, with a
                      commitment to innovation and sustainability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content - Interactive Stats */}
              <div className="lg:col-span-5">
                <div className="relative">
                  {/* 3D Card Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl transform rotate-6 opacity-20"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl transform -rotate-6 opacity-20"></div>

                  <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30">
                    <h3 className="text-2xl font-bold text-white text-center mb-8">
                      Our Achievements
                    </h3>

                    <div className="grid grid-cols-2 gap-6">
                      {stats.map((stat, index) => (
                        <div
                          key={index}
                          className="group relative bg-blue-500/10 rounded-2xl p-6 hover:bg-blue-500/20 transition-all duration-500 hover:scale-105"
                        >
                          <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                              {stat.number}
                            </div>
                            <div className="text-sm text-gray-300">
                              {stat.label}
                            </div>
                          </div>

                          {/* Hover Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
