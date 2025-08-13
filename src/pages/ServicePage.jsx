import React from "react";
import { GiElectricalResistance } from "react-icons/gi";
import { useLocation, Link } from "react-router-dom";
import { TbTransform } from "react-icons/tb";
import AnimatedComponent from "../components/ui/AnimatedComponent";
import "./../style/service.css";

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

      <div className="relative z-0 container mx-auto px-4 py-20">
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