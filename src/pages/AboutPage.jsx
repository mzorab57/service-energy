import React from "react";
import UnderLine from "../components/ui/UnderLine";

const AboutPage = () => {
  const services = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Electrical Engineering",
      description:
        "Power stations, substations, and medium to high voltage equipment solutions",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Renewable Energy",
      description: "Solar and sustainable energy systems for a greener future",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "Infrastructure Development",
      description: "Comprehensive infrastructure solutions for modern projects",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Smart Systems",
      description: "Oil & gas automation and intelligent system integration",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Expert Engineers" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "Pioneering cutting-edge solutions in energy and infrastructure",
    },
    {
      title: "Sustainability",
      description: "Committed to clean energy and environmental responsibility",
    },
    {
      title: "Excellence",
      description: "Delivering superior quality in every project we undertake",
    },
    {
      title: "Partnership",
      description:
        "Building lasting relationships with our clients and communities",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900  overflow-hidden ">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute  inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200M0%200L40%2040%22%20stroke%3D%22%23ffffff%22%20stroke-opacity%3D%220.02%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>

      <div className="container mx-auto px-4 pb-20 pt-32 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20 relative">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 blur-3xl opacity-30 animate-pulse"></div>
            <h1 className="relative text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Service Energy
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Leading the future of energy and infrastructure solutions in
            Kurdistan and beyond
          </p>

         <UnderLine />
        </div>

        {/* Company Overview */}
{/* Company Overview - Interactive Timeline */}
<div className="mb-20 relative">
  <div className="relative">
    {/* Background Wave */}
    <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute bottom-0 w-full h-96" viewBox="0 0 1200 300" preserveAspectRatio="none">
        <path d="M0,100 C150,150 350,50 600,100 C850,150 1050,50 1200,100 L1200,300 L0,300 Z" 
          fill="url(#waveGradient)" opacity="0.1" />
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Who We <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Are</span>
        </h2>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Content - Timeline */}
        <div className="lg:col-span-7 relative">
          <div className="space-y-8">
            {/* Company Name */}
            <div className="group relative pl-8 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors duration-500">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full ring-4 ring-blue-500/20"></div>
              <h3 className="text-2xl font-bold text-blue-400 mb-3">Service Energy Company Ltd.</h3>
              <p className="text-gray-300 leading-relaxed">
                A leading provider of comprehensive solutions in electrical engineering, renewable energy, 
                infrastructure development, and oil & gas automation.
              </p>
            </div>

            {/* Services */}
            <div className="group relative pl-8 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors duration-500">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full ring-4 ring-blue-500/20"></div>
              <h3 className="text-xl font-bold text-white mb-3">Our Expertise</h3>
              <p className="text-gray-300 leading-relaxed">
                Design, engineering, and supply of electrical implementation works including power stations, 
                substations, medium and high voltage equipment, and generators.
              </p>
            </div>

            {/* Specialization */}
            <div className="group relative pl-8 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors duration-500">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full ring-4 ring-blue-500/20"></div>
              <h3 className="text-xl font-bold text-white mb-3">Our Focus</h3>
              <p className="text-gray-300 leading-relaxed">
                Specializing in integrated and efficient electrical systems customized to meet specific client needs, 
                with a commitment to innovation and sustainability.
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
              <h3 className="text-2xl font-bold text-white text-center mb-8">Our Achievements</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} 
                    className="group relative bg-blue-500/10 rounded-2xl p-6 hover:bg-blue-500/20 transition-all duration-500 hover:scale-105"
                  >
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
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




        {/* Mission & Vision - New Creative Design */}
        <div className="mb-20 relative">
          
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Mission & Vision
               {/* Decorative Line */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-blue-500"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-blue-500"></div>
          </div>
          </h2>
          
          

          <div className="relative max-w-7xl mx-auto">
            {/* Central Connecting Element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Mission */}
              <div className="relative group">
                {/* Geometric Background */}
                <div className="absolute inset-0 transform rotate-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-3xl blur-xl group-hover:rotate-12 transition-transform duration-700"></div>

                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-10 border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-500">
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/30 to-transparent rounded-br-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-600/30 to-transparent rounded-tl-3xl"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon & Title */}
                    <div className="flex items-start mb-8">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-500">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        {/* Pulse Ring */}
                        <div className="absolute inset-0 bg-blue-500 rounded-2xl animate-pulse opacity-20"></div>
                      </div>

                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">
                          Our Mission
                        </h3>
                      
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Service Energy is deeply committed to promoting solar and
                      renewable energy solutions, supporting the transition to
                      sustainable, cost-effective power through the development
                      of clean energy systems and smart energy technologies.
                    </p>

                    {/* Quote Mark */}
                    <div className="absolute top-4 right-4 text-6xl text-blue-500/20 font-serif">
                      "
                    </div>
                  </div>
                </div>

                {/* Connection Line to Center */}
                <div className="absolute top-1/2 right-0 w-16 h-[2px] bg-gradient-to-r from-blue-500 to-transparent transform -translate-y-1/2 hidden lg:block"></div>
              </div>

              {/* Vision */}
              <div className="relative group">
                {/* Geometric Background */}
                <div className="absolute inset-0 transform -rotate-6 bg-gradient-to-br from-blue-600/20 to-blue-700/20 rounded-3xl blur-xl group-hover:-rotate-12 transition-transform duration-700"></div>

                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-10 border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-500">
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/30 to-transparent rounded-bl-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-600/30 to-transparent rounded-tr-3xl"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon & Title */}
                    <div className="flex items-start mb-8 lg:flex-row-reverse lg:text-right">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center lg:ml-6 mr-6 lg:mr-0 group-hover:scale-110 transition-transform duration-500">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                        {/* Pulse Ring */}
                        <div className="absolute inset-0 bg-blue-500 rounded-2xl animate-pulse opacity-20"></div>
                      </div>

                      <div className="lg:text-right">
                        <h3 className="text-3xl font-bold text-white mb-2">
                          Our Vision
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full lg:ml-auto"></div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed text-lg lg:text-right">
                      In addition to turnkey project execution, we provide
                      comprehensive operational support, equipment maintenance,
                      and smart infrastructure integration, ensuring long-term
                      reliability, efficiency, and performance.
                    </p>

                    {/* Quote Mark */}
                    <div className="absolute top-4 left-4 lg:left-auto lg:right-4 text-6xl text-blue-500/20 font-serif transform lg:scale-x-[-1]">
                      "
                    </div>
                  </div>
                </div>

                {/* Connection Line to Center */}
                <div className="absolute top-1/2 left-0 w-16 h-[2px] bg-gradient-to-l from-blue-500 to-transparent transform -translate-y-1/2 hidden lg:block"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-20 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Our Core Services
          <UnderLine />
          </h2>

          {/* Hexagon Grid Design */}
          <div className="relative max-w-6xl mx-auto">
            {/* Center Connection Lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 border border-blue-500/20 rounded-full"></div>
              <div className="absolute w-64 h-64 border border-blue-400/20 rounded-full animate-pulse"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-20 relative">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0
                      ? "lg:pr-20"
                      : "lg:pl-20 lg:flex-row-reverse"
                  }`}
                >
                  {/* Hexagon Icon */}
                  <div className="relative group">
                    <div className="w-32 h-32 relative">
                      {/* Hexagon Shape */}
                      <div className="absolute inset-0">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <defs>
                            <linearGradient
                              id={`gradient-${index}`}
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#3B82F6" />
                              <stop offset="100%" stopColor="#1E40AF" />
                            </linearGradient>
                          </defs>
                          <polygon
                            points="50,5 90,25 90,75 50,95 10,75 10,25"
                            fill={`url(#gradient-${index})`}
                            stroke="#3B82F6"
                            strokeWidth="2"
                            className="group-hover:stroke-blue-400 transition-all duration-500"
                          />
                        </svg>
                      </div>

                      {/* Icon */}
                      <div className="absolute inset-0 flex items-center justify-center text-white">
                        {service.icon}
                      </div>

                      {/* Glow Effect */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-blue-500/30 rounded-full blur-2xl group-hover:w-28 group-hover:h-28 transition-all duration-500"></div>
                      </div>
                    </div>

                    {/* Connection Line */}
                    <div
                      className={`absolute top-1/2 ${
                        index % 2 === 0 ? "left-full w-20" : "right-full w-20"
                      } h-[2px] bg-gradient-to-r from-blue-500/50 to-transparent -translate-y-1/2 hidden lg:block`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "text-left" : "lg:text-right"
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values - Timeline Design */}
        <div className="mb-20 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Our Core Values
            <UnderLine />
          </h2>

          <div className="relative max-w-5xl mx-auto">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500"></div>

            {values.map((value, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-16 last:mb-0 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Content Card */}
                <div
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                  }`}
                >
                  <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex items-center mb-4">
                        <span className="text-5xl font-bold text-blue-400 mr-4">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          {value.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        {value.description}
                      </p>
                    </div>

                    {/* Arrow Pointer */}
                    <div
                      className={`absolute top-1/2 transform -translate-y-1/2 ${
                        index % 2 === 0 ? "-right-3" : "-left-3"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 bg-blue-500 transform rotate-45 ${
                          index % 2 === 0 ? "" : ""
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full ring-4 ring-blue-500/30 ring-offset-4 ring-offset-gray-900"></div>
              </div>
            ))}
          </div>

          {/* Bottom Decorative Elements */}
          <div className="flex justify-center mt-16 gap-8">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-blue-500/50 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default AboutPage;

