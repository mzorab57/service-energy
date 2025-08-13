import React from "react";
import { GiElectricalResistance } from "react-icons/gi";
import { useLocation, Link } from "react-router-dom";
import { TbTransform } from "react-icons/tb";
import AnimatedComponent from "../components/ui/AnimatedComponent";
import "./../style/service.css";
import UnderLine from "../components/ui/UnderLine";

const ServicePage = () => {
  const location = useLocation();

  const services = [
     {
       title: "High Voltage Systems",
       icon: "⚡",
       description:
         "Expertise in 132kV, 66kV, 33kV, 22kV, 11kV, and 6.6kV networks",
       features: [
         "Network design and installation",
         "Testing and maintenance",
         "Protection systems",
       ],
     },
     {
       title: "Substations & Power Stations ",
       icon: "🏗️",
       description: "Design, supply, installation, and commissioning of substations",
       features: [
         "Voltage transformation infrastructure",
         "Power generation stations",
         "Control systems",
       ],
     },
     {
       title: "Distribution Networks",
       icon: "🔌",
       description:
         "MV/LV distribution systems for industrial and commercial projects",
       features: [
         "Government projects",
         "Commercial & industrial",
         "Residential areas",
       ],
     },
     {
       title: "Electrical Panel Boards",
       icon: <GiElectricalResistance />,
       description: "11kV & 33kV kiosks, control panels, and protection systems",
       features: ["Control panels", "Switchgear & kiosks", "Protection systems"],
     },
 
     {
       title: "Busduct & Lighting",
       icon: "💡",
       description: "Busduct systems and advanced lighting solutions for smart cities",
       features: ["Busduct systems", "LED lighting", "Smart control", ],
     },
 
     {
       title: "Generators & Synchronization",
       icon: "⚙️",
       description: "Integration with PLC, SCADA, and advanced control systems",
       features: ["SCADA systems", "PLC control", "Network synchronization"],
     },
     {
       title: "Power Transformers",
       icon: <TbTransform />,
       description:
         "Supply and implementation with control and protection systems",
       features: [
         "Power transformers",
         "Protection systems",
         "Automatic control",
       ],
     },
     {
       title: "Solar Energy Systems",
       icon: "☀️",
       description:
         "Design and installation of sustainable solar power solutions",
       features: ["Solar panels", "Inverter systems", "Monitoring & control"],
     },
     {
       title: "Smart System Solutions",
       icon: "🤖",
       description:
         "Automation, IoT integration, and intelligent energy management",
       features: ["IoT systems", "Automation", "Smart energy management"],
     },
     {
       title: "Low Current Systems",
       icon: "📱",
       description: "UPS, CCTV, and structured low voltage solutions",
       features: ["UPS systems", "Surveillance cameras", "Structured cabling"],
     },
     {
       title: "Electrical Infrastructure",
       icon: "🏗️",
       description: "Load calculation and electrical infrastructure design",
       features: [
         "Load calculations",
         "Infrastructure design",
         "International standards",
       ],
     },
   ];

   const services2 = [
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

  const isHome = location.pathname === "/";
  const list = isHome ? services.slice(0, 6) : services;

  return (
    <section
     className=" overflow-hidden relative">
     <div
      style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                               linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
      className="absolute inset-0  opacity-5"></div>
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/20 via-blue-950/20 to-blue-950/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[128px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[128px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-[128px]"></div>
      </div>

      {/* Animated Particles */}
      <div
     
       className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1  rounded-full animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
            }}
          ></div>
        ))}
      </div>
       

      
      <div className="relative z-0 container mx-auto px-4 my-20">
        <div className=" relative  pt-20">
         <div className="inline-block relative text-center w-full mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 blur-3xl opacity-30 animate-pulse"></div>
            <h1 className="relative text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Our Core {" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
          </div>

          {/* Hexagon Grid Design */}
          <div className="relative max-w-6xl mx-auto">
            {/* Center Connection Lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 border border-blue-500/20 rounded-full"></div>
              <div className="absolute w-64 h-64 border border-blue-400/20 rounded-full animate-pulse"></div>
            </div>

          
          </div>
        </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-20 ">
              {services2.map((service, index) => (
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
                              x1="100%"
                              y1="100%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#3B82F6" />
                              <stop offset="100%" stopColor="#1E40AF" />
                            </linearGradient>
                          </defs>
                          <polygon
                            // points="5,5 90,2 90,75 50,95 4,5 1,5"
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
                        <div className="size-28 bg-blue-500/30 rounded-full blur-2xl group-hover:w-28 group-hover:h-28 transition-all duration-500"></div>
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
        {/* Header with Neon Effect */}
        <AnimatedComponent animationType="fade-down" dataAosDuration={800}>
          <div className="text-center my-20">
            <h2 className="relative text-5xl md:text-7xl font-black mb-4">
              <span className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 bg-clip-text text-transparent opacity-50">
                Professional Services
              </span>
              <span className="relative bg-gradient-to-r from-white via-blue-400 to-blue-400 bg-clip-text text-transparent">
                Professional Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-4 font-light tracking-wide">
              Advanced technology solutions for all energy needs
            </p>
            <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed">
              From high‑voltage transmission to smart energy management—our team
              designs, builds, and maintains reliable systems for industries, cities,
              and modern developments.
            </p>
          </div>
        </AnimatedComponent>

        {/* Bento Grid Style Services */}
         <div class="services-grid">
            {location.pathname !== "/service" ?
              services.slice(0, 6).map((service, index) => (
                <AnimatedComponent>
                <div
                  key={index}
                  className={`service-card ${service.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}-card`}
                >
                  <div className="service-icon">
                    <div className="icon-wrapper">{service.icon}</div>
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul class="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <div class="service-hover-effect"></div>
                </div>
              </AnimatedComponent>
              )): services.map((service, index) => (
                <AnimatedComponent key={index}>
                  <div
                    key={index}
                    className={`service-card ${service.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}-card`}
                  >
                    <div className="service-icon">
                      <div className="icon-wrapper">{service.icon}</div>
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <ul class="service-features">
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <div class="service-hover-effect"></div>
                  </div>
                </AnimatedComponent>
              ))}
          </div>

        {/* Modern CTA */}
        {isHome && (
          <AnimatedComponent animationType="fade-up" dataAosDuration={800}>
            <div className="relative">
              <div className="relative bg-gradient-to-r from-blue-500/10 via-blue-500/10 to-blue-500/10 backdrop-blur-xl rounded-[2rem] p-12 overflow-hidden border border-white/10">
                {/* Animated Lines */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-gradient-x"></div>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-gradient-x animation-delay-2000"></div>
                </div>

                <div className="relative text-center">
                  <h3 className="text-4xl font-bold text-white mb-4">
                    Discover All Solutions
                  </h3>
                  <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Unlock the full potential of your electrical infrastructure with our comprehensive service portfolio
                  </p>
                  
                  <Link to="/services" className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden rounded-full bg-white text-black font-semibold transition-all duration-300 hover:scale-105">
                    <span className="relative z-10">Explore All Services</span>
                    <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-[1px] bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedComponent>
        )}
      </div>
    </section>
  );
};

export default ServicePage;